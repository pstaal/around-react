

function PopupWithForm(props) {

 return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <h3 className="popup__title">{props.title}</h3>
            <form name={props.name} className="popup__form">
                {props.children}
                <button type="submit" className="popup__button popup__button_disabled" disabled>Save</button>
            </form>
        </div>
    </div>
 )

};


export default PopupWithForm;

