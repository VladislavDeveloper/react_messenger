import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({ children }) => {
    const auth = useSelector((state) => state.profileReducer.auth)
    console.log(auth);
    if (!auth) {
        return (
            <Navigate to="/sign-in" />
        )
    }
    return children
}

export default PrivateRoute