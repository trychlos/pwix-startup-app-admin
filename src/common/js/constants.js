/*
 * pwix:startup-app-admin/src/common/js/constants.js
 */

SAA.C = {

    // admin role
    Admin: {
        ROLE: 'APP_ADMIN'
    },

    // verbosity levels
    Verbose: {
        NONE: 0,
        CONFIGURE: 0x01 <<  0,
        COUNTS:    0x01 <<  1
    }
};

// non exported

PACKAGE_NAME = 'pwix:startup-app-admin';

I18N = PACKAGE_NAME+':i18n';

LS_OPTIONS = 'pwix:startup-app-admin/accounts';
