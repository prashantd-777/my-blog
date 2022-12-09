import { combineReducers } from 'redux';
import users from './users';
import postReducer from "./posts";

const rootReducer = combineReducers({
    users: users,
    postReducer: postReducer()
});

export default rootReducer;