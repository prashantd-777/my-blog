export const PENDING = "PENDING";
export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const RESET = "RESET";
export const SET = "SET";
export const UNSET = "UNSET";
export const REMOVE = "REMOVE";
export const ALERT_CLOSE = "ALERT_CLOSE";


export const createRequestTypes = base => {
    return [RESET, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

export const createFlagTypes = base => {
    return [SET, UNSET, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

export const GET_POSTS = createRequestTypes("GET_POSTS");
export const GET_USERS = createRequestTypes("GET_USERS");
export const LOGIN_USER = createRequestTypes("LOGIN_USER");
export const REGISTER_USER = createRequestTypes("REGISTER_USER");
