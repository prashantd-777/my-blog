import { all } from "redux-saga/effects";
import { sagas as postSagas } from "./posts";
import { sagas as userSagas } from "./user";

export default function* rootSaga() {
    yield all({
        ...postSagas,
        ...userSagas,
    })
}