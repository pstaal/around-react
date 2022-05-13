import PopupWithForm from "./PopupWithForm";

function PopupConfirmation(props) {
    
    return (
        <PopupWithForm  name="confirm" title="Are you sure?" isOpen={props.isOpen} onClose={props.onClose}/>
    )

}

export default PopupConfirmation;