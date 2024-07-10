# pwix:startup-app-admin

## ChangeLog

### 1.4.3

    Release date: 2024- 7-10

    - Remove superfluous log line

### 1.4.2

    Release date: 2024- 7-10

    - Fix 'pwix_roles_count_by_roles' subscription

### 1.4.1

    Release date: 2024- 7-10

    - configure() is now a reactive data source
    - Take advantage of this reactivity to no more wait for startup()

### 1.4.0

    Release date: 2024- 6- 8

    - Simplify both HTML layout and Less stylesheet, while keeping both horizontal and vertical centerings
    - Prevent a wording repetition (todo #25)
    - Slightly move the confirmation dialog down to not override the tolert (todo #26)
    - Replace obsolete pwix:layout v1 with pwix:ui-layout v2 bumping minor candidate version number
    - Update dependencies, adding pwix:ui-utils, upgrading pwix:modal

### 1.3.0

    Release date: 2024- 5-29

    - Update according to most recent pwix:accounts-ui configuration options
    - Name our acUserLogin instance
    - Add 'image' parameter to saaCreate component (bumping candidate version number)
    - Fix secondary panel message (todo #27)
    - Meteor 3.0 ready

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
- Last updated on 2024, Jul. 10th
