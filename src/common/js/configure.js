/*
 * pwix:startup-app-admin/src/common/js/configure.js
 */

import _ from 'lodash';

pwixSAA._conf = {};

pwixSAA._defaults = {
    adminRole: SAA_APP_ADMIN_ROLE,
    requireVerifiedEmail: true,
    verbosity: SAA_VERBOSE_NONE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both in the client and the server
 * @locus Anywhere
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
pwixSAA.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( pwixSAA._conf, pwixSAA._defaults, o );
        // be verbose if asked for
        if( pwixSAA._conf.verbosity & SAA_VERBOSE_CONFIGURE ){
            console.debug( 'pwix:startup-app-admin configure() with', o, 'building', pwixSAA._conf );
        }
    }
    // also acts as a getter
    return pwixSAA._conf;
};

_.merge( pwixSAA._conf, pwixSAA._defaults );
