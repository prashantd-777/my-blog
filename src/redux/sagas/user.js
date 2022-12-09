import {takeLatest, call, put,} from "redux-saga/effects";
import {LOGIN_USER, REQUEST, SUCCESS} from "../actions/actionTypes";
import {api__userLogin} from "../services";
import {sendPayload, sendPayloadFailure} from "./helper";
import {replace, push} from "connected-react-router";
import {SET_AUTH} from "../services/auth";

function* handleAuthSuccess(payload = {}) {
    console.log("auth success");
    window.location.href = window.location.origin + "/dashboard"
    yield put(replace(`/dashboard`));
}

function* handleUserRequest(payload) {
    console.log("payloadis::", payload);
    try {
        const apiResponse = yield call(api__userLogin, payload?.data);
        console.log("apiResponse.data.data", apiResponse.data.data)
        !apiResponse.data.success || SET_AUTH(apiResponse.data.data);
        yield sendPayload(apiResponse, LOGIN_USER);
    } catch (e) {
        yield sendPayloadFailure(e, LOGIN_USER)
    }
}

export const sagas = {
    watchUserLogin: takeLatest(
        LOGIN_USER[REQUEST],
        handleUserRequest
    ),
    watchUserLoginSuccess: takeLatest(
        LOGIN_USER[SUCCESS],
        handleAuthSuccess
    ),

}
