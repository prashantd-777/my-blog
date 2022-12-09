/**
 * Creates a debounced function that delays invoking `func` until after `delay`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked.
 *
 * @param {Function} func The function to debounce.
 * @param {number} [delay=0] The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 *
 */

const debounce = (func, delay = 0) => {
    let clearTimer;
    return function() {
        // const context = this;
        const args = arguments;
        clearTimeout(clearTimer);
        clearTimer = setTimeout(() => func.apply(this, args), delay);
    }
}

export default debounce;
