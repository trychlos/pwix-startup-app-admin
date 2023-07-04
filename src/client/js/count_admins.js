/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

/**
 * @summary A ReactiveVar which handles the count of app admins
 */
SAA.countAdmins = new ReactiveVar( -1 );

Tracker.autorun(() => {
    Meteor.call( 'pwixRoles.countUsersInRoles', SAA._conf.adminRole, ( err, res ) => {
        if( err ){
            console.error( err );
        } else {
            //console.debug( 'afCountAdmins, res=', res );
            SAA.countAdmins.set( parseInt( res ));
        }
    });
});

Tracker.autorun(() => {
    if( SAA._conf.verbosity & SAA.C.Verbose.COUNTS ){
        console.debug( 'pwix:startup-app-admin countAdmins', SAA.countAdmins.get());
    }
});
