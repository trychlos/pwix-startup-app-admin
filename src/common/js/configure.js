/*
 * pwix:admin-first/src/common/js/configure.js
 */

import merge from 'merge';

AdminFirst._defaults = {
    adminRole: AF_APP_ADMIN_ROLE,
    requireVerifiedEmail: true,
    verbosity: AF_VERBOSE_NONE
};

AdminFirst.configure = function( o ){
    AdminFirst._conf = merge.recursive( true, AdminFirst._defaults, o );

    // be verbose if asked for
    if( AdminFirst._conf.verbosity & AF_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:admin-first configure() with', o, 'building', AdminFirst._conf );
    }
}

AdminFirst._conf = merge.recursive( true, AdminFirst._defaults );
