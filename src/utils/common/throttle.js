function throttle(fn, threshold, scope) {
    threshold || (threshold = 1000);
    let last,
        deferTimer;
    return function() {
        let context = scope || this;

        let now = +new Date,
            args = arguments;
        if (last && now < last + threshold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function() {
                last = now;
                fn.apply(context, args);
            }, threshold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

export default throttle;
