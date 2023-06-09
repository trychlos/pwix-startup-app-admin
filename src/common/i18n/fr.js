/*
 * pwix:startup-app-admin/src/common/i18n/fr.js
 */

pwixSAA.i18n = {
    ... pwixSAA.i18n,
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
                text_one: ''
                    +'<p class="">Bonjour,</p>'
                    +'<p class="">C\'est le premier lancement de votre application. Merci de votre confiance.</p>'
                    +'<p class="">Il est nécessaire de définir dès maintenant le premier administrateur du site.</p>',
                one_verified: ''
                    +'<p><b>Merci de noter qu\'une fois cette procédure commencée, le premier compte à valider son adresse de messagerie '
                    +'obtiendra automatiquement les privilèges d\'administration. Ne perdez pas de temps. Ne laissez personne obtenir '
                    +'ces permissions frauduleusement !</b></p>',
                text_two: ''
                    +'<p class="">Spécifiez ci-dessous une adresse de messagerie que vous controlez.</p>',
                text_three: ''
                    +'<p class="">Pour des raisons de sécurité et de fiabilité, une double saisie du mot de passe est demandée.</p>',
                text_four: ''
                    +'<p class="">Et voilà !</p>',
                four_verified: ''
                    +'<p class="">A la demande de l\'application, le privilège d\'administrateur vous sera attribué dès que vous aurez '
                    +'validé votre adresse de messagerie en cliquant sur le lien contenu dans le mail que nous vous avons envoyé.</p>'
            }
        }
    }
};
