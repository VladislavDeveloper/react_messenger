import { REGISTER_NEW_USER_WITH_EMAIL_AND_PASSWORD, USER_SIGN_IN, USER_LOG_OUT } from "./constants"


export const userLogIn = () => ({
    type: USER_SIGN_IN
})
export const userLogOut = () => ({
    type: USER_LOG_OUT
})


export const registerNewUserAction = (userName, email, dateOfBurth) => ({
    type: REGISTER_NEW_USER_WITH_EMAIL_AND_PASSWORD,
    userName,
    email,
    dateOfBurth
})