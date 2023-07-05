/*
 * pwix:startup-app-admin/src/client/js/hide_component.js
 *
 * Rationale:
 * - the saaCreate template needs to know if it must display the singup panel, or a waiting message.
 * - the waiting message is a clickable one, which allow the user to re-display the signup panel
 * - though each time a new user is created, the panel is one more time hidden to the benefit of the waiting message
 */

import { ReactiveVar } from 'meteor/reactive-var';
import { Tracker } from 'meteor/tracker';

SAA._hideComponent = new ReactiveVar( localStorage.getItem( WAIT_FOR_VERIFICATION ) || false );

Tracker.autorun(() => {
    console.debug( 'hideComponent', SAA._hideComponent.get());
});
