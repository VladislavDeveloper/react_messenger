import { createStore, compose, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./Sagas";

import { profileReducer } from "./Profile/reducer";
import { settingReducer } from "./Settings/reducer";

const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const rootReducer = combineReducers({
    profileReducer,
    settingReducer
})

const sagaMiddleware = createSagaMiddleware()

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})

sagaMiddleware.run(rootSaga)

export default store