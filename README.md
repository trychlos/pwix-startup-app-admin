# pwix:startup-app-admin

## What is it ?

A Meteor package (Blaze-based) template which, once added to the application, let it start by creating a global Application Administrator account.

## Usage

### Install the package

`meteor add pwix:startup-app-admin`

### Layout integration

#### In template.html

```
    {{# if isReady }}
        {{#if shouldDisplayContent }}
            {{> your_home_page_content }}
        {{else}}
            {{> saaCreate (saaArgs) }}
        {{/if}}
    {{/if}}
```

#### In template.js

```
    Template.template.helpers({

        // whether we have the package is used and ready to provide its data
        //  encapsulating all the display with this test prevents Blaze flickering
        isReady(){
            const hasPackage = Object.keys( Package ).includes( 'pwix:startup-app-admin' );
            const ready = hasPackage ? Package['pwix:startup-app-admin'].SAA.ready() : false;
            return ready;
        },

        // when we do not have yet an application administrator, let the user create the first one
        //  for now, at least pass the current args (which is implied nonetheless but that is explicit this way)
        saaArgs(){
            return {
                ... Template.currentData()
            };
        },

        // display the normal content of the page if we do not have the pwix:startup-app-admin package, or there is already an admin
        shouldDisplayContent(){
            const hasPackage = Object.keys( Package ).includes( 'pwix:startup-app-admin' );
            const hasAdmin = hasPackage ? Package['pwix:startup-app-admin'].SAA.countAdmins.get() > 0 : false;
            return hasPackage && !hasAdmin;
        }
    });
```

## Configuration

The package's behavior can be configured through a call to the `SAA.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `adminRole`

    Define the name of the role of the application adminitrator.

    Defaults to [`SAA.C.Admin.ROLE`](#constants) constant.

- `requireVerifiedEmail`

    Whether the newly created user must provide a verifiable email, and make it verified, in order to get the Administrator privilege.

    This means that the initial login page will stay stuck until the mail is verified.

    Defaults to `true`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `SAA.C.Verbose.NONE`

        Do not display any trace log to the console

    - `SAA.C.Verbose.CONFIGURE`

        Trace `SAA.configure()` calls and their result

    - `SAA.C.Verbose.COUNTS`

        Trace the changes of `countAdmins` ReactiveVar.

Please note that `SAA.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `SAA.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

`SAA.configure()` is a reactive data source.

## `SAA`

The globally exported object.

### Methods

- `SAA.i18n.namespace()`

    This method returns the `pwix:i18n` namespace of the `pwix:startu-app-admin` package.

    With that name, anyone is so able to provide additional translations.

- `SAA.ready()`

    A reactive data source which returns `false` while the admin count is not ready.

### Data

 - `SAA.countAdmins`

    Client only.

    A `ReactiveVar` which handles the count of application administrators.

    Its value is initialized to -1, and set to 0 or greater as soon as it receives the data from the server.

### Blaze components

- `saaCreate`

    Let the user enter his credentials for the first time.

    All passed-in arguments will be directly passed to `acUserLogin` underlying component.

    Also accepts an `image` url to be displayed besides of the form.

### Constants

- `SAA.C.Admin.ROLE`

    The name of the application admin role.

    Value is 'APP_ADMINISTRATOR'.

### Maintainer notes

`pwix:startup-app-admin` package implements a workflow:

- first phase is when there is not yet any admin and no user has been created through our panel

    a `signup` panel is displayed and let define a new account

    while `countAdmins` reactive var is zero, we set event listeners to handle user creation and email verification events

    on each user creation, the event handler set the `waitForEmailVerification` flag on local storage; this variable is built as a reactive data source

    also, on each user creation, the same event handler reset the `hideComponent` reactive var to re-display the clickable message box

- second phase is when there is not yet any admin, and at least one account has been created through our panel; we are here waiting for an email verification

    the `signup` panel is hidden, and replaced with a clickable message box; when the box is clicked, then the `signup` panel is show again, letting a new account be defined

- third phase is when a first email is verified

    the first email verification set the administrator role to the relevant account; the corresponding main application template helper (see [In template.js](#in-template-js)) should activate itself and display the normal content. Starting from this moment, this package becomes inactive

    as `countAdmins` is set via a publication subscription, it is reactive and the template helper is expected to react accordingly

    as `countAdmins` is now greater than zero, we remove event listeners

    the email verification handler set the admin role for the user, and remove the `waitForEmailVerification` flag on local storage

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.4.0:
```
    'lodash': '^4.17.0'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

`pwix:startup-app-admin` provides at the moment **fr** and **en** translations.

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-startup-app-admin/pulls).

## Cookies and comparable technologies

`pwix:startup-app-admin` doesn't user any cookie or comparable technology.

Under the hood, `pwix:startup-app-admin` makes use of the `localStorage` facility to store some informations in order to survive the reloads. These informations are temporary, and fully cleanup as soon as an administrator is identified.

---
P. Wieser
- Last updated on 2024, Jul. 17th
