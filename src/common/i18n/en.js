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
                    +'<p>Click here if you want to define another account candidate to application administration.</p>'
            },
            confirm: {
                title: 'Administrator creation',
                another_admin: 'Unfortunately, another account has been elevated to application administration. Your request must be cancelled.',
                permsgot: 'Congratulations!<br />You have got Administration privileges.<br />'
                    +'Please be conscious of your responsabilities, and have a good job.',
                required: 'Though you have been successfully connected, you only will get the Administration privilege after having validated your email address.'
            },
            email: {
                html: '<p>Hello,</p>>'
                +'<p>In order to get your email verified, and so gain your administrator privileges, please just clic on the below link:</p>'
                +'<p><p>'
                +'<p>%s<p>'
                +'<p><p>'
                +'<p>Thank you for your trust.<p>'
                +'<p><p>'
                +'<small><i>Sent from pwix:startup-app-admin</i></small>',
                subject: 'Email address verification of the first application administrator',
                text: 'Hello,\n'
                    +'In order to get your email verified, and so gain your administrator privileges, please just clic on the below link:\n\n%s\n\n'
                    +'Thank you for your trust.\n\n'
                    +'Sent from pwix:startup-app-admin'
            },
            signup: {
                email_legend: 'Please enter an email address that you do control',
                text_one: ''
                    +'<p class="">Hi,</p>'
                    +'<p class="">This is the first startup of your application. Thank you for your trust.</p>'
                    +'<p class="">It is now time to define its first, most-privileged, user account.</p>',
                one_verified: ''
                    +'<p>You will get administration privileges as soon as your email address will have been verified.</p>'
                    +'<p>&nbsp;</p>',
                text_five: ''
                    +'<p class="">And <em>voilà</em>.</p>',
                five_verified: ''
                    +'<p class="">On sign up, you will be automatically connected, and will receive our mail with a verification link. '
                    +'Just click on this verification link to get administration privileges.</p>',
                password_legend: 'For security reasons, please enter your password twice'
                }
        }
    }
};
