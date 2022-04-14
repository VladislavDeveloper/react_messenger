import { NavLink } from "react-router-dom"

import "./Footer.scss"
import messages from "../img/message.png"
import phone from "../img/phone-call.png"
import settings from "../img/settings.png"

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <nav className='navigation'>
                        <NavLink className="menu_nav" to="/"><img src={messages} alt="messages" width="38px" /></NavLink>
                        <NavLink className="menu_nav" to="/phone-call"><img src={phone} alt="phone" width="38px" /></NavLink>
                        <NavLink className="menu_nav" to="/settings"><img src={settings} alt="settings" width="38px"/></NavLink> 
                </nav>
            </div>
        </div>
    )
}

export default Footer