/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts configuration
 * to set our own values.
 *
 * Do not display anything while waiting for the email verification (see saaCreate template)
 */

import { Tracker } from 'meteor/tracker';

pwixSAA._setOptions = function(){
    if( localStorage.getItem( LS_OPTIONS )){
        // override the pwix:accounts configuration to display our own message when there will be a new admin
        pwiAccounts.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
        pwiAccounts.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
        pwiAccounts.opts().onVerifiedEmailCb(() => { location.reload(); });
    }
};

pwixSAA._setOptions();

// restore the original pwix:accounts configuration as soon as we get an administrator
Tracker.autorun(() => {
    if( pwixSAA.countAdmins.get() > 0 ){
        const o = localStorage.getItem( LS_OPTIONS );
        if( o ){
            const parsed = JSON.parse( o );
            pwiAccounts.opts().onVerifiedEmailTitle( parsed.title );
            pwiAccounts.opts().onVerifiedEmailMessage( parsed.message );
            pwiAccounts.opts().onVerifiedEmailCb( null );
            localStorage.removeItem( LS_OPTIONS )   
        }
     }
});
