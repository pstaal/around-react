

function PopupWithForm(props) {

 return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <h3 className="popup__title">{props.title}</h3>
            {props.children}
        </div>
    </div>
 )

};


export default PopupWithForm;

