// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by startup-app-admin.js.
import { name as packageName } from "meteor/pwix:startup-app-admin";

// Write your tests here!
// Here is an example.
Tinytest.add( 'startup-app-admin - example', function( test ){
    test.equal( packageName, 'startup-app-admin' );
});
