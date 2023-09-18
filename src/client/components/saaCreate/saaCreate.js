/*
 * pwix:startup-app-admin/src/client/components/saaCreate/saaCreate.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import 'meteor/pwix:accounts-ui';

import './saaCreate.html';
import './saaCreate.less';

Template.saaCreate.helpers({

    // internationalization
    i18n( opt ){
        return pwixI18n.label( I18N, opt.hash.key );
    },

    // whether to show the acUserLogin component ?
    hideComponent( opt ){
        return SAA._hideComponent.get();
    },

    // the acUserLogin component args
    parmsUserLogin(){
        let one = pwixI18n.label( I18N, 'signup.text_one' );
        if( SAA._conf.requireVerifiedEmail ){
            one += pwixI18n.label( I18N, 'signup.one_verified' );
        }
        let four = pwixI18n.label( I18N, 'signup.text_four' );
        if( SAA._conf.requireVerifiedEmail ){
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
                signupLegendEmail: pwixI18n.label( I18N, 'signup.email_legend' ),
                signupLegendPassword: pwixI18n.label( I18N, 'signup.password_legend' ),
                signupPasswordTwice: true,
                signupTextOne: one,
                signupTextFour: four,
                signinLink: false,
                resetLink: false
            }
        };
    }
});

Template.saaCreate.events({
    'click .js-show'( event, instance ){
        const hide = SAA._hideComponent.get();
        SAA._hideComponent.set( !hide );
    }
});
