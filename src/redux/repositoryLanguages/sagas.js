import { takeEvery, call, put, select } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { repositoriesApi } from "api/github/repositories"
import { repositoryLanguagesFetchSucceeded, repositoryLanguagesFetchFailed } from "./actions";
import { findByRepoId } from "./selectors";

export function* repositoryLanguagesFetchWatcher () {
    yield takeEvery(actionTypes.REPOSITORY_LANGULAGES_FETCH_INITIATED, fetchRepositoryLanguages);
}

export function* fetchRepositoryLanguages(action) {
    try {
        const existingItem = yield select(findByRepoId, action.payload.id);

        if (existingItem) {
            yield put(repositoryLanguagesFetchSucceeded(existingItem));
        } else {
            const response = yield call(repositoriesApi.languages, {
                owner: action.payload.owner.login,
                repo: action.payload.name
            });
    
            const repositoryLanguageItem = {
                repoId: action.payload.id,
                languages: response
            };
    
            yield put(repositoryLanguagesFetchSucceeded(repositoryLanguageItem));
        }
    } catch (e) {
        yield put(repositoryLanguagesFetchFailed(e.message));
    }
}
