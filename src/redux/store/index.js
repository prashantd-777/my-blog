import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers";
import rootSaga from "../sagas";
import {createBrowserHistory, createMemoryHistory} from "history";
import createRootReducer from "../reducers";

export const history = createMemoryHistory();



const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const history = createBrowserHistory()

const store = createStore(
    rootReducer,
    // createRootReducer(history),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;