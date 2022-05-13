import PopupWithForm from "./PopupWithForm";

function PopupPlace(props) {
     return (
         <PopupWithForm name="place" title="New place" isOpen={props.isOpen}>
             <form name="popupform" className="popup__form popup__form-place">
                    <input id="title-input" minlength="1" maxlength="30" required placeholder="Title" name="title" className="popup__input" type="text" />
                    <span className="title-input-error popup__input-error"></span>
                    <input id="link-input" required placeholder="Image URL" name="link" className="popup__input" type="url" />
                    <span className="link-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-place" disabled>Create</button>
            </form>
         </PopupWithForm>
     )

}

export default PopupPlace;