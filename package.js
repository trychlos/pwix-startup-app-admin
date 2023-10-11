Package.describe({
    name: 'pwix:startup-app-admin',
    version: '1.2.1-rc',
    summary: 'Force the application to start by creating an administrator',
    git: 'https://github.com/trychlos/pwix-startup-app-admin',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'SAA'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:startup-app-admin' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    api.versionsFrom( '2.9.0' );
    api.use( 'alanning:roles@3.4.0' );
    api.use( 'blaze-html-templates@2.0.0', 'client' );
    api.use( 'ecmascript' );
    api.use( 'less@4.0.0', 'client' );
    api.use( 'pwix:accounts-ui@1.3.0' );
    api.use( 'pwix:bootbox@1.5.0' );
    api.use( 'pwix:layout@1.3.0' );
    api.use( 'pwix:roles@1.0.1' );
    api.use( 'tmeasday:check-npm-versions@1.0.2', 'server' );
    api.addFiles( 'src/client/components/saaCreate/saaCreate.js', 'client' );
}

// NPM dependencies are checked in /src/server/js/check_npms.js
// See also https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies
