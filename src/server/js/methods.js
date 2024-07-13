/*
 * pwix:startup-app-admin/src/server/js/methods.js
 */

import { Accounts } from 'meteor/accounts-base';
import { pwixI18n } from 'meteor/pwix:i18n';

Meteor.methods({
    // this is called from saaCreate.onRendered() template function
    // at that time we are reasonably sure that we will have to create an app administrator and so to send him a verification link
    async 'SAA.setEmailTemplate'(){
        //console.debug( 'initial Accounts.emailTemplates', Accounts.emailTemplates );
        if( Accounts.emailTemplates.from.match( /example\.com/ )){
            Accounts.emailTemplates.from = SAA.configure().email.from;
        }
        let template = {};
        template.subject = SAA.configure().email.subject;
        template.text = SAA.configure().email.text || function( user, url ){
            return pwixI18n.label( I18N, 'email.text', url );
        };
        template.html = SAA.configure().email.text || function( user, url ){
            return pwixI18n.label( I18N, 'email.html', url );
        };
        Accounts.emailTemplates.verifyEmail = template;
        //console.debug( 'set verifyEmail template', template );
    },
});
