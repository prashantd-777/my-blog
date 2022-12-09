import isArray from "./isArray";

/**
 * Gets the value at `pathName` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @param {Object} object The object to query.
 * @param {String} pathName The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 *
 */

const get = (object, pathName, defaultValue) => {

    // Coerce pathName to a string (even it turns into "[object Object]").
    const path = isArray(pathName) ? pathName.join(".") : String(pathName);

    // Support bracket notation, e.g., "a[0].b.c".
    const match = /\[\\?("|')?(\w|d)+\\?("|')?\]/g;

    const parts = path.replace(match, (m, i, v) => "." + v).split('.');

    const length = parts.length;
    let i = 0;

    // In case object isn't a real object, set it to undefined.
    let value = object === Object(object) ? object : undefined;

    while (value != null && i < length) {
        value = value[parts[i++]];
    }
    return i && i === length && value !== undefined ? value : defaultValue;
};

export default get;
