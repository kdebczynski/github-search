import { takeLatest, call } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { searchApi } from "api/github/search"

export function* repositoriesFetchWatcher () {
    yield takeLatest(actionTypes.REPOSITORIES_FETCH_INITIATED, fetchRepositories);
}

export function* fetchRepositories(action) {
    const criteria = action.payload.criteria;
    const criteriaApiString = `?q=${criteria.desc}+language:${criteria.lang}&sort=stars&order=desc`;

    yield call(searchApi.repositories, criteriaApiString);
}