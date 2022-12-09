import { takeLatest, put, call } from "redux-saga/effects";
import {GET_POSTS, REQUEST} from "../actions/actionTypes";
import {api__getPosts} from "../services";
import {sendPayload, sendPayloadFailure} from "./helper";

function* handleGetPosts(payload) {
    try {
        const apiResponse = yield call(api__getPosts, payload?.data);
        yield sendPayload(apiResponse,GET_POSTS);
    } catch (e) {
        yield sendPayloadFailure(e, GET_POSTS)
    }
}

export const sagas = {
    watchFetchPosts: takeLatest(
        GET_POSTS[REQUEST],
        handleGetPosts
    ),
}
