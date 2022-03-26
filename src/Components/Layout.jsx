import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <nav className='navigation'>
                <NavLink to="/">Messages</NavLink>
                <NavLink to="/phone-call">Phone</NavLink>
                <NavLink to="/settings">Settings</NavLink> 
            </nav>
            
            <Outlet />

            <footer>@2022</footer>
        </>
    )
}

export default Layout