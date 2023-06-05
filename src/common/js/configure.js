/*
 * pwix:admin-first/src/common/js/configure.js
 */

AdminFirst.configure = function( o ){
    AdminFirst._conf = merge.recursive( true, AdminFirst._defaults, o );

    // be verbose if asked for
    if( AdminFirst._conf.verbosity & AF_VERBOSE_CONFIGURE ){
        console.debug( 'pwix:admin-first configure() with', o, 'building', AdminFirst._conf );
    }
}
