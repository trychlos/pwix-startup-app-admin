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
                    +'<p>Cliquez ici si vous souhaitez essayer de définir un nouveau compte candidat au privil-ge d\'administration.</p>'
            },
            confirm: {
                title: 'Création du rôle Administrateur',
                another_admin: 'Un autre compte a malheurement acquis les privilèges d\'administration}. Votre requête doit être abandonnée.',
                permsgot: 'Les privilèges d\'administration viennent de vous être attribués.<br />'
                +'S\'il vous plait, soyez conscients de vos responsabilités, et faites un bon travail.',
                required: 'Bien que vous ayez été automatiquement connecté, vous ne recevrez les privilèges d\'administration qu\' après avoir validé votre adresse de messagerie.'
            },
            signup: {
                email_legend: 'Spécifiez une adresse de messagerie que vous controlez',
                text_one: ''
                    +'<p class="">Bonjour,</p>'
                    +'<p class="">C\'est le premier lancement de votre application. Merci de votre confiance.</p>'
                    +'<p class="">Il est nécessaire de définir dès maintenant le premier administrateur du site.</p>',
                one_verified: ''
                    +'<p>Les privilèges d\'administration vous seront attribués dès que votre adresse de messagerie aura été vérifiée.</p>',
                text_four: ''
                    +'<p class="">Et voilà !</p>',
                four_verified: ''
                    +'<p class="">A la demande de l\'application, le privilège d\'administrateur vous sera attribué dès que vous aurez '
                    +'validé votre adresse de messagerie en cliquant sur le lien contenu dans le mail que nous vous avons envoyé.</p>',
                password_legend: 'Pour des raisons de sécurité, une double saisie du mot de passe est demandée'
            }
        }
    }
};
