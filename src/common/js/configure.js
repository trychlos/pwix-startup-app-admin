/*
 * pwix:startup-app-admin/src/common/js/configure.js
 */

import merge from 'merge';

pwixSAA._defaults = {
    adminRole: SAA_APP_ADMIN_ROLE,
    requireVerifiedEmail: true,
    verbosity: SAA_VERBOSE_NONE
};

pwixSAA.configure = function( o ){
    pwixSAA._conf = merge.recursive( true, pwixSAA._defaults, o );

    // be verbose if asked for
    if( pwixSAA._conf.verbosity & SAA_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:startup-app-admin configure() with', o, 'building', pwixSAA._conf );
    }
}

pwixSAA._conf = merge.recursive( true, pwixSAA._defaults );
