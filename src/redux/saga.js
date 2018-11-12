import { fork } from "redux-saga/effects";
import { repositoriesFetchWatcher } from "./repositories/sagas";
import { favouritesSearchWatcher } from "./favourites/sagas";

export default function* saga() {
    yield [
        fork(repositoriesFetchWatcher),
        fork(favouritesSearchWatcher)
    ];
};