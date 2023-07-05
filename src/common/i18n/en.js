/*
 * pwix:startup-app-admin/src/common/i18n/en.js
 */

SAA.i18n = {
    ... SAA.i18n,
    ... {
        en: {
            alt: {
                text: ''
                    +'<p>Waiting for an email address be verified...</p>'
                    +'<p>Click here if you want try to define another account candidate to application administration.</p>'
            },
            confirm: {
                title: 'Administrator creation',
                another_admin: 'Unfortunately, another account has been elevated to application administration. Your request must be cancelled.',
                permsgot: 'Congratulations!<br />You have got Administration privileges.<br />'
                    +'Please be conscious of your responsabilities, and have a good job.',
                required: 'Though you have been successfully connected, you only will get the Administration privilege after having validated your email address.'
            },
            signup: {
                email_legend: 'Please enter an email address that you do control',
                text_one: ''
                    +'<p class="">Hi,</p>'
                    +'<p class="">This is the first startup of your application. Thank you.</p>'
                    +'<p class="">It is time now to define the first administrateur of the site.</p>',
                one_verified: ''
                    +'<p>You will get administration privileges as soon as your email address will be verified.</p>',
                text_four: ''
                    +'<p class="">And <em>voilà</em>.</p>',
                four_verified: ''
                    +'<p class="">On sign up, you will be automatically connected, and will receive our mail with a verification link. '
                    +'Just click on this verification link to get administration privileges.</p>',
                password_legend: 'For security reasons, please enter your password twice'
                }
        }
    }
};
