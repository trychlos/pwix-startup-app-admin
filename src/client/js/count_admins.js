/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

/**
 * @summary A ReactiveVar which handles the count of app admins
 *  This count is published by pwix:roles
 *  But, because the admin role is configurable, we have to re-run ater having been configured
 */

SAA.countAdmins = new ReactiveVar( -1 );

_ready = {
    val: false,
    handle: null,
    dep: new Tracker.Dependency()
};

const _Counts = new Mongo.Collection( 'pwix_roles_count_by_roles' );

SAA.ready = function(){
    _ready.dep.depend();
    return _ready.val;
}

Tracker.autorun(() => {
    const role = SAA.configure().adminRole;
    _ready.handle = Meteor.subscribe( 'Roles.countByRole', role );
});

Tracker.autorun(() => {
    const role = SAA.configure().adminRole;
    if( _ready.handle.ready()){
        const count = _Counts.find({ role: role }).fetch()[0].count;
        SAA.countAdmins.set( count );
        _ready.val = true;
        _ready.dep.changed();
    }
});

Tracker.autorun(() => {
    const count = SAA.countAdmins.get();
    if( SAA.configure().verbosity & SAA.C.Verbose.COUNTS ){
        console.log( 'pwix:startup-app-admin countAdmins', count );
    }
});
