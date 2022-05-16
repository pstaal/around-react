import trashcan from "../images/Trash.svg";

function Card(props) {

    function handleClick() {
        props.onCardClick({isOpen: true, title: props.card.name, link: props.card.link});
      }  

    return (
        <li className="places__card">
            <img src={trashcan} alt="trashcan icon" className="places__card-delete-icon" />
            <img className="places__card-image" src={props.card.link} alt="" onClick={handleClick}/>
            <div className="places__card-content">
                <h2 className="places__card-title">{props.card.name}</h2>
                <div className="places__like">
                    <button type="button" className="places__card-button"></button>
                    <p className="places__likes-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
        )
}

export default Card;