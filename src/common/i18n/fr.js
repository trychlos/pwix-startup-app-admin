/*
 * pwix:startup-app-admin/src/common/i18n/fr.js
 */

SAA.i18n = {
    ... SAA.i18n,
    ... {
        fr: {
            alt: {
                text: ''
                    +'<p>En attente de la vérification d\'une adresse de messagerie...</p>'
                    +'<p>Cliquez ici si vous souhaitez définir un nouveau compte candidat au privilège d\'administration.</p>'
            },
            confirm: {
                title: 'Création du rôle Administrateur',
                another_admin: 'Un autre compte a malheurement acquis les privilèges d\'administration}. Votre requête doit être abandonnée.',
                permsgot: 'Félicitations !<br />Les privilèges d\'administration viennent de vous être attribués.<br />'
                +'S\'il vous plait, soyez conscients de vos responsabilités, et faites un bon travail.',
                required: 'Bien que vous ayez été automatiquement connecté, vous ne recevrez les privilèges d\'administration qu\' après avoir validé votre adresse de messagerie.'
            },
            signup: {
                email_legend: 'Spécifiez une adresse de messagerie que vous controlez',
                text_one: ''
                    +'<p class="">Bonjour,</p>'
                    +'<p class="">C\'est le premier lancement de votre application. Merci de votre confiance.</p>'
                    +'<p class="">Il est nécessaire de définir dès maintenant le premier administrateur de l\'application.</p>',
                one_verified: ''
                    +'<p>Les privilèges d\'administration vous seront attribués dès que votre adresse de messagerie aura été vérifiée.</p>',
                text_five: ''
                    +'<p class="">Et voilà !</p>',
                five_verified: ''
                    +'A la création de votre nouveau compte, vous serez automatiquement connecté, et allez recevoir notre email avec un lien de vérification. '
                    +'Il vous suffira de cliquer sur ce lien de vérification pour obtenir les privilèges d\'administration.',
                password_legend: 'Pour des raisons de sécurité, une double saisie du mot de passe est demandée'
            }
        }
    }
};
