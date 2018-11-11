import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "./consts";

export function* repositoriesFetchWatcher () {
    yield takeLatest(actionTypes.REPOSITORIES_FETCH_INITIATED, fetchRepositories);
}

export function* fetchRepositories() {
    
}