// @angular-package/type.
import {
  // Enum.
  Check,
  // Type.
  ResultCallback,
  Type,
  Types,
  // Function.
  guardString,
  isType,
} from '@angular-package/type';
// Class.
import { AllowedName } from './allowed-name.class';
/**
 * The storage of data under allowed names.
 */
export class Storage<AllowNames extends string> extends Map<AllowNames, any> {
  //#region instance private properties
  /**
   * The property to store allowed names under which values of any type can be stored.
   */
  #allowedName: AllowedName<AllowNames>;
  //#endregion

  /**
   * The size accessor property returns the number of elements in storage.
   */
  public get size(): number {
    return super.size;
  }

  /**
   * Initializes an instance of `Storage` with optional allowed names under which values can be stored.
   * @param allowNames An optional rest parameter of allowed names of `string` type, under which values can be stored. Only those names
   * given by this parameter are being checked by the `isNameAllowed()` private method.
   * @angularpackage
   */
  constructor(...allowNames: AllowNames[]) {
    super();
    this.#allowedName = new AllowedName(...allowNames);
  }

  /**
   * The `checkNames()` method sets whether to check allowed names by the `isAllowedName()` method.
   * @param check The value of `Check` type to set.
   * @param callback An optional callback `function` to handle the check whether the provided `check` is a number type .
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  public checkNames(check: Check): this {
    this.#allowedName.checkNames(check);
    return this;
  }

  /**
   * The `clear()` method removes all elements from the storage.
   * @returns The return value is an instance of `Storage`.
   */
  public clear(): this {
    super.clear();
    return this;
  }

  /**
   * The `delete()` method removes the element from the storage using the provided `name`.
   * @param name The name of the `Name` type of the element to remove from the storage.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  public delete<Name extends AllowNames>(name: Name): boolean {
    return super.delete(name);
  }

  /**
   * The `forEach()` method executes a provided `function` once per each name/value pair in the storage, in insertion order.
   * @param callbackfn The callback `function` to execute for each entry in the storage, that takes `value`, `name` and `storage` arguments.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  public forEach<Name extends AllowNames>(
    callbackfn: (value: any, name: Name, storage: Storage<AllowNames>) => void
  ): this {
    super.forEach(callbackfn as any);
    return this;
  }

  /**
   * The `get()` method returns an element from the storage using the provided name.
   * @param name The name of the `Name` type of the element to retrieve from the storage.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `name` is a string type.
   * @returns The return value is the element associated with the provided `name` or undefined if the name can't be found in the storage.
   * @angularpackage
   */
  public get<Value = any, Name extends AllowNames = AllowNames>(
    name: Name,
    callback?: ResultCallback<Name>
  ): Value {
    return guardString(name, callback) && super.get(name);
  }

  /**
   * The `has()` method returns a boolean indicating whether an element with the provided `name` exists.
   * @param name The name of `Name` type to check for presence in the storage.
   * @returns The return value is a boolean indicating whether the element of the provided `name` exists in the storage.
   * @angularpackage
   */
  public has<Name extends AllowNames>(name: Name): boolean {
    return super.has(name);
  }

  /**
   * The `set()` method adds or updates the value of the element under the given allowed name.
   * @param name The name of the `Name` type of the element to add to the storage. The value is checked against being an allowed name if the
   * allowed names were provided and the check was not disabled by the `checkNames()` method.
   * @param value The value of `any` type to add to the storage under the given `name`.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `name` is the allowed name under
   * which the provided `value` can be stored.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  public set<Value, Name extends AllowNames>(
    name: Name,
    value: Value,
    callback?: ResultCallback<Name | Value>
  ): this {
    this.#allowedName.isNameAllowed(name, callback) && super.set(name, value);
    return this;
  }

  /**
   * The `setOfType()` method adds or updates the element value of the type specified by the provided `type` under the given allowed `name`.
   * @param name The name of the `Name` type of the element to add to the storage.
   * @param value The element value of the given `type` to add to the storage under the given `name`.
   * @param type The type to check against the given `value`.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `value` is the type of the given
   * `type` and the `name` is the allowed name under which the provided `value` can be stored.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  public setOfType<Value extends Type, Name extends AllowNames>(
    name: Name,
    value: Value,
    type: Types<Value>,
    callback?: ResultCallback<Name | Value>
  ): this {
    this._setOfType(name, value, type, callback);
    return this;
  }

  /**
   * The private `_set()` method adds or updates the value of the element under the given allowed name.
   * @param name The name of the `Name` type of the element to add to the storage.
   * @param value The value of `any` type to add to the storage under the given `name`.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `name` is the allowed name under
   * which the provided `value` can be stored.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  private _set<Value, Name extends AllowNames>(
    name: Name,
    value: Value,
    callback?: ResultCallback<Name | Value>
  ): this {
    this.#allowedName.isNameAllowed(name, callback) && super.set(name, value);
    return this;
  }

  /**
   * The private `_setOfType()` method adds or updates the element value of the type specified by the provided `type` under the given
   * allowed `name`.
   * @param name The name of the `Name` type of the element to add to the storage.
   * @param value The element value of the given `type` to add to the storage under the given `name`.
   * @param type The type to check against the given `value`.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `value` is the type of the given
   * `type` and the `name` is the allowed name under which the provided `value` can be stored.
   * @returns The return value is an instance of `Storage`.
   * @angularpackage
   */
  private _setOfType<Value extends Type, Name extends AllowNames>(
    name: Name,
    value: Value,
    type: Types<Value>,
    callback?: ResultCallback<Name | Value>
  ): this {
    isType(value, type, callback, { name: 'isType' }) &&
      this._set(name, value, callback);
    return this;
  }
}
