import PopupWithForm from "./PopupWithForm";

function PopupAvatar(props) {


    return (
        <PopupWithForm name="profile-picture" title="Change profile picture" isOpen={props.isOpen} onClose={props.onClose}>
                    <input id="profile-input" required placeholder="New profile image URL" name="avatar" className="popup__input" type="url" />
                    <span className="profile-input-error popup__input-error"></span>
        </PopupWithForm>
    )

}

export default PopupAvatar;