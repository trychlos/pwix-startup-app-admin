/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts-ui configuration
 * to set our own values.
 */

import { AccountsUI } from 'meteor/pwix:accounts-ui';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Tracker } from 'meteor/tracker';

// ask to AccountsUI to push the onVerifiedEmail configuration, replacing with the one provided
//  the configuration will be restored as soon as we have got an administrator
SAA._setOptions = function(){
    // callback function
    const _cb = function(){
        FlowRouter.go( '/' );
    };
    // code
    const count = AccountsUI.saveOnce( 'onVerifiedEmail' );
    console.debug( 'saveOnce', count );
    // override the pwix:accounts-ui configuration to display our own message when there will be a new admin
    AccountsUI.opts().onVerifiedEmailTitle({ namespace: I18N, i18n: 'confirm.title' });
    AccountsUI.opts().onVerifiedEmailMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
    AccountsUI.opts().onVerifiedEmailCb( _cb );
};

// wait for the package configuration be done
Meteor.startup(() => {
    console.debug( 'SAA._conf.requireVerifiedEmail', SAA._conf.requireVerifiedEmail, 'countAdmins', SAA.countAdmins.get());
    if( SAA._conf.requireVerifiedEmail && SAA.countAdmins.get() <= 0 ){
        SAA._setOptions();
    }
});

// restore the original pwix:accounts-ui configuration as soon as we get an administrator
Tracker.autorun(() => {
    if( SAA.countAdmins.get() > 0 && SAA.waitForEmailVerification()){
        const count = AccountsUI.restore( 'onVerifiedEmail' );
        console.debug( 'restore', count );
        SAA.waitForEmailVerification( false );
    }
});
