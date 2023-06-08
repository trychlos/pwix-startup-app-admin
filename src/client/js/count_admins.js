/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

/**
 * @summary A ReactiveVar which handles the count of app admins
 */
pwixSAA.countAdmins = new ReactiveVar( -1 );

Tracker.autorun(() => {
    Meteor.call( 'pwixRoles.countUsersInRoles', pwixSAA._conf.adminRole, ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            //console.debug( 'afCountAdmins, res=', res );
            pwixSAA.countAdmins.set( parseInt( res ));
        }
    });
});

Tracker.autorun(() => {
    if( pwixSAA._conf.verbosity & SAA_VERBOSE_COUNTS ){
        console.debug( 'pwix:startup-app-admin countAdmins', pwixSAA.countAdmins.get());
    }
});
