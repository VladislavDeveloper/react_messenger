import { fork } from "@redux-saga/core/effects"

import { createNewUserWatcher, signInSagaWatcher } from "./authSaga";

function* handleDataWithSaga() {
    yield fork(createNewUserWatcher)
    yield fork(signInSagaWatcher)
}

export default function* rootSaga() {
    yield handleDataWithSaga()
}