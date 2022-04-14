import { createStore, compose, combineReducers } from "redux"

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

const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(),
)

const store = configureStore({})

export default store