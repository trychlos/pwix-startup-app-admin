/*
 * pwix:startup-app-admin/src/client/js/handlers.js
 */

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { pwixBootbox } from 'meteor/pwix:bootbox';

function setAdminPrivileges( email ){
    Meteor.call( 'pwixRoles.createRole', pwixSAA._conf.adminRole, { unlessExists: true }, ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            //console.debug( 'role created', res );
            Meteor.call( 'pwixAccounts.byEmailAddress', email, ( err, res ) => {
                if( err ){
                    console.error( err );
                } else {
                    const user = res;
                    Meteor.call( 'pwixRoles.addUsersToRoles', user._id, pwixSAA._conf.adminRole, ( err, res ) => {
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
    //console.debug( pwixAccounts.opts().onVerifiedEmailTitle());
    //console.debug( pwixAccounts.opts().onVerifiedEmailMessage());
    if( pwixSAA._conf.requireVerifiedEmail ){
        // make sure we do not have got another admin in the meantime
        //  note: race condition here
        Meteor.call( 'pwixRoles.countUsersInRoles', pwixSAA._conf.adminRole, ( err, res ) => {
            if( err ){
                console.error( err );
            } else if( res > 0 ){
                pwixBootbox.alert({
                    title: pwixI18n.label( I18N, 'confirm.title' ),
                    message: pwixI18n.label( I18N, 'confirm.another_admin' )
                });
            } else {
                setAdminPrivileges( data.email );
            }
        });
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
function onUserCreated( event, data ){
    if( pwixSAA._conf.requireVerifiedEmail ){
        // reminder that the email needs to be verified
        pwixBootbox.alert({
            title: pwixI18n.label( I18N, 'confirm.title' ),
            message: pwixI18n.label( I18N, 'confirm.required' )
        });
        // temporarily modify the pwix:accounts configuration to set our own values
        localStorage.setItem( LS_OPTIONS, JSON.stringify({
            title: pwixAccounts.opts().onVerifiedEmailTitle(),
            message: pwixAccounts.opts().onVerifiedEmailMessage()
        }));
        pwixSAA._setOptions();
        location.reload();
    } else {
        self.$( '.acUserLogin' ).hide();
        FlowRouter.go( '/' );
        setAdminPrivileges( data.options.email );
    }
}

$( document ).on( 'ac-user-created-event', onUserCreated );
$( document ).on( 'ac-user-verifieddone-event', onEmailVerified );
