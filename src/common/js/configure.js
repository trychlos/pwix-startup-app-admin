/*
 * pwix:startup-app-admin/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};

const _defaults = {
    adminRole: SAA.C.Admin.ROLE,
    email: {
        from: 'SAA <no-reply@trychlos.org>',
        subject(){ return pwixI18n.label( I18N, 'email.subject' ); },
        text: null,
        html: null
    },
    requireVerifiedEmail: true,
    verbosity: SAA.C.Verbose.CONFIGURE
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
        _.merge( _conf, _defaults, o );
        SAA._conf.set( _conf );
        // be verbose if asked for
        if( _conf.verbosity & SAA.C.Verbose.CONFIGURE ){
            //console.debug( 'pwix:startup-app-admin configure() with', o, 'building', SAA._conf );
            console.debug( 'pwix:startup-app-admin configure() with', o );
        }
    }
    // also acts as a getter
    return SAA._conf.get();
};

_.merge( _conf, _defaults );
SAA._conf = new ReactiveVar( _conf );
