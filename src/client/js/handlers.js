/*
 * pwix:startup-app-admin/src/client/js/handlers.js
 */

import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { pwixBootbox } from 'meteor/pwix:bootbox';
import { tlTolert } from 'meteor/pwix:tolert';

// restore the previous pwix:accounts configuration
//  it happens that verifying the email address implies a page reload, and thus a reinitialization of the packages configurations
//  so there is no way to temporarily override those of pwix:accounts :()
function restoreOpts(){
    /*
    if( pwixSAA._temp ){
        pwiAccounts.opts().onVerifiedEmailTitle( pwixSAA._temp.title );
        pwiAccounts.opts().onVerifiedEmailMessage( pwixSAA._temp.message );    
    }
    */
}

function setAdminPrivileges( email ){
    Meteor.call( 'pwixRoles.createRole', pwixSAA._conf.adminRole, { unlessExists: true }, ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            //console.debug( 'role created', res );
            Meteor.call( 'pwiAccounts.byEmailAddress', email, ( err, res ) => {
                if( err ){
                    console.error( err );
                } else {
                    const user = res;
                    Meteor.call( 'pwixRoles.addUsersToRoles', user._id, pwixSAA._conf.adminRole, ( err, res ) => {
                        if( err ){
                            console.error( err );
                        } else {
                            // at the moment, the pwix:accounts email verification has displayed a confirmation dialog box
                            //  it is most probable that the user didn't yet have acknowledged it
                            // it is so very difficult to either display another diaog, or send a tolert as this later is masked under the dialog
                            // do nothing at the moment
                            //tlTolert.success( pwixI18n.label( I18N, 'confirm.permsgot' ));
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
    console.debug( pwiAccounts.opts().onVerifiedEmailTitle());
    console.debug( pwiAccounts.opts().onVerifiedEmailMessage());
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
            restoreOpts();
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
    // hide the signup div
    self.$( '.acUserLogin' ).hide();
    FlowRouter.go( '/' );
    if( pwixSAA._conf.requireVerifiedEmail ){
        // reminder that the email needs to be verified
        pwixBootbox.alert({
            title: pwixI18n.label( I18N, 'confirm.title' ),
            message: pwixI18n.label( I18N, 'confirm.required' )
        });
        // temporarily modify the pwix:accounts configuration to set our own values
        localStorage.setItem( 'opts', JSON.stringify({
            title: pwiAccounts.opts().onVerifiedEmailTitle(),
            message: pwiAccounts.opts().onVerifiedEmailMessage()
        }));
        pwixSAA._setOptions();
    } else {
        setAdminPrivileges( data.options.email );
    }
}

$( document ).on( 'ac-user-created-event', onUserCreated );
$( document ).on( 'ac-user-verifieddone-event', onEmailVerified );
