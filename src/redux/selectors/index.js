import get from "../../utils/common/get";

export const getPostReducer = state => get(state, "postReducer", {});

export const s__getPosts = state => get(getPostReducer(state), "getPosts", {})
