import { fork } from "redux-saga/effects";
import { repositoriesFetchWatcher } from "./repositories/sagas";

export default function* saga() {
    yield [
        fork(repositoriesFetchWatcher)
    ];
};