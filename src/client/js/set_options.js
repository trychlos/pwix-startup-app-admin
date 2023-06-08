/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts configuration
 * to set our own values
 */

import { Tracker } from 'meteor/tracker';

pwixSAA._setOptions = function(){
    if( localStorage.getItem( LS_OPTIONS )){
        pwiAccounts.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
        pwiAccounts.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
    }
};

pwixSAA._setOptions();

Tracker.autorun(() => {
    if( pwixSAA.countAdmins.get() > 0 ){
        const o = localStorage.getItem( LS_OPTIONS );
        if( o ){
            const parsed = JSON.parse( o );
            pwiAccounts.opts().onVerifiedEmailTitle( parsed.title );
            pwiAccounts.opts().onVerifiedEmailMessage( parsed.message );
            localStorage.removeItem( LS_OPTIONS )   
        }
     }
});
