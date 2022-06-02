import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

    // Subscription to the context
    const currentUser = React.useContext(CurrentUserContext);

    // After loading the current user from the API
    // their data will be used in managed components.
    React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    }, [currentUser]); 

    const [name, setName ] = React.useState('');
    const [description, setDescription ] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <PopupWithForm name="profile" title="Edit profile" isOpen={props.isOpen} onClose={props.onClose}>
                    <input id="name-input" onChange={handleNameChange} minLength="2" value={name} maxLength="40" required placeholder="name" name="userName" className="popup__input" type="text" />
                    <span className="name-input-error popup__input-error"></span>
                    <input id="function-input" onChange={handleDescriptionChange} minLength="2" value={description} maxLength="200" required placeholder="function" name="userJob" className="popup__input" type="text" />
                    <span className="function-input-error popup__input-error"></span>
        </PopupWithForm>
    )

}

export default EditProfilePopup;