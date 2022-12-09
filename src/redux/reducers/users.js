import {FAILURE, GET_USERS, REQUEST, SUCCESS} from "../actions/actionTypes";
import {combineReducers} from "redux";

const initialState = {
    isLoading: false,
    users: [],
}

const usersReducer = () => {
    const getUsers = (state = initialState, action) => {
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
                    ...initialState,
                    isLoading: false,
                };
            default:
                return state;
        }
    }

    return combineReducers({
        getUsers
    })
}

export default usersReducer;