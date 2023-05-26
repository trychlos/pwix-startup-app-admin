/*
 * pwix:package-template/src/common/js/configure.js
 */

pckTemplate.configure = function( o ){
    pckTemplate._conf = merge.recursive( true, pckTemplate._defaults, o );

    // be verbose if asked for
    if( pckTemplate._conf.verbosity & PCK_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:package-template configure() with', o, 'building', pckTemplate._conf );
    }
}
