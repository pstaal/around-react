import PopupWithForm from "./PopupWithForm";

function PopupAvatar(props) {


    return (
        <PopupWithForm name="profile-picture" title="Change profile picture" isOpen={props.isOpen} onClose={props.onClose}>
            <form name="popupform" className="popup__form popup__form-profile-picture">
                    <input id="profile-input" required placeholder="New profile image URL" name="avatar" className="popup__input" type="url" />
                    <span className="profile-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-picture" disabled>Save</button>
            </form>
        </PopupWithForm>
    )

}

export default PopupAvatar;