/*
 * pwix:startup-app-admin/src/client/js/wait_for_verif.js
 *
 * A reactive data source which is true when waiting for a user to have a validated email
 */

import { Tracker } from 'meteor/tracker';

_wait = {
    dep: new Tracker.Dependency(),
    value: localStorage.getItem( WAIT_FOR_VERIFICATION ) || false
};

/**
 * @summary Get/set the 'wait_for_email_verification' flag
 * @param {Boolean} flag the value to be set
 * @returns {Boolean} the current value
 */
SAA.waitForEmailVerification = function( flag ){
    if( flag !== undefined ){
        if( flag === true || flag === false ){
            if( flag !== _wait.value ){
                _wait.value = flag;
                _wait.dep.changed();
                if( flag ){
                    localStorage.setItem( WAIT_FOR_VERIFICATION, true );
                } else {
                    localStorage.removeItem( WAIT_FOR_VERIFICATION );
                }
            }
        }
    }
    _wait.dep.depend();
    return _wait.value;
};

Tracker.autorun(() => {
    const wait = SAA.waitForEmailVerification();
    if( SAA.configure().verbosity & SAA.C.Verbose.WAITING ){
        console.log( 'pwix:startup-app-admin waitForEmailVerification', wait );
    }
});
