import { takeLatest, call } from "redux-saga/effects";
import { actionTypes } from "./consts";
import { routes } from "consts";
import history from "utils/history";

export function* favouritesSearchWatcher () {
    yield takeLatest(actionTypes.FAVOURITES_SEARCH_INITIATED, searchFavourites);
}

export function* searchFavourites(action) {
    const criteria = JSON.stringify({
        desc: action.payload.repoOrDescription,
        lang: action.payload.language
    });

    yield call(history.push, `${routes.RESULTS}/${btoa(criteria)}`);
}