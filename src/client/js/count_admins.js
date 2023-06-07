/*
 * pwix:startup-app-admin/src/client/js/count_admins.js
 */

import { ReactiveVar } from 'meteor/reactive-var';

/**
 * @summary Get the count of users which have the application administrator role
 * @param {Object} o the options object, with keys:
 *  - result: must address a ReactiveVar which will hold the result
 */
pwixSAA.countAdmins = function( o ){
    if( !o || !o.result || !( o.result instanceof ReactiveVar )){
        console.error( 'expects a ReactiveVar, found', o.result );
    } else {
        Meteor.call( 'pwixRoles.countUsersInRoles', pwixSAA._conf.adminRole, ( err, res ) => {
            if( err ){
                console.error( err );
            } else {
                //console.debug( 'afCountAdmins, res=', res );
                o.result.set( parseInt( res ));
            }
        });
    }
};
