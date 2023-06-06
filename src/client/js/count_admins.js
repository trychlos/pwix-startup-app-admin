/*
 * pwix:admin-first/src/client/js/count_admins.js
 */

import { ReactiveVar } from 'meteor/reactive-var';

AdminFirst.countAdmins = function( o ){
    if( !o || !o.result || !( o.result instanceof ReactiveVar )){
        console.error( 'expects a ReactiveVar, found', o.result );
    } else {
        Meteor.call( 'pwixRoles.countUsersInRoles', AdminFirst._conf.adminRole, ( err, res ) => {
            if( err ){
                console.error( err );
            } else {
                console.debug( 'afCountAdmins, res=', res );
                o.result.set( parseInt( res ));
            }
        });
    }
};
