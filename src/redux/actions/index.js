import {ALERT_CLOSE, FAILURE, GET_POSTS, LOGIN_USER, REQUEST, SUCCESS} from "./actionTypes";

export const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const a__fetchPosts = {
    request: (data) =>
        action(GET_POSTS[REQUEST], { data }),
    success: (data, response) =>
        action(GET_POSTS[SUCCESS], { data, response }),
    failure: (login, error) =>
        action(GET_POSTS[FAILURE], { login, error }),
    errorClose: (flg) => action(ALERT_CLOSE, { flg }),
};

export const a__loginUser = {
    request: (data) =>
        action(LOGIN_USER[REQUEST], { data }),
    success: (data, response) =>
        action(LOGIN_USER[SUCCESS], { data, response }),
    failure: (login, error) =>
        action(LOGIN_USER[FAILURE], { login, error }),
    errorClose: (flg) => action(ALERT_CLOSE, { flg }),
};
