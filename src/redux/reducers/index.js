import { combineReducers } from 'redux';
import postReducer from "./posts";
import usersReducer from "./users";

// export default function createRootReducer(history) {
//     return combineReducers({
//         router: connectRouter(history),
//         users: users(),
//         postReducer: postReducer()
//     })}

const rootReducer = combineReducers({
    // router: connectRouter(history),
    users: usersReducer(),
    postReducer: postReducer()
});

export default rootReducer;