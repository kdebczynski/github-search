import { takeLatest, call, put } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { searchApi } from "api/github/search";
import { repositoriesFetchSucceeded, repositoriesFetchFailed } from "./actions";
import { createQueryParams } from "utils/queryParams";

export function* repositoriesFetchWatcher () {
    yield takeLatest(actionTypes.REPOSITORIES_FETCH_INITIATED, fetchRepositories);
}

export function* fetchRepositories(action) {
    try {
        const response = yield call(searchApi.repositories, createQueryParams(action.payload.criteria));

        yield put(repositoriesFetchSucceeded(response));
    } catch (e) {
        yield put(repositoriesFetchFailed(e.message));
    }
}

export function* repositoryRedirectWatcher () {
    yield takeLatest(actionTypes.REPOSITORY_REDIRECT, repositoryRedirect);
}

export function* repositoryRedirect(action) {
    yield call(window.open, action.payload.url, "_blank");
}