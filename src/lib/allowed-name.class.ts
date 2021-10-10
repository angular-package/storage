// @angular-package/type.
import {
  // Enum.
  Check,
  // Type.
  ResultCallback,
  // Function.
  guardArray,
  guardNumber,
} from '@angular-package/type';
/**
 * The storage of allowed names.
 */
export class AllowedName<AllowNames extends string> {
  /**
   * The property to store allowed names.
   */
  #allowedName!: Set<string>;

  /**
   * The property indicates the status of checking the allowed names by the `isAllowedName()` method.
   */
  #checkName: Check = Check.No;

  /**
   * Initializes an instance of `AllowedName` with allowed names.
   * @param allowNames A rest parameter of allowed names of `string` type. Only those names given by this parameter are being checked by the
   * `isNameAllowed()` method.
   * @angularpackage
   */
  constructor(...allowNames: AllowNames[]) {
    guardArray(allowNames) &&
      allowNames.length > 0 &&
      ((this.#allowedName = new Set(allowNames)),
      this.checkNames(Check.Yes));
  }

  /**
   * The `checkNames()` method sets whether to check allowed names.
   * @param check The value of the `Check` type to set whether to check allowed names.
   * @param callback An optional callback `function` to handle the check whether the provided `check` is a number type.
   * @returns The return value is an instance of `Storage`.
   */
  public checkNames(
    check: Check,
    callback?: ResultCallback<Check>
  ): this {
    guardNumber(check, callback) && (this.#checkName = check);
    return this;
  }

  /**
   * The `isNameAllowed()` method checks whether the provided `name` of a `string` type is the allowed `name`.
   * @param name The name of `Name` type to check.
   * @param callback An optional callback `function` to handle the result of the check whether the provided `name` is the allowed
   * name.
   * @returns The return value is a `boolean` type indicating the provided `name` is the allowed name.
   */
  public isNameAllowed<Name extends AllowNames>(
    name: Name,
    callback: ResultCallback<Name> = (result) => result
  ): boolean {
    return this.#checkName === 1
      ? callback(this.#allowedName.has(name), name, { name: 'isNameAllowed' })
      : true;
  }
}
