/*
 * pwix:admin-first/src/common/js/configure.js
 */

pckTemplate.configure = function( o ){
    pckTemplate._conf = merge.recursive( true, pckTemplate._defaults, o );

    // be verbose if asked for
    if( pckTemplate._conf.verbosity & PCK_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:admin-first configure() with', o, 'building', pckTemplate._conf );
    }
}
