import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
    const [title, setTitle ] = React.useState('');
    const [link, setLink ] = React.useState('');

    function handleLinkChange(e) {
        setLink(e.target.value);
    };

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
      
        // Pass the values of the managed components to the external handler
        props.onAddPlaceSubmit({ title, link });

        props.onClose();

      } 

     return (
         <PopupWithForm name="place" title="New place" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
                    <input value={title} onChange={handleTitleChange} id="title-input" minLength="1" maxLength="30" required placeholder="Title" name="title" className="popup__input" type="text" />
                    <span className="title-input-error popup__input-error"></span>
                    <input value={link} onChange={handleLinkChange} id="link-input" required placeholder="Image URL" name="link" className="popup__input" type="url" />
                    <span className="link-input-error popup__input-error"></span>
         </PopupWithForm>
     )

}

export default AddPlacePopup;