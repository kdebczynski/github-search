import { fork } from "redux-saga/effects";
import { repositoriesFetchWatcher } from "./repositories/sagas";
import { repositoryLanguagesFetchWatcher } from "./repositoryLanguages/sagas";
import { favouritesSearchWatcher } from "./favourites/sagas";

export default function* saga() {
    yield [
        fork(repositoriesFetchWatcher),
        fork(favouritesSearchWatcher),
        fork(repositoryLanguagesFetchWatcher)
    ];
};