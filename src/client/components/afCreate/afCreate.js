/*
 * pwix:admin-first/src/client/components/afCreate/afCreate.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';
import { ReactiveVar } from 'meteor/reactive-var';

import 'meteor/pwix:accounts';

import './afCreate.html';

Template.afCreate.onCreated( function(){
    const self = this;

    self.AF = {
        textOne: new ReactiveVar( null ),
        textTwo: new ReactiveVar( null ),
        textThree: new ReactiveVar( null ),
        textFour: new ReactiveVar( null )
    };

    self.autorun(() => {
        console.debug( pwixI18n.language());
        self.AF.textOne.set( pwixI18n.label( I18N, 'signup.text_one' ));
        self.AF.textTwo.set( pwixI18n.label( I18N, 'signup.text_two' ));
        self.AF.textThree.set( pwixI18n.label( I18N, 'signup.text_three' ));
        let text = pwixI18n.label( I18N, 'signup.text_four' );
        if( AdminFirst._conf.requireVerifiedEmail ){
            text += pwixI18n.label( I18N, 'signup.text_verified' );
        }
        self.AF.textFour.set( text );
    });
});

Template.afCreate.helpers({

    args(){
        const AF = Template.instance().AF;
        console.debug( 'in args' );
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
                signupTextOne: AF.textOne.get(),
                signupTextTwo: AF.textTwo.get(),
                signupTextThree: AF.textThree.get(),
                signupTextFour: AF.textFour.get(),
                initialPanel: AC_PANEL_SIGNUP
            }
        };
    }
});
