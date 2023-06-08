/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts configuration
 * to set our own values
 */

pwixSAA._setOptions = function(){
    pwiAccounts.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
    pwiAccounts.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
};
