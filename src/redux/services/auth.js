import {addAuthToken} from "./helper";
import {getCookie, setCookie} from "../../utils/utm";

const tokenKey = "tk";

export const SET_AUTH = data => {
    console.log("set auth data", data)
    const { user: {token} } = data;
    setCookie(tokenKey, token);
    addAuthToken();
};

export const GET_AUTH = () => {
    const cTk = getCookie(tokenKey);
    const lsTk = localStorage.getItem(tokenKey);
    const cachedHits = cTk ? `{"token": "${cTk}"}` : lsTk;
    if (cachedHits) {
        if (!cTk) {
            setCookie(tokenKey, JSON.parse(cachedHits).token);
        }
        if (lsTk) {
            localStorage.removeItem(tokenKey);
        }
        return JSON.parse(cachedHits).token;
    }
    return null;
};

export const isAuthenticated = () => {
    return !!GET_AUTH();
};


