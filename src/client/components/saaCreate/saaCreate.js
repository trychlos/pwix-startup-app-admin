/*
 * pwix:startup-app-admin/src/client/components/saaCreate/saaCreate.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';
import { ReactiveVar } from 'meteor/reactive-var';

import 'meteor/pwix:accounts';

import './saaCreate.html';
import './saaCreate.less';

Template.saaCreate.onCreated( function(){
    const self = this;

    self.SAA = {
        hideComponent: new ReactiveVar( false )
    };

    self.autorun(() => {
        self.SAA.hideComponent.set( localStorage.getItem( LS_OPTIONS ));
    });
});

Template.saaCreate.helpers({
    // the acUserLogin component args
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
    },

    // internationalization
    i18n( opt ){
        return pwixI18n.label( I18N, opt.hash.key );
    },

    // whether to show the acUserLogin component ?
    hideComponent( opt ){
        return Template.instance().SAA.hideComponent.get();
    }
});

Template.saaCreate.events({
    'click .js-show'( event, instance ){
        const hide = instance.SAA.hideComponent.get();
        instance.SAA.hideComponent.set( !hide );
    }
});
