# pwix:startup-app-admin

## What is it ?

A Meteor package template which, once added to the application, let it start by creating a global Application Administrator account.

## Configuration

The package's behavior can be configured through a call to the `pwixSAA.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `adminRole`

    Define the name of the role of the application adminitrator.

    Defaults to `SAA_APP_ADMIN_ROLE` constant.

- `requireVerifiedEmail`

    Whether the newly created user must provide a verifiable email, and make it verified, in order to get the Administrator privilege.

    This means that the initial login page will stay stuck until the mail is verified.

    Defaults to `true`.

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `SAA_VERBOSE_NONE`

        Do not display any trace log to the console

    - `SAA_VERBOSE_CONFIGURE`

        Trace `pwixSAA.configure()` calls and their result

Please note that `pwixSAA.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `pwixSAA.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## `pwixSAA`

The globally exported object.

### Methods

 - `pwixSAA.countAdmins( o )`

    Client only.

    Compute the count of users which have the `adminRole` role.

    This method has to request the server, and thus provides an asynchronous result.
    
    It thus must be provided an argument object, with a ReactiveVar as a `result` key. This ReactiveVar will be set to the integer result of the method call.

    Example:

    - in `template.html`

        ```
            {{ displayAdminsCount }}
        ```

    - in `template.js`

        ```
            import { ReactiveVar } from 'meteor/reactive-var';

            Template.template.onCreated( function(){
                this.result = new ReactiveVar();
                pwixSAA.countAdmins({ result: this.result });
            });

            Template.template.helpers({
                displayAdminsCount(){
                    return Template.instance().result.get();
                }
            });
        ```

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
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

## Translations

New and updated translations are willingly accepted, and more than welcome. Just be kind enough to submit a PR on the [Github repository](https://github.com/trychlos/pwix-startup-app-admin/pulls).

## Cookies and comparable technologies

`pwix:startup-app-admin` doesn't user any cookie or comparable technology.

---
P. Wieser
- Last updated on 2023, May 11th
