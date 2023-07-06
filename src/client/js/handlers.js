/*
 * pwix:startup-app-admin/src/client/js/handlers.js
 */

import { AccountsUI } from 'meteor/pwix:accounts-ui';
import { Bootbox } from 'meteor/pwix:bootbox';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Tracker } from 'meteor/tracker';

function setAdminPrivileges( email ){
    console.debug( 'setAdminPrivileges', email );
    Meteor.call( 'pwixRoles.createRole', SAA._conf.adminRole, { unlessExists: true }, ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            //console.debug( 'role created', res );
            Meteor.call( 'AccountsUI.byEmailAddress', email, ( err, res ) => {
                if( err ){
                    console.error( err );
                } else {
                    const user = res;
                    Meteor.call( 'pwixRoles.addUsersToRoles', user._id, SAA._conf.adminRole, ( err, res ) => {
                        if( err ){
                            console.error( err );
                        }
                    });
                }
            });
        }
    });
}

/*
 * data:
    {
        "email": "goldorak@innocent.com"
    }
 */
function onEmailVerified( event, data ){
    //console.debug( arguments );
    //console.debug( AccountsUI.opts().onVerifiedEmailTitle());
    //console.debug( AccountsUI.opts().onVerifiedEmailMessage());
    if( SAA._conf.requireVerifiedEmail && SAA.waitForEmailVerification()){
        // make sure we do not have got another admin in the meantime
        //  note: race condition here between coutAdmins() and setAdminPrivileges()
        if( SAA.countAdmins.get() > 0 ){
            Bootbox.alert({
                title: pwixI18n.label( I18N, 'confirm.title' ),
                message: pwixI18n.label( I18N, 'confirm.another_admin' )
            });
        } else {
            setAdminPrivileges( data.email );
        }
    }
}

/*
 *  data:
    {
        "_id": "9GsdweKXWfqydwZWD",
        "emails": [
            {
                "address": "goldorak@innocent.com",
                "verified": false
            }
        ],
        "options": {
            "email": "goldorak@innocent.com"
        },
        "autoClose": true,
        "autoConnect": true
    }
 */

// hide the signup panel when the user has acknowleded the dialog
function _bootbox_ack(){
    SAA._hideComponent.set( true );
}

function onUserCreated( event, data ){
    if( SAA.countAdmins.get() === 0 ){

        // clear the current panel
        AccountsUI.clearPanel();

        // reminder that the email needs to be verified
        if( SAA._conf.requireVerifiedEmail ){
            Bootbox.alert({
                title: pwixI18n.label( I18N, 'confirm.title' ),
                message: pwixI18n.label( I18N, 'confirm.required' ),
                cb: _bootbox_ack
            });
            // temporarily modify the pwix:accounts-ui configuration to set our own values
            SAA._setOptions();
            // set our waiting flag
            SAA.waitForEmailVerification( true );

        // or just go to the application
        } else {
            setAdminPrivileges( data.options.email );
            FlowRouter.go( '/' );
        }
    }
}

$( document ).on( 'ac-user-created-event.pwixStartupAppAdmin', onUserCreated );
$( document ).on( 'ac-user-verifieddone-event.pwixStartupAppAdmin', onEmailVerified );

Tracker.autorun(() => {
    if( SAA.countAdmins.get() > 0 ){
        console.debug( 'remove event listeners' );
        $( document ).off( '.pwixStartupAppAdmin' );
    }
});
