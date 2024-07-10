/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

/**
 * @summary A ReactiveVar which handles the count of app admins
 *  This count is published by pwix:roles
 *  But, because the admin role is configurable, we only can subscribe to the publication ater having been configured or after startup
 */

SAA.countAdmins = new ReactiveVar( -1 );

_ready = {
    val: false,
    dep: new Tracker.Dependency()
};

const _Counts = new Mongo.Collection( 'CountByRole' );

SAA.ready = function(){
    _ready.dep.depend();
    return _ready.val;
}

Meteor.startup(() => {
    const handle = Meteor.subscribe( 'Roles.countByRole', SAA._conf.adminRole );
    Tracker.autorun(() => {
        if( handle.ready()){
            const count = _Counts.find({ role: SAA._conf.adminRole }).fetch()[0].count;
            SAA.countAdmins.set( count );
            _ready.val = true;
            _ready.dep.changed();
        }
    });
});

Tracker.autorun(() => {
    const count = SAA.countAdmins.get();
    if( SAA._conf.verbosity & SAA.C.Verbose.COUNTS ){
        console.log( 'pwix:startup-app-admin countAdmins', count );
    }
});
