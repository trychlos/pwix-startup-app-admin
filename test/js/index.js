// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by admin-first.js.
import { name as packageName } from "meteor/pwix:admin-first";

// Write your tests here!
// Here is an example.
Tinytest.add( 'admin-first - example', function( test ){
    test.equal( packageName, 'admin-first' );
});
