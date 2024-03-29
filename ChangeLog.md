# pwix:startup-app-admin

## ChangeLog

### 1.2.0

    Release date: 2023-10-11

    - Add lodash dependency
    - configure() now acts both as a getter and a setter
    - Fix pwix:accounts-ui (renamed) dependency
    - Improve the display (todo #13)
    - Upgrade pwix:layout version requirement to get layout.less constants
    - Upgrade pwix:bootbox version requirement to get Bootbox export
    - Rename globally exported pwixSAA to SAA (bumping candidate version number)
    - Reorganize constants to not pollute global space
    - Remove event handlers when no more needed (todo #21)
    - Bump pwix:accounts-ui requirement to get rid of pwix:cookie-manager#26
    - Make the package auto-align itself inside of the provided parent div
    - Change the default admin role to APP_ADMINISTRATOR
    - Meteor requirement is back to 2.9.0
    - Bump pwix:accounts-ui requirement to v 1.4.0
    - Define SAA.ready() new method
    - Define saaIsReady() Blaze helper

### 1.1.1

    Release date: 2023- 6-12

    - Fix Meteor packaging

### 1.1.0

    Release date: 2023- 6-12

    - Define SAA.i18n.namespace() method to let anyone provide translations (todo #12)

### 1.0.0

    Release date: 2023- 6- 9

    - Initial release

---
P. Wieser
- Last updated on 2023, Oct. 11th
