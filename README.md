# Packages

Useful and simple to use packages based on the [angular.io][angulario].

| Package                              | Description                                            | Status |
| :----------------------------------- | :----------------------------------------------------- | -----: |
| [callback][callback-github-readme]   | Manages the callback [`function`][js-function].        | [![npm version][callback-npm-badge-png]][callback-npm-badge] |
| [change-detection][cd-github-readme] | Improves application performance.                      | [![npm version][cd-npm-badge-png]][cd-npm-badge] |
| [component-loader][cl-github-readme] | Handles dynamic loading components.                    | [![npm version][cl-npm-badge-png]][cl-npm-badge] |
| [core][core-github-readme]           | Core features.                                         | [![npm version][core-npm-badge-png]][core-npm-badge] |
| [error][error-github-readme]         | Manages an [`Error`][js-error].                        | [![npm version][error-npm-badge-png]][error-npm-badge] |
| [prism][prism-github-readme]         | [`Prism`][prism-js] highlighter module.                | [![npm version][prism-npm-badge-png]][prism-npm-badge] |
| [property][property-github-readme]   | Handles object properties.                             | [![npm version][property-npm-badge-png]][property-npm-badge] |
| [storage][storage-github-readme]     | The storage of data under allowed names.               | [![npm version][storage-npm-badge-png]][storage-npm-badge] |
| [reactive][reactive-github-readme]   | Automatize the process of creating some rxjs features. | [![npm version][reactive-npm-badge-png]][reactive-npm-badge] |
| [testing][testing-github-readme]     | Support for testing other packages.                    | [![npm version][testing-npm-badge-png]][testing-npm-badge] |
| [type][type-github-readme]           | Common types, type guards, and type checkers.          | [![npm version][type-npm-badge-png]][type-npm-badge] |
| [ui][ui-github-readme]               | User interface.                                        | *In Progress* |

> Click on the package name to visit its [GitHub](https://github.com/) page.

## angular-package/storage

The storage of data under allowed names.

[![Gitter][gitter-badge]][gitter-chat]
<!-- npm badge -->
[![npm version][storage-npm-badge-svg]][storage-npm-badge]
<!-- GitHub badges -->
[![GitHub issues][storage-badge-issues]][storage-issues]
[![GitHub forks][storage-badge-forks]][storage-forks]
[![GitHub stars][storage-badge-stars]][storage-stars]
[![GitHub license][storage-badge-license]][storage-license]
<!-- Sponsors badges -->
[![GitHub sponsors][github-badge-sponsor]][github-sponsor-link]
[![Support me on Patreon][patreon-badge]][patreon-link]

----

## Table of contents

* [Basic concepts](#basic-concepts)
* [Skeleton](#skeleton)
* [Installation](#installation)
* [Api](#api)
* [`Storage`](#storage)
* [Interface](#interface)
* [Type](#type)
* [Experimental](#experimental)
* [Changelog](#changelog)
* [Git](#git)
  * [Commit](#commit)
  * [Versioning](#versioning)
* [License](#license)

----

<br>

## Basic concepts

Checks
> It's to check the provided value to be **the same** as **expected**.

Type guard (constrain)
> Constrains the parameter type to **not let** input **unexpected** value in the **code editor**.

Guards
> It's a **combination** of both above, **constrains** the type of the parameter in the **code editor**, and checks its provided argument.

Defines
> Returns defined value from a method of an object.  
> Defines new value in an object and returns a defined value.  

Gets
> Returns a value from an object.

Sets
> Adds or updates an element with a specified key and a value to an object and returns an object.  

<br>

## Skeleton

This package was built by the [library skeleton][skeleton] which was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Copy this package to the `packages/storage` folder of the [library skeleton][skeleton] then run the commands below.

### Code scaffolding

Run `ng generate component component-name --project storage` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project storage`.
> Note: Don't forget to add `--project storage` or else it will be added to the default project in your `angular.json` file.

### Build

Run `ng build storage` to build the package. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build storage`, go to the dist folder `cd dist/storage` and run `npm publish`.

### Running unit tests

Install `@angular-package/testing` with command:

```typescript
npm i @angular-package/testing --no-save
```

Run `ng test storage` to execute the unit tests via [Karma](https://karma-runner.github.io).

<br>

## Installation

Install `@angular-package/storage` package with command:

```bash
npm i @angular-package/storage --save
```

<br>

## Api

```typescript
import {
  // Class.
  AllowedName,
  Storage
} from '@angular-package/storage';
```

<br>

## `Storage`

The storage of data under allowed names.

<br>

**Instance public properties:**

| Storage.prototype.                      | Description |
| :-------------------------------------- | :---------- |
| [`size: number`](#storageprototypesize) | The size accessor property returns the number of elements in [`storage`](#storage). |

**Constructor:**

| Constructor                         | Description |
| :---------------------------------- | :---------- |
| [`Storage()`](#storage-constructor) | Initializes an instance of [`Storage`](#storage) with optional allowed names under which values can be stored. |

**Instance public methods:**

| Storage.prototype.                            | Description |
| :-------------------------------------------- | :---------- |
| [`clear()`](#storageprototypeclear)           | The `clear()` method removes all elements from the [`storage`](#storage). |
| [`delete()`](#storageprototypedelete)         | The `delete()` method removes the element from the [`storage`](#storage) using the provided `name`. |
| [`forEach()`](#storageprototypeforeach)       | The `forEach()` method executes a provided [`function`][js-function] once per each name/value pair in the [`storage`](#storage), in insertion order. |
| [`get()`](#storageprototypeget)               | The `get()` method returns an element from the [`storage`](#storage) using the provided `name`. |
| [`has()`](#storageprototypehas)               | The `has()` method returns a [`boolean`][js-boolean] indicating whether an element with the provided `name` exists. |
| [`set()`](#storageprototypeset)               | The `set()` method **adds** or **updates** the `value` of the element under the given allowed `name`. |
| [`setOfType()`](#storageprototypesetoftype)   | The `setOfType()` method **adds** or **updates** the element `value` of the type specified by the provided `type` under the given allowed `name`. |

<br>

### `Storage` instance public properties

#### `Storage.prototype.size`

The size accessor property returns the number of elements in storage.

```typescript
public get size(): number {
  return super.size;
}
```

<br>

### `Storage` constructor

#### `Storage()`

Initializes an instance of [`Storage`](#storage) with optional allowed names under which values can be stored.

```typescript
// Syntax.
constructor(...allowNames: AllowNames[]) {
  super();
  this.#allowedName = new AllowedName(...allowNames);
}
```

**Parameters:**

| Name: type                    | Description |
| :---------------------------- | :---------- |
| `...allowNames: AllowNames[]` | An optional [rest parameter][js-rest-parameter] of allowed names of [`string`][js-string] type, under which values can be stored. Only those names given by this parameter are being checked by the public [`isNameAllowed()`](#allowednameprototypeisnameallowed) of the [`AllowedName`](#allowedname) method and the check was not **disabled** by the [`checkNames()`](#storageprototypechecknames) method. |

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

### `Storage` instance public methods

#### `Storage.prototype.clear()`

The `clear()` method removes all elements from the [`storage`](#storage).

```typescript
// Syntax.
public clear(): this {
  super.clear();
  return this;
}
```

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.delete()`

The `delete()` method removes the element from the [`storage`](#storage) using the provided `name`.

```typescript
// Syntax.
public delete<Name extends AllowNames>(
  name: Name,
  callback?: ResultCallback<Name>
): boolean {
  return guardString(name, callback) ? super.delete(name) : false;
}
```

**Generic type variables:**

| Name   | Default value            | Description |
| :----- | :----------------------: | :---------- |
| `Name` | Captured from the `name` | A generic type variable `Name` constrained by the generic type variable `AllowNames`, by default of the value captured from the supplied `name` indicates the **name** under which element value is stored. |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | The name of the generic type variable `Name` of the element to remove from the [`storage`](#storage). |
| `callback?: ResultCallback<Name>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `check` is a [`string`][js-string] type. |

**Returns:**

The **return value** is a [`boolean`][js-boolean] if an element in the [`storage`](#storage) existed and has been removed or `false` if the element did not exist or the given name was not a [`string`][js-string] type.

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.forEach()`

The `forEach()` method executes a provided [`function`][js-function] once per each name/value pair in the [`storage`](#storage), in insertion order.

```typescript
// Syntax.
public forEach(
  forEach: (
    value: any,
    name: AllowNames,
    storage: Storage<AllowNames>
  ) => void,
  callback?: ResultCallback<Function>
): this {
  guardFunction(forEach, callback) && super.forEach(forEach as any);
  return this;
}
```

**Parameters:**

| Name: type                            | Description |
| :------------------------------------ | :---------- |
| `forEach: Function`                   | The callback [`function`][js-function] to execute for each entry in the storage, that takes the `value` and the `name` of each iterated element and [`storage`](#storage) being iterated. |
| `callback?: ResultCallback<Function>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `forEach` is the [`function`][js-function]. |

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.get()`

The `get()` method returns an element from the [`storage`](#storage) using the provided `name`.

```typescript
// Syntax.
public get<Value = any, Name extends AllowNames = AllowNames>(
  name: Name,
  callback?: ResultCallback<Name>
): Value {
  return guardString(name, callback) && super.get(name);
}
```

**Generic type variables:**

| Name    | Default value            | Description |
| :------ | :----------------------: | :---------- |
| `Value` | [`any`][ts-any]          | A generic type variable `Value` determines the type of the `value` parameter, by default of [`any`][ts-any] via the return type. |
| `Name`  | Captured from the `name` | A generic type variable `Name` constrained by the generic type variable `AllowNames`, by default of the value captured from the supplied `name` indicates the **name** under which element value is picked from the [`storage`](#storage). |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | The name of the generic type variable `Name` of the element to remove from the [`storage`](#storage). |
| `callback?: ResultCallback<Name>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `name` is a [`string`][js-string] type. |

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.has()`

The `has()` method returns a [`boolean`][js-boolean] indicating whether an element with the provided `name` exists.

```typescript
// Syntax.
public has<Name extends AllowNames>(
  name: Name,
  callback?: ResultCallback<Name>
): boolean {
  return guardString(name, callback) && super.has(name);
}
```

**Generic type variables:**

| Name   | Default value            | Description |
| :----- | :----------------------: | :---------- |
| `Name` | Captured from the `name` | A generic type variable `Name` constrained by the generic type variable `AllowNames`, by default of the value captured from the supplied `name` indicates the **name** under which element value is picked from the [`storage`](#storage). |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | The name of the generic type variable `Name` of the element to check for presence in the [`storage`](#storage). |
| `callback?: ResultCallback<Name>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `name` is a [`string`][js-string] type. |

**Returns:**

The return value is a [`boolean`][js-boolean] indicating whether the element of the provided `name` exists in the [`storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.set()`

The `set()` method **adds** or **updates** the `value` of the element under the given allowed `name`.

```typescript
// Syntax.
public set<Value, Name extends AllowNames>(
  name: Name,
  value: Value,
  callback?: ResultCallback<Name>
): this {
  this.#allowedName.isNameAllowed(name, callback) && super.set(name, value);
  return this;
}
```

**Generic type variables:**

| Name    | Default value             | Description |
| :------ | :-----------------------: | :---------- |
| `Value` | Captured from the `value` | A generic type variable `Value` determines the type of the `value` parameter, by default of the value captured from the supplied `value`. |
| `Name`  | Captured from the `name`  | A generic type variable `Name` constrained by the generic type variable `AllowNames`, by default of the value captured from the supplied `name` indicates the **name** under which element value is stored. |

**Parameters:**

| Name: type                        | Description |
| :-------------------------------- | :---------- |
| `name: Name`                      | The name of the generic type variable `Name` under which the element is **added** to the [`storage`](#storage) or **updated** in the [`storage`](#storage). The value is checked against being an allowed name if the allowed names were provided. |
| `value: Value`                    | The value of [`any`][ts-any] type to **add** to the [`storage`](#storage) or **update** in the [`storage`](#storage) under the given `name`. |
| `callback?: ResultCallback<Name>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the check whether the provided `name` is a [`string`][js-string] type. |

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

#### `Storage.prototype.setOfType()`

The `setOfType()` method **adds** or **updates** the element `value` of the type specified by the provided `type` under the given allowed `name`.

```typescript
// Syntax.
public setOfType<Value extends Type, Name extends AllowNames>(
  name: Name,
  value: Value,
  type: Types<Value>,
  callback?: ResultCallback<Name | Value>
): this {
  this._setOfType(name, value, type, callback);
  return this;
}
```

**Generic type variables:**

| Name    | Default value             | Description |
| :------ | :-----------------------: | :---------- |
| `Value` | Captured from the `value` | A generic type variable `Value` constrained by the generic type [`Type`][package-type-type] determines the type of the `value` parameter, by default of the value captured from the supplied `value`. |
| `Name`  | Captured from the `name`  | A generic type variable `Name` constrained by the generic type variable `AllowNames`, by default of the value captured from the supplied `name` indicates the **name** under which element value is stored. |

**Parameters:**

| Name: type                                 | Description |
| :----------------------------------------- | :---------- |
| `name: Name`                               | The name of the generic type variable `Name` under which the element is **added** to the [`storage`](#storage) or **updated** in the [`storage`](#storage). The value is checked against being an allowed name if the allowed names were provided. |
| `value: Value`                             | The element value of the given `type` to **add** to the storage or **update** in the storage, under the given `name`. |
| `type: Types<Value>`                       | The type of the generic type [`Types`][package-type-types] indicates against which type the given `value` is checked. |
| `callback?: ResultCallback<Name \| Value>` | An optional callback [`function`][js-function] of [`ResultCallback`][package-callback-resultcallback] type to handle the result of the check whether the provided `value` is the type of the given `type` and the `name` is the allowed name under which the provided `value` can be stored. |

**Returns:**

The **return value** is an instance of [`Storage`](#storage).

**Usage:**

```typescript
// Example usage.
import { Storage } from '@angular-package/storage';

```

<br>

## Changelog

The **changelog** of this package is based on [*keep a changelog*](https://keepachangelog.com/en/1.0.0/). To read it, click on the [CHANGELOG.md](https://github.com/angular-package/storage/blob/main/CHANGELOG.md) link.

> A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project. - [*keep a changelog*](https://keepachangelog.com/en/1.0.0/)

<br>

## GIT

### Commit

* [AngularJS Git Commit Message Conventions][git-commit-angular]
* [Karma Git Commit Msg][git-commit-karma]
* [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular-package ([license][storage-license])

<!-- Funding -->
[github-badge-sponsor]: https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&link=https://github.com/sponsors/angular-package
[github-sponsor-link]: https://github.com/sponsors/angular-package
[patreon-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dsciborrudnicki%26type%3Dpatrons&style=flat
[patreon-link]: https://patreon.com/sciborrudnicki

[angulario]: https://angular.io
[skeleton]: https://github.com/angular-package/skeleton

<!-- Update status -->
[experimental]: https://img.shields.io/badge/-experimental-orange
[fix]: https://img.shields.io/badge/-fix-red
[new]: https://img.shields.io/badge/-new-green
[update]: https://img.shields.io/badge/-update-red

<!-- Gitter -->
[gitter-badge]: https://badges.gitter.im/angularpackage/Lobby.svg
[gitter-chat]: https://gitter.im/angularpackage/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/

<!-- This package: storage  -->
  <!-- GitHub: badges -->
  [storage-badge-issues]: https://img.shields.io/github/issues/angular-package/storage
  [storage-badge-forks]: https://img.shields.io/github/forks/angular-package/storage
  [storage-badge-stars]: https://img.shields.io/github/stars/angular-package/storage
  [storage-badge-license]: https://img.shields.io/github/license/angular-package/storage
  <!-- GitHub: badges links -->
  [storage-issues]: https://github.com/angular-package/storage/issues
  [storage-forks]: https://github.com/angular-package/storage/network
  [storage-license]: https://github.com/angular-package/storage/blob/master/LICENSE
  [storage-stars]: https://github.com/angular-package/storage/stargazers
<!-- This package -->
  [storage-github-changelog]: https://github.com/angular-package/storage/blob/main/CHANGELOG.md

<!-- Package: callback -->
  <!-- npm -->
  [callback-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcallback.svg
  [callback-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcallback.png
  [callback-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcallback
  [callback-npm-readme]: https://www.npmjs.com/package/@angular-package/callback#readme

  <!-- GitHub -->
  [callback-github-readme]: https://github.com/angular-package/callback#readme

  [package-callback-resultcallback]: https://github.com/angular-package/callback#resultcallback

<!-- Package: change-detection -->
  <!-- npm -->
  [cd-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.svg
  [cd-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fchange-detection.png
  [cd-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fchange-detection
  [cd-npm-readme]: https://www.npmjs.com/package/@angular-package/change-detection#readme

  <!-- GitHub -->
  [cd-github-readme]: https://github.com/angular-package/change-detection#readme

<!-- Package: component-loader -->
  <!-- npm -->
  [cl-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.svg
  [cl-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader.png
  [cl-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcomponent-loader
  [cl-npm-readme]: https://www.npmjs.com/package/@angular-package/component-loader#readme

  <!-- GitHub -->
  [cl-github-readme]: https://github.com/angular-package/component-loader#readme

<!-- Package: core -->
  <!-- npm -->
  [core-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fcore.svg
  [core-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fcore.png
  [core-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fcore
  [core-npm-readme]: https://www.npmjs.com/package/@angular-package/core#readme

  <!-- GitHub -->
  [core-github-readme]: https://github.com/angular-package/core#readme

<!-- Package: error -->
  <!-- npm -->
  [error-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ferror.svg
  [error-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ferror.png
  [error-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ferror
  [error-npm-readme]: https://www.npmjs.com/package/@angular-package/error#readme

  <!-- GitHub -->
  [error-github-readme]: https://github.com/angular-package/error#readme

<!-- Package: prism -->
  <!-- npm -->
  [prism-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fprism.svg
  [prism-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fprism.png
  [prism-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fprism
  [prism-npm-readme]: https://www.npmjs.com/package/@angular-package/prism#readme

  <!-- GitHub -->
  [prism-github-readme]: https://github.com/angular-package/prism#readme

<!-- Package: property -->
  <!-- npm -->
  [property-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fproperty.svg
  [property-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fproperty.png
  [property-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fproperty
  [property-npm-readme]: https://www.npmjs.com/package/@angular-package/property#readme

  <!-- GitHub -->
  [property-github-readme]: https://github.com/angular-package/property#readme

<!-- Package: reactive -->
  <!-- npm -->
  [reactive-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Freactive.svg
  [reactive-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Freactive.png
  [reactive-npm-badge]: https://badge.fury.io/js/%40angular-package%2Freactive
  [reactive-npm-readme]: https://www.npmjs.com/package/@angular-package/reactive#readme

  <!-- GitHub -->
  [reactive-github-readme]: https://github.com/angular-package/reactive#readme

<!-- Package: storage -->
  <!-- npm -->
  [storage-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fstorage.svg
  [storage-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Fstorage.png
  [storage-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fstorage
  [storage-npm-readme]: https://www.npmjs.com/package/@angular-package/storage#readme

  <!-- GitHub -->
  [storage-github-readme]: https://github.com/angular-package/change-detection#readme


<!-- Package: testing -->
  <!-- npm -->
  [testing-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftesting.svg
  [testing-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftesting.png
  [testing-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftesting
  [testing-npm-readme]: https://www.npmjs.com/package/@angular-package/testing#readme

  <!-- GitHub -->
  [testing-github-readme]: https://github.com/angular-package/testing#readme

<!-- Package: type -->
  <!-- npm -->
  [type-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Ftype.svg
  [type-npm-badge-png]: https://badge.fury.io/js/%40angular-package%2Ftype.png
  [type-npm-badge]: https://badge.fury.io/js/%40angular-package%2Ftype
  [type-npm-readme]: https://www.npmjs.com/package/@angular-package/type#readme

  <!-- GitHub -->
  [type-github-readme]: https://github.com/angular-package/type#readme

  [package-type-valueparser]: https://github.com/angular-package/type#valueparser
  [package-type-key]: https://github.com/angular-package/type#key
  [package-type-resultcallback]: https://github.com/angular-package/type#resultcallback
  [package-type-type]: https://github.com/angular-package/type#type
  [package-type-types]: https://github.com/angular-package/type#types

<!-- Package: ui -->
  <!-- npm -->
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge-svg]: https://badge.fury.io/js/%40angular-package%2Fui.svg
  [ui-npm-badge]: https://badge.fury.io/js/%40angular-package%2Fui
  [ui-npm-readme]: https://www.npmjs.com/package/@angular-package/ui#readme

  <!-- GitHub -->
  [ui-github-readme]: https://github.com/angular-package/ui#readme

<!-- Angular -->
[angular-component-factory-resolver]: https://angular.io/api/core/ComponentFactoryResolver
[angular-view-container-ref]: https://angular.io/api/core/ViewContainerRef

<!-- Jasmine -->
[jasmine-describe]: https://jasmine.github.io/api/3.8/global.html#describe
[jasmine-expect]: https://jasmine.github.io/api/3.8/global.html#expect
[jasmine-it]: https://jasmine.github.io/api/3.8/global.html#it

<!-- Javascript  -->
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[js-array-every]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[js-array-some]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[js-bigint]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
[js-bigintconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt

[js-boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[js-booleanconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

[js-classes]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

[js-error]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

[js-function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
[js-rest-parameter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

[js-getter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[js-object-getownpropertydescriptor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
[js-object-getOwnpropertydescriptors]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors

[js-setter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set

[js-hasownproperty]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

[js-instanceof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[js-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in

[js-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[js-null]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[js-number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[js-numberconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number

[js-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[js-object-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

[js-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[js-promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

[js-rangeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
[js-referenceerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
[js-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

[js-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
[js-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
[js-string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[js-stringconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String

[js-symbol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[js-symbolconstructor]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
[js-syntaxerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError

[js-typeerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

[js-undefined]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[js-urlerror]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError

[js-weakset]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet

<!-- Karma -->
[karma]: http://karma-runner.github.io/0.10/index.html

<!-- Prism -->
[prism-js]: https://prismjs.com/

<!-- Typescript -->
[ts-any]: https://www.typescriptlang.org/docs/handbook/basic-types.html#any
[ts-boolean]: https://www.typescriptlang.org/docs/handbook/basic-types.html#boolean
[ts-classes]: https://www.typescriptlang.org/docs/handbook/2/classes.html
[ts-enums]: https://www.typescriptlang.org/docs/handbook/enums.html
[ts-function]: https://www.typescriptlang.org/docs/handbook/2/functions.html
[ts-interface]: https://www.typescriptlang.org/docs/handbook/interfaces.html#our-first-interface
[ts-never]: https://www.typescriptlang.org/docs/handbook/basic-types.html#never
[ts-number]: https://www.typescriptlang.org/docs/handbook/basic-types.html#number
[ts-object]: https://www.typescriptlang.org/docs/handbook/basic-types.html#object
[ts-string]: https://www.typescriptlang.org/docs/handbook/basic-types.html#string
[ts-unknown]: https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
