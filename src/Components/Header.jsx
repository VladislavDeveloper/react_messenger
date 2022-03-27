import './Header.scss'

import contact_link from '../img/contact-book.png'


function Header({isModalActive, setIsModalActive}){

    return(
        <div className="header">
            <div className="header_title">Messages</div>
            <img src={contact_link} alt="contacts" width="32px" onClick={() => setIsModalActive(true)}/>
        </div>
    )
}

export default Header