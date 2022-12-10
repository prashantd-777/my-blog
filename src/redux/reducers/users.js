import {FAILURE, GET_USERS, LOGIN_USER, REGISTER_USER, REQUEST, RESET, SUCCESS} from "../actions/actionTypes";
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
    const isAuthenticated = (state = false, payLoad) => {
        switch (payLoad.type) {
            case LOGIN_USER[SUCCESS]:
            case REGISTER_USER[SUCCESS]:
                return true;
            case LOGIN_USER[REQUEST]:
            case REGISTER_USER[REQUEST]:
            case LOGIN_USER[FAILURE]:
            case REGISTER_USER[FAILURE]:
            case LOGIN_USER[RESET]:
            case REGISTER_USER[RESET]:
                return false;
            default:
                return state;
        }
    };

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
        userAuthenticate,
        isAuthenticated
    })
}

export default usersReducer;