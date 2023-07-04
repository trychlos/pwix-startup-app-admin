# pwix:startup-app-admin

## What is it ?

A Meteor package (Blaze-based) template which, once added to the application, let it start by creating a global Application Administrator account.

## Usage

### Install the package

`meteor add pwix:startup-app-admin`

### Layout integration

#### In template.html

```
    {{#if shouldDisplayContent }}
        {{> your_home_page_content }}
    {{else}}
        {{> saaCreate (saaArgs) }}
    {{/if}}
```

#### In template.js

```
    Template.template.helpers({

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
            let hasAdmin = false;
            if( hasPackage ){
                hasAdmin = Package['pwix:startup-app-admin'].SAA.countAdmins.get() > 0;
            }
            const APP = Template.instance().APP;
            return !hasPackage || hasAdmin;
        }
    });
```

## Configuration

The package's behavior can be configured through a call to the `SAA.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `adminRole`

    Define the name of the role of the application adminitrator.

    Defaults to [`SAA_APP_ADMIN_ROLE`](#constants) constant.

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

## `SAA`

The globally exported object.

### Methods

- `SAA.i18n.namespace()`

    This method returns the `pwix:i18n` namespace of the `pwix:startu-app-admin` package.

    With that name, anyone is so able to provide additional translations.

### Data

 - `SAA.countAdmins`

    Client only.

    A `ReactiveVar` which handles the count of application administrators.

    Its value is initialized to -1, and set to 0 or greater as soon as it receives the data from the server.

### Blaze components

- `saaCreate`

    Let the user enter his credentials for the first time.

    All passed-in arguments will be directly passed to `acUserLogin` underlying component.

### Constants

- `SAA_APP_ADMIN_ROLE`

    The name of the application admin role.

    Value is 'APP_ADMIN'.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.0.0:
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
- Last updated on 2023, June 12th
