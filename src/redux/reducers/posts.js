import {FAILURE, GET_POSTS, REQUEST, SUCCESS} from "../actions/actionTypes";
import {combineReducers} from "redux";

const initialState = {
    isLoading: false,
    posts: []
};

const postReducer = () => {
    const getPosts = (state = initialState, action) => {
        switch (action.type) {
            case GET_POSTS[REQUEST]:
                return {
                    ...state,
                    isLoading: true
                };
            case GET_POSTS[SUCCESS]:
                return {
                    ...state,
                    ...action?.payload,
                    isLoading: false,
                    // post: [...?.posts]
                };
            case GET_POSTS[FAILURE]:
                return {
                    ...initialState,
                    isLoading: false,
                };
            default:
                return state;
        }
    }

    return combineReducers({
        getPosts
    })
}

export default postReducer;