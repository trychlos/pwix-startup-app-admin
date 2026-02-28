/*
 * pwix:startup-app-admin/src/common/js/configure.js
 */

import _ from 'lodash';

import { Logger } from 'meteor/pwix:logger';
import { ReactiveVar } from 'meteor/reactive-var';

const logger = Logger.get();

let _conf = {};
SAA._conf = new ReactiveVar( _conf );

SAA._defaults = {
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
        // check that keys exist
        let built_conf = {};
        Object.keys( o ).forEach(( it ) => {
            if( Object.keys( SAA._defaults ).includes( it )){
                built_conf[it] = o[it];
            } else {
                logger.warn( 'configure() ignore unmanaged key \''+it+'\'' );
            }
        });
        if( Object.keys( built_conf ).length ){
            _conf = _.merge( SAA._defaults, _conf, built_conf );
            SAA._conf.set( _conf );
            logger.verbose({ verbosity: _conf.verbosity, against: SAA.C.Verbose.CONFIGURE }, 'configure() with', built_conf );
        }
    }
    // also acts as a getter
    return SAA._conf.get();
};

_conf = _.merge( {}, SAA._defaults );
SAA._conf.set( _conf );
