/*
 * pwix:startup-app-admin/src/client/components/saaCreate/saaCreate.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import 'meteor/pwix:accounts';

import './saaCreate.html';
import './saaCreate.less';

Template.saaCreate.helpers({
    args(){
        let one = pwixI18n.label( I18N, 'signup.text_one' );
        if( pwixSAA._conf.requireVerifiedEmail ){
            one += pwixI18n.label( I18N, 'signup.one_verified' );
        }
        let four = pwixI18n.label( I18N, 'signup.text_four' );
        if( pwixSAA._conf.requireVerifiedEmail ){
            four += pwixI18n.label( I18N, 'signup.four_verified' );
        }
        return {
            ... Template.currentData(),
            ... {
                loggedButtonAction: AC_ACT_HIDDEN,
                unloggedButtonAction: AC_ACT_HIDDEN,
                initialPanel: AC_PANEL_SIGNUP,
                renderMode: AC_RENDER_DIV,
                haveCancelButton: false,
                signupPasswordTwice: true,
                signupTextOne: one,
                signupTextTwo: pwixI18n.label( I18N, 'signup.text_two' ),
                signupTextThree: pwixI18n.label( I18N, 'signup.text_three' ),
                signupTextFour: four,
                signinLink: false,
                resetLink: false
            }
        };
    }
});
