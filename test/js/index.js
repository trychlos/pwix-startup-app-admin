// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by package-template.js.
import { name as packageName } from "meteor/pwix:package-template";

// Write your tests here!
// Here is an example.
Tinytest.add( 'package-template - example', function( test ){
    test.equal( packageName, 'package-template' );
});
