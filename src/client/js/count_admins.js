/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { Logger } from 'meteor/pwix:logger';
import { Mongo } from 'meteor/mongo';
import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

const logger = Logger.get();

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
    _ready.handle = Meteor.subscribe( 'pwix_roles_count_by_roles', role );
});

// will not receive anything if the user is not connected and there is already an app admin
Tracker.autorun(() => {
    if( _ready.handle.ready()){
        const role = SAA.configure().adminRole;
        const found =  _Counts.find({ role: role }).fetch();
        if( found.length ){
            const count = found[0].count;
            SAA.countAdmins.set( count );
            _ready.val = true;
            _ready.dep.changed();
        }
    }
});

Tracker.autorun(() => {
    const count = SAA.countAdmins.get();
    logger.verbose({ verbosity: SAA.configure().verbosity, against: SAA.C.Verbose.COUNTS }, 'countAdmins', count );
});

Tracker.autorun(() => {
    logger.debug( 'ready()', SAA.ready());
});
