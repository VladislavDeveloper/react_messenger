import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PublicRoute = ({ children }) => {
    const auth = useSelector((state) => state.profileReducer.auth)
    console.log(auth);
    if (auth) {
        return (
            <Navigate to="/" />
        )
    }
    return children
}

export default PublicRoute