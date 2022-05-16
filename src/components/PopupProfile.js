import PopupWithForm from "./PopupWithForm";

function PopupProfile(props) {

    return (
        <PopupWithForm name="profile" title="Edit profile" isOpen={props.isOpen} onClose={props.onClose}>
                    <input id="name-input" minLength="2" maxLength="40" required placeholder="name" name="userName" className="popup__input" type="text" />
                    <span className="name-input-error popup__input-error"></span>
                    <input id="function-input" minLength="2" maxLength="200" required placeholder="function" name="userJob" className="popup__input" type="text" />
                    <span className="function-input-error popup__input-error"></span>
        </PopupWithForm>
    )

}

export default PopupProfile;