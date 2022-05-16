import PopupWithForm from "./PopupWithForm";

function PopupPlace(props) {
     return (
         <PopupWithForm name="place" title="New place" isOpen={props.isOpen} onClose={props.onClose}>
                    <input id="title-input" minLength="1" maxLength="30" required placeholder="Title" name="title" className="popup__input" type="text" />
                    <span className="title-input-error popup__input-error"></span>
                    <input id="link-input" required placeholder="Image URL" name="link" className="popup__input" type="url" />
                    <span className="link-input-error popup__input-error"></span>
         </PopupWithForm>
     )

}

export default PopupPlace;