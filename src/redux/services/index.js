import {GET, POST} from "./helper";

export const api__getPosts = (payload) => {
    return GET(`/posts/`, {...payload});
};

export const api__userLogin = (payload) => {
    return POST(`/auth/login/`, {...payload});
};
