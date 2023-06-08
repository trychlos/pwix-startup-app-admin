/*
 * pwix:startup-app-admin/src/common/i18n/en.js
 */

pwixSAA.i18n = {
    ... pwixSAA.i18n,
    ... {
        en: {
            confirm: {
                title: 'Administrator creation',
                another_admin: 'Unfortunately, anoter account has been elevated to application administration. Your request must be cancelled.',
                permsgot: 'You have got Administration privileges.<br />'
                    +'Please be conscious of your responsabilities, and have a good job.',
                required: 'Though you have been successfully connected, you only will get the Administration privilege after having validated your email address.'
            },
            signup: {
                text_one: ''
                    +'<p class="">Hi,</p>'
                    +'<p class="">This is the first startup of your application. Thank you.</p>'
                    +'<p class="">It is time now to define the first administrateur of the site.</p>',
                one_verified: ''
                    +'<p><b>Please be conscious that once this workflow is started, the first user who validates his email address will gain administration privileges. '
                    +'Do not lose any time. Do not let anyone fraudulently gain them !</b></p>',
                text_two: ''
                    +'<p class="">Please enter below an email address that you do control.</p>',
                text_three: ''
                    +'<p class="">For security reasons, please enter your password twice.</p>',
                text_four: ''
                    +'<p class="">And <em>voilà</em>.</p>',
                four_verified: ''
                    +'<p class="">On application request, administrator privilege will be given to you as soon as '
                    +'you will have validated your email address by clicking on the link we have sent to you.</p>'
            }
        }
    }
};
