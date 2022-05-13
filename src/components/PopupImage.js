
function PopupImage(props) {

    return (
        <div className={`popup popup-picture ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup-picture__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <img className="popup-picture__image" />
                <p className="popup-picture__title"></p>
            </div>
        </div>
    )
}

export default PopupImage;