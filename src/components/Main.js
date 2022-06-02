import pen from '../images/pen.svg';
import plusSign from '../images/plus-sign.svg';
import React from 'react';
import Card from './Card';
import { api } from '../utils/api';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';


function Main(props) {

    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(CurrentUserContext);

    function handleCardLike(card) {
        // Check one more time if this card was already liked
        const isLiked = card.likes.some(user => user._id === currentUser._id);
        
        // Send a request to the API and getting the updated card data
        api.toggleLike(card._id, isLiked).then((newCard) => {
            setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    };

    function handleCardDelete(id) {
        api.deleteCard(id).then((res) => {
            setCards(cards.filter(card => card._id !== id));
            console.log(res);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    }


    React.useEffect(() => {
        api.getInitialCards().then((data) => {
            setCards([...cards, ...data]);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    },[]);

    return (
    <main className="content">
        <div className="profile">
            <div className="profile__picture-container">
                <img className="profile__picture" src={currentUser.avatar} alt="jacque cousteau" />
                <div className="profile__picture-overlay" onClick={props.onEditAvatarClick}>
                    <img src={pen} alt="pen icon" className="profile__picture-icon" />
                </div>
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" className="profile__button-name-change" onClick={props.onEditProfileClick}></button>
                </div>
                <p className="profile__function">{currentUser.about}</p>
            </div>
            <button type="button" className="profile__button-add-place" onClick={props.onAddPlaceClick}><img src={plusSign} alt="plus sign symbol" className="profile__plus-sign" /></button>
        </div>
        <section>
            <ul className="places">
            {cards.map((card) => <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>)}
            </ul>
        </section>
    </main>

    )
}

export default Main;