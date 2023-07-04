# pwix:startup-app-admin - TODO

## Summary

1. [Todo](#todo)
2. [Done](#done)

---
## Todo

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|    5 | 2023- 6- 7 | Customize the email verification email |
|   14 | 2023- 6-22 | The end (And voilà,....) should only be displayed after the user has created his account) - click sign-up, display the message, click another button to go on |
|   15 | 2023- 7- 4 | Bump pwix:accounts-ui to 1.3.0 |
|   16 |  |  |

---
## Done

|   Id | Date       | Description and comment(s) |
| ---: | :---       | :---                       |
|    1 | 2023- 6- 5 | Change package-template to package-name |
|      | 2023- 6- 5 | done: startup-app-admin |
|    2 | 2023- 6- 5 | Change pck-template to exported-object + git mv src/common/js/pck-template.js src/common/js/exported-object.js |
|    3 | 2023- 6- 5 | Change pckTemplate to exportedObject |
|      | 2023- 6- 5 | done: SAA |
|    4 | 2023- 6- 5 | Change PCK_ to PREFIX_ |
|      | 2023- 6- 5 | done: SAA_ |
|    6 | 2023- 6- 7 | Have a responsive width for the display |
|      | 2023- 6- 7 | done |
|    7 | 2023- 6- 7 | There are too many alerts and boxes - to be decreased |
|      |            | - when creating the account, two alerts -> pwix:bootbox has to be fixed to not override the first with the second |
|      |            | - when validating an email, a first modal + a second modal, which overlaps the first without a good reason |
|      | 2023- 6- 8 | bootbox alerts are now stacked with v 1.2.0 |
|      | 2023- 6- 8 | pwix:accounts take into account onVerifiedEmail configuration |
|      | 2023- 6- 8 | done |
|    8 | 2023- 6- 7 | when validating an email, should not re-display the signup div - use the route to display something other |
|      | 2023- 6- 9 | Though this is not very clean, we must let the user another chance to define another account |
|      | 2023- 6- 9 | done |
|    9 | 2023- 6- 8 | Have a way to say the user he is an admin |
|      |            | this is difficult because: |
|      |            | - it is not possible to temporarily override the pwix:accounts display options as verifying an email |
|      |            |   implies to reload the page, thus to reinitialize the packages configurations and so overrides are lost |
|      |            | - the pwix:accounts email verification function defaults to display a confirmation dialog box; |
|      |            |   it seems inappropriate to display another dialog box on top of the previous |
|      |            | - because there is already a dialog box on the screen at this time, a tolert alert is not appropriate either |
|      |            | Other possible ways: |
|      |            | - at startup, override if not yet any admin, but getting the admin count arrives long time after the startup! |
|      |            | - use localStorage to survive the reloads |
|      | 2023- 6- 9 | done |
|   10 | 2023- 6- 9 | upgrade bootbox to 1.3.0 (use onVerifiedEmailCb) |
|      | 2023- 6- 9 | done |
|   11 | 2023- 6- 9 | Decrease the application integration footprint |
|      | 2023- 6- 9 | done |
|   12 | 2023- 6-12 | Have SAA.i18n.namespace() to let another package add a translation to this one |
|      | 2023- 6-12 | done |
|   13 | 2023- 6-22 | Default stylesheet should better emphasize of title and subtitles (input label are last, then input group titles, then dialog subtitles, and at last dialog title) |
|      | 2023- 6-23 | done |

---
P. Wieser
- Last updated on 2023, June 12th
