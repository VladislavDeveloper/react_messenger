import "./Modal.scss"

function Modal({isModalActive, setIsModalActive}){
    return(
        <div className={isModalActive ? "modal_window_active" : "modal_window"}  onClick={()=> setIsModalActive(false)}>
            <div className="window_content">
                modal_window
            </div>
        </div>
    )
}

export default Modal