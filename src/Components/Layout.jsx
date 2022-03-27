import { Outlet } from "react-router-dom";

import './Layout.scss'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({isModalActive, setIsModalActive}) => {
    return(
        <>
            <Header isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout