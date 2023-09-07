/*
 * pwix:startup-app-admin/src/common/js/constants.js
 */

SAA.C = {

    // default admin role
    Admin: {
        ROLE: 'APP_ADMINISTRATOR'
    },

    // verbosity levels
    Verbose: {
        NONE: 0,
        CONFIGURE: 0x01 <<  0,
        COUNTS:    0x01 <<  1,
        HANDLERS:  0x01 <<  2,
        HIDECOMP:  0x01 <<  3,
        WAITING:   0x01 <<  4,
        STATUS:    0x01 <<  5
    }
};

// non exported

PACKAGE_NAME = 'pwix:startup-app-admin';
I18N = PACKAGE_NAME+':i18n';
WAIT_FOR_VERIFICATION = PACKAGE_NAME + '/WaitForVerification';
