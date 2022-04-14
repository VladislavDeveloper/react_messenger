import { CHANGE_MAIN_THEME } from "./constants"

const initialState = {
    darkTheme: true,
    showUserName: true,
    showUserDateOfBirth: true,
}

const settingReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MAIN_THEME: {
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        }
        default: return state
    }
}

export { settingReducer }