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
            console.debug( 'role created', res );
            Meteor.call( 'pwiAccounts.byEmailAddress', email, ( err, res ) => {
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
    if( pwixSAA._conf.requireVerifiedEmail ){
        // make sure we do not have got another admin in the meantime
        Meteor.call( 'pwixRoles.countUsersInRoles', pwixSAA._conf.adminRole, ( err, res ) => {
            if( err ){
                console.error( err );
            } else if( res > 0 ){
                pwixBootbox.alert({
                    title: pwixI18n.label( I18N, 'confirm.title' ),
                    message: pwixI18n.label( I18N, 'confirm.another_admin' )
                });
                // restore the previous pwix:accounts configuration
                pwiAccounts.opts().onVerifiedEmailTitle( pwixSAA._temp.title );
                pwiAccounts.opts().onVerifiedEmailMessage( pwixSAA._temp.message );    
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
        pwixBootbox.alert({
            title: pwixI18n.label( I18N, 'confirm.title' ),
            message: pwixI18n.label( I18N, 'confirm.required' )
        });
        self.$( '.acUserLogin' ).hide();
        FlowRouter.go( '/' );
        // temporarily modify the pwix:accounts configuration to set ours
        pwixSAA._temp = {
            title: pwiAccounts.opts().onVerifiedEmailTitle(),
            message: pwiAccounts.opts().onVerifiedEmailMessage()
        };
        pwiAccounts.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
        pwiAccounts.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });    
    } else {
        setAdminPrivileges( data.options.email );
    }
}

$( document ).on( 'ac-user-created-event', onUserCreated );
$( document ).on( 'ac-user-verifieddone-event', onEmailVerified );
