import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import rootReducer from "../reducers";
import { createLogger } from "redux-logger";
import rootSaga from "../sagas";

// Store
const middleware = store => next => action => {
    next(action);
};

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
    const sagaMiddleware = createSagaMiddleware({
        onError: error => {
            console.log("error", error);
        }
    });
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                sagaMiddleware,
                middleware,
                createLogger({ collapsed: true })
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
