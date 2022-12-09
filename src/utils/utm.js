// fetch a particular cookie
export function getCookie(name) {
    let v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    return v ? v[2] : null;
}

export const getDomain = function(url = window.location.origin) {
    if (url.includes("localhost")) {
        return "";
    }
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");
    url = url.split(".");
    url = url.slice(url.length - 2)?.join(".");

    if (url.indexOf("/") !== -1) {
        url = url.split("/")[0];
    }

    return `.${url}`;
};


export const setCookie = (key, val, expiry) => {
    const domain = getDomain();
    if (!expiry) {
        expiry = new Date(
            new Date().setMonth(new Date().getMonth() + 1)
        ).toUTCString();
    }
    return (document.cookie = `${key}=${val};domain=${domain};expires=${expiry};path=/;`);
};

export const remCookie = key => {
    const domain = getDomain();
    document.cookie = `${key}=; domain=${domain}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
