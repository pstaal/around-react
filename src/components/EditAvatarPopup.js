import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {

    const avatarRef = React.useRef();

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
      
        // Pass the values of the managed components to the external handler
        props.onUpdateAvatar({
          avatar: avatarRef.current.value
        });

       props.onClose();

      } 

    return (
        <PopupWithForm name="profile-picture" title="Change profile picture" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
                    <input ref={avatarRef} id="profile-input" required placeholder="New profile image URL" name="avatar" className="popup__input" type="url" />
                    <span className="profile-input-error popup__input-error"></span>
        </PopupWithForm>
    )

}

export default EditAvatarPopup;