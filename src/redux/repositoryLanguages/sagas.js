import { takeLatest, call, put } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { repositoriesApi } from "api/github/repositories"
import { repositoryLanguagesFetchSucceeded, repositoryLanguagesFetchFailed } from "./actions";

export function* repositoryLanguagesFetchWatcher () {
    yield takeLatest(actionTypes.REPOSITORY_LANGULAGES_FETCH_INITIATED, fetchRepositoryLanguages);
}

export function* fetchRepositoryLanguages(action) {
    try {
        const response = yield call(repositoriesApi.languages, {
            owner: action.payload.owner.login,
            repo: action.payload.name
        });

        const repositoryLanguageItem = {
            repoId: action.payload.owner.id,
            languages: response
        };

        yield put(repositoryLanguagesFetchSucceeded(repositoryLanguageItem));
    } catch (e) {
        yield put(repositoryLanguagesFetchFailed(e.message));
    }
}
