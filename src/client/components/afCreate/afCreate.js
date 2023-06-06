/*
 * pwix:admin-first/src/client/components/afCreate/afCreate.js
 */

import './afCreate.html';

Template.afCreate.helpers({
    // when we do not have yet an application administrator, let the user create the first one
    args(){
        return {
            ... Template.currentData(),
            ... {
                loggedButtonAction: Package['pwix:accounts'].AC_ACT_HIDDEN,
                unloggedButtonAction: Package['pwix:accounts'].AC_ACT_HIDDEN,
                renderMode: Package['pwix:accounts'].AC_RENDER_DIV,
                signinLink: false,
                resetLink: false,
                signupPasswordTwice: true,
                signupTextOne: ''
                    +'<p class="">Bonjour,</p>'
                    +'<p class="">Merci pour ce premier lancement de l\'application.</p>'
                    +'<p class="">Il est nécessaire de définir dès maintenant le premier administrateur du site.</p>',
                signupTextTwo: ''
                    +'<p class="">Spécifiez une adresse de messagerie que vous controlez.</p>',
                signupTextThree: ''
                    +'<p class="">Pour des raisons de sécurité et de fiabilité, une double saisie du mot de passe est demandée.</p>',
                signupTextFour: ''
                    +'<p class="">Et c\'est la fin.</p>',
                initialPanel: Package['pwix:accounts'].AC_PANEL_SIGNUP
            }
        };
    }
});
