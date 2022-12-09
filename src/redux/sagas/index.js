import { takeLatest, put, call, all } from "redux-saga/effects";
import { sagas as postSagas } from "./posts";

export default function* rootSaga() {
    yield all({
        ...postSagas,
    })
}