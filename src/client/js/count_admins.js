/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

/**
 * @summary A ReactiveVar which handles the count of app admins
 *  This count is published by pwix:roles
 *  But, because the admin role is configurable, we only subscribe to the publication at startup
 */
SAA.countAdmins = new ReactiveVar( -1 );
const _Counts = new Mongo.Collection( 'CountByRole' );

Meteor.startup(() => {
    Meteor.subscribe( 'pwixRoles.countByRole', SAA._conf.adminRole, () => {
        Tracker.autorun(() => {
            const count = _Counts.findOne({ role: SAA._conf.adminRole }).count;
            console.debug( 'CountByRole fetch', _Counts.find().fetch());
            console.log( 'countAdmins', count );
            SAA.countAdmins.set( count );
        });
    });
});

Tracker.autorun(() => {
    if( SAA._conf.verbosity & SAA.C.Verbose.COUNTS ){
        console.debug( 'pwix:startup-app-admin countAdmins', SAA.countAdmins.get());
    }
});
