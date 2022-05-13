import PopupWithForm from "./PopupWithForm";

function PopupProfile(props) {

    return (
        <PopupWithForm name="profile" title="Edit profile" isOpen={props.isOpen} onClose={props.onClose}>
            <form name="popupform" className="popup__form popup__form-profile">
                    <input id="name-input" minlength="2" maxlength="40" required placeholder="name" name="userName" className="popup__input" type="text" />
                    <span className="name-input-error popup__input-error"></span>
                    <input id="function-input" minlength="2" maxlength="200" required placeholder="function" name="userJob" className="popup__input" type="text" />
                    <span className="function-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-profile" disabled>Save</button>
            </form>
        </PopupWithForm>
    )

}

export default PopupProfile;