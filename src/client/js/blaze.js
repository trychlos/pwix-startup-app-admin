/*
 * pwix:startup-app-admin/src/client/js/blaze.js
 */

import { Template } from 'meteor/templating';

// whether the package is ready
//  encapsulating the below logic with this one prevent flickering effect
Template.registerHelper( 'saaIsReady', function(){
    return SAA.ready();
});
