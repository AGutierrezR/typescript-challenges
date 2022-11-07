// Object Type
type Obj = Record<string, unknown>;
// Array Type
type Arr = Array<unknown>;

/**
 * Object or Array Type
 *
 * Usage:
 *
 *  T extends ObjOrArr ? SomeWork : SomeOtherWork
 */
type ObjOrArr = Obj | Arr;

/**
 * This is type of generic function to check via function signature if to types are equal.
 */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
