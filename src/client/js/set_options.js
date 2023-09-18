/*
 * pwix:startup-app-admin/src/client/js/set_options.js
 *
 * As soon as the account is created, and every initialization time, override pwix:accounts-ui configuration
 * to set our own values.
 */

import { AccountsUI } from 'meteor/pwix:accounts-ui';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Tracker } from 'meteor/tracker';

const _parms = [
    'onEmailVerifiedBeforeFn',
    'onEmailVerifiedBox',
    'onEmailVerifiedBoxTitle',
    'onEmailVerifiedBoxMessage',
    'onEmailVerifiedBoxCb'
];

let _values = null;

// ask to AccountsUI to push the onEmailVerified configuration, replacing with the one provided
//  the configuration will be restored as soon as we have got an administrator
SAA._setOptions = function(){
    // callback function
    const _cb = function(){
        FlowRouter.go( '/' );
    };
    // code
    if( !_values ){
        _values = {};
        _parms.every(( p ) => {
            _values[p] = AccountsUI.opts()[p]();
        });
    }
    //AccountsUI.saveOnce( _parms );
    // override the pwix:accounts-ui configuration to display our own message when there will be a new admin
    AccountsUI.opts().onEmailVerifiedBox( true );
    AccountsUI.opts().onEmailVerifiedTitle({ namespace: I18N, i18n: 'confirm.title' });
    AccountsUI.opts().onEmailVerifiedMessage({ namespace: I18N, i18n: 'confirm.permsgot' });
    AccountsUI.opts().onEmailVerifiedAfterFn( _cb );
};

// wait for the package configuration be done
Meteor.startup(() => {
    if( SAA._conf.verbosity & SAA.C.Verbose.STATUS ){
        console.log( 'pwix:startup-app-admin SAA._conf.requireVerifiedEmail', SAA._conf.requireVerifiedEmail, 'countAdmins', SAA.countAdmins.get());
    }
    if( SAA._conf.requireVerifiedEmail && SAA.countAdmins.get() === 0 ){
        SAA._setOptions();
    }
});

// restore the original pwix:accounts-ui configuration as soon as we get an administrator
Tracker.autorun(() => {
    if( SAA.countAdmins.get() > 0 && SAA.waitForEmailVerification()){
        //AccountsUI.restore( _parms );
        if( _values ){
            _parms.every(( p ) => {
                AccountsUI.opts()[p]( _values[p] );
            });
        }
        SAA.waitForEmailVerification( false );
    }
});
