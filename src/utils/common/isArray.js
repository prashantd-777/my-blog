/**
 * Checks if `value` is an `Array`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * isArray([1, 2, 3]);
 * // => true
 *
 * isArray('abc');
 * // => false
 */
const isArray = arr => Array.isArray(arr);

export default isArray;
