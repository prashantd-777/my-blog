import {takeLatest, call, put,} from "redux-saga/effects";
import {LOGIN_USER, REGISTER_USER, REQUEST, SUCCESS} from "../actions/actionTypes";
import {api__userLogin, api__userRegister} from "../services";
import {sendPayload, sendPayloadFailure} from "./helper";
import {SET_AUTH} from "../services/auth";


function* handleAuthSuccess() {
    console.log("auth success");
    window.location.href = window.location.origin + "/dashboard"
    // yield put(push(`/dashboard`));
    // yield call(history.push, '/dashboard');
}

function* handleUserRequest(payload) {
    try {
        const apiResponse = yield call(api__userLogin, payload?.data);
        !apiResponse.data.success || SET_AUTH(apiResponse.data.data);
        yield sendPayload(apiResponse, LOGIN_USER);
    } catch (e) {
        yield sendPayloadFailure(e, LOGIN_USER)
    }
}

function* handleUserRegisterRequest(payload) {
    try {
        const apiResponse = yield call(api__userRegister, payload?.data);
        !apiResponse.data.success || SET_AUTH(apiResponse.data.data);
        yield sendPayload(apiResponse, REGISTER_USER);
    } catch (e) {
        yield sendPayloadFailure(e, REGISTER_USER)
    }
}

export const sagas = {
    watchUserLogin: takeLatest(
        LOGIN_USER[REQUEST],
        handleUserRequest
    ),
    watchUserRegister: takeLatest(
        REGISTER_USER[REQUEST],
        handleUserRegisterRequest
    ),
    watchUserLoginSuccess: takeLatest(
        LOGIN_USER[SUCCESS],
        handleAuthSuccess
    ),
    watchUserRegisterSuccess: takeLatest(
        REGISTER_USER[SUCCESS],
        handleAuthSuccess
    ),
}
