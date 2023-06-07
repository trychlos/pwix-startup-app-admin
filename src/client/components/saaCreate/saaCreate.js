/*
 * pwix:startup-app-admin/src/client/components/saaCreate/saaCreate.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import 'meteor/pwix:accounts';

import './saaCreate.html';

Template.saaCreate.helpers({
    args(){
        let text = pwixI18n.label( I18N, 'signup.text_four' );
        if( pwixSAA._conf.requireVerifiedEmail ){
            text += pwixI18n.label( I18N, 'signup.text_verified' );
        }
        return {
            ... Template.currentData(),
            ... {
                loggedButtonAction: AC_ACT_HIDDEN,
                unloggedButtonAction: AC_ACT_HIDDEN,
                renderMode: AC_RENDER_DIV,
                haveCancelButton: false,
                signinLink: false,
                resetLink: false,
                signupPasswordTwice: true,
                signupTextOne: pwixI18n.label( I18N, 'signup.text_one' ),
                signupTextTwo: pwixI18n.label( I18N, 'signup.text_two' ),
                signupTextThree: pwixI18n.label( I18N, 'signup.text_three' ),
                signupTextFour: text,
                initialPanel: AC_PANEL_SIGNUP
            }
        };
    }
});
