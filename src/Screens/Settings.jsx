import { useSelector, useDispatch } from "react-redux";

import { changeMainTheme } from "../Store/Settings/actions";
import { userLogOut } from "../Store/Profile/actions";

function Settings() {

    const dispatch = useDispatch()

    const { userName, email, name, lastName, dateOfBurth } = useSelector((state) => state.profileReducer)

    const changeTheme = () => {
        dispatch(changeMainTheme())
    }
    const logOutOfProfile = () => {
        dispatch(userLogOut())
    }

    return (
        <>
            <h2>Your Profile</h2>
            <h3>{userName}</h3>
            <h3>{email}</h3>
            <h3>{name}</h3>
            <h3>{lastName}</h3>
            <h3>{dateOfBurth}</h3>
            <button onClick={() => changeTheme()}>change theme</button>
            <button onClick={() => logOutOfProfile()}>Log out</button>
        </>
    )
}

export default Settings