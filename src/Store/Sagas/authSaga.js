import { call, put, takeEvery } from "redux-saga/effects";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { registerNewUserAction, userLogIn } from "../Profile/actions";
import { auth } from "../../FirebaseDB/firebase";


function* signInSagaWorker(action) {
    yield signInWithEmailAndPassword(auth, action.email, action.password)
    yield put(userLogIn())
}

function* createNewUserWorker(action) {
    yield createUserWithEmailAndPassword(auth, action.email, action.password);
    yield put(userLogIn())
    yield put(registerNewUserAction(action.userName, action.email, action.dateOfBirth))
}

export function* signInSagaWatcher() {
    yield takeEvery('USER_SIGN_IN', signInSagaWorker)
}

export function* createNewUserWatcher() {
    yield takeEvery('REGISTER_NEW_USER', createNewUserWorker)
}