import {GET} from "./helper";

export const api__getPosts = (payload) => {
    return GET(`/posts/`, {...payload});
};
