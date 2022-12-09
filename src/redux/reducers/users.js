import {FAILURE, GET_USERS, LOGIN_USER, REQUEST, SUCCESS} from "../actions/actionTypes";
import {combineReducers} from "redux";

const loadingState = {
    isLoading: false
}

const initialArrayState = {
    ...loadingState,
    users: [],
}

const initialObjectState = {
    ...loadingState,
    user: null,
}

const usersReducer = () => {
    const getUsers = (state = initialArrayState, action) => {
        switch (action.type) {
            case GET_USERS[REQUEST]:
                return {
                    ...state,
                    isLoading: true
                };
            case GET_USERS[SUCCESS]:
                return {
                    ...state,
                    isLoading: false,
                    post: [...action?.payload?.users]
                };
            case GET_USERS[FAILURE]:
                return {
                    ...initialArrayState,
                    isLoading: false,
                };
            default:
                return state;
        }
    }

    const userAuthenticate = (state = initialObjectState, action) => {
        switch (action.type) {
            case LOGIN_USER[REQUEST]:
                return {
                    ...state,
                    isLoading: true
                };
            case LOGIN_USER[SUCCESS]:
                return {
                    ...state,
                    isLoading: false,
                    user: {...action?.payload?.user}
                };
            case LOGIN_USER[FAILURE]:
                return {
                    ...initialObjectState,
                    isLoading: false,
                };
            default:
                return state;
        }
    }

    return combineReducers({
        getUsers,
        userAuthenticate
    })
}

export default usersReducer;