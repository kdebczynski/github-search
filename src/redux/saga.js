import { fork } from "redux-saga/effects";
import { repositoriesFetchWatcher, repositoryRedirectWatcher } from "./repositories/sagas";
import { repositoryLanguagesFetchWatcher } from "./repositoryLanguages/sagas";
import { favouritesSearchWatcher } from "./favourites/sagas";

export default function* saga() {
    yield [
        fork(repositoriesFetchWatcher),
        fork(repositoryRedirectWatcher),
        fork(favouritesSearchWatcher),
        fork(repositoryLanguagesFetchWatcher)
    ];
};