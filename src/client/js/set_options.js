/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts-ui configuration
 * to set our own values.
 *
 * Do not display anything while waiting for the email verification (see saaCreate template)
 */

import { Tracker } from 'meteor/tracker';

SAA._setOptions = function(){
    if( localStorage.getItem( LS_OPTIONS )){
        // override the pwix:accounts-ui configuration to display our own message when there will be a new admin
        AccountsUI.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
        AccountsUI.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
        AccountsUI.opts().onVerifiedEmailCb(() => { location.reload(); });
    }
};

SAA._setOptions();

// restore the original pwix:accounts-ui configuration as soon as we get an administrator
Tracker.autorun(() => {
    if( SAA.countAdmins.get() > 0 ){
        const o = localStorage.getItem( LS_OPTIONS );
        if( o ){
            const parsed = JSON.parse( o );
            AccountsUI.opts().onVerifiedEmailTitle( parsed.title );
            AccountsUI.opts().onVerifiedEmailMessage( parsed.message );
            AccountsUI.opts().onVerifiedEmailCb( null );
            localStorage.removeItem( LS_OPTIONS )   
        }
     }
});
