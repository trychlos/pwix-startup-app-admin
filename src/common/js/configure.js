/*
 * pwix:startup-app-admin/src/common/js/configure.js
 */

import _ from 'lodash';

SAA._conf = {};

SAA._defaults = {
    adminRole: SAA.C.Admin.ROLE,
    email: {
        from: 'SAA <no-reply@trychlos.org>',
        subject(){ return pwixI18n.label( I18N, 'email.subject' ); },
        text: null,
        html: null
    },
    requireVerifiedEmail: true,
    verbosity: SAA.C.Verbose.NONE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both in the client and the server
 * @locus Anywhere
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
SAA.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( SAA._conf, SAA._defaults, o );
        // be verbose if asked for
        if( SAA._conf.verbosity & SAA.C.Verbose.CONFIGURE ){
            //console.debug( 'pwix:startup-app-admin configure() with', o, 'building', SAA._conf );
            console.debug( 'pwix:startup-app-admin configure() with', o );
        }
    }
    // also acts as a getter
    return SAA._conf;
};

_.merge( SAA._conf, SAA._defaults );
