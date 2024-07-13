/*
 * pwix:startup-app-admin/src/client/components/saaCreate/saaCreate.js
 */

import { AccountsUI } from 'meteor/pwix:accounts-ui';
import { pwixI18n } from 'meteor/pwix:i18n';

import './saaCreate.html';
import './saaCreate.less';

Template.saaCreate.onRendered( function(){
    Meteor.callAsync( 'SAA.setEmailTemplate' );
});

Template.saaCreate.helpers({

    // internationalization
    i18n( opt ){
        return pwixI18n.label( I18N, opt.hash.key );
    },

    // whether to show an image besides of the acUserLogin ?
    haveImage(){
        return Object.keys( this ).includes( 'image' ) && this.image;
    },

    // whether to show the acUserLogin component ?
    hideComponent(){
        return SAA._hideComponent.get();
    },

    // the acUserLogin component args
    parmsUserLogin(){
        let one = pwixI18n.label( I18N, 'signup.text_one' );
        if( SAA.configure().requireVerifiedEmail ){
            one += pwixI18n.label( I18N, 'signup.one_verified' );
        }
        let five = pwixI18n.label( I18N, 'signup.text_five' );
        if( SAA.configure().requireVerifiedEmail ){
            five += pwixI18n.label( I18N, 'signup.five_verified' );
        }
        return {
            ... Template.currentData(),
            ... {
                name: 'pwix:startup-app-admin',
                initialDisplay: AccountsUI.C.Panel.SIGNUP,
                renderMode: AccountsUI.C.Render.DIV,
                haveCancelButton: false,
                signupFieldset: true,
                signupLegendEmail: pwixI18n.label( I18N, 'signup.email_legend' ),
                signupLegendPassword: pwixI18n.label( I18N, 'signup.password_legend' ),
                signupPasswordTwice: true,
                signupTextOne: one,
                signupTextFive: five,
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
