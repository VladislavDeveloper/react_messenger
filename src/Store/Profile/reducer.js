import { REGISTER_NEW_USER_WITH_EMAIL_AND_PASSWORD, USER_LOG_OUT, USER_SIGN_IN } from "./constants"

const initialState = {
    userUid: null,
    auth: false,
    userName: null,
    email: null,
    dateOfBurth: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGN_IN: {
            return {
                ...state,
                auth: true
            }
        }
        case USER_LOG_OUT: {
            return {
                ...state,
                auth: false,
                userName: null,
                email: null,
                dateOfBurth: null
            }
        }
        case REGISTER_NEW_USER_WITH_EMAIL_AND_PASSWORD: {
            return {
                ...state,
                userName: action.userName,
                email: action.email,
                dateOfBurth: action.dateOfBurth
            }
        }
        default:
            return state
    }
}

export { profileReducer }