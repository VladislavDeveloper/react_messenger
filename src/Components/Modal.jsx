import "./Modal.scss"


import close_icon from "../img/x.png"

function Modal({isModalActive, setIsModalActive}){
    return(
        <div className={isModalActive ? "modal active" : "modal"} onClick={()=> setIsModalActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="window_header">
                    <div className="window_title">Contacts</div>
                    <div className="window_close_icon">
                        <img className="close_icon" src={close_icon} alt="close" width="20px" onClick={()=> setIsModalActive(false)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal