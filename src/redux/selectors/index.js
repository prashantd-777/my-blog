import get from "../../utils/common/get";

export const getPostReducer = state => get(state, "postReducer", {});
export const getUserReducer = state => get(state, "usersReducer", {});

export const s__getPosts = state => get(getPostReducer(state), "getPosts", {})
export const s__getIsAuthenticated = state => get(getUserReducer(state), "isAuthenticated", false)
