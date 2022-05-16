import pen from '../images/pen.svg';
import plusSign from '../images/plus-sign.svg';
import React from 'react';
import Card from './Card';
import { api } from '../utils/api';


function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getInitialUser().then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });

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
                <img className="profile__picture" src={userAvatar} alt="jacque cousteau" />
                <div className="profile__picture-overlay" onClick={props.onEditAvatarClick}>
                    <img src={pen} alt="pen icon" className="profile__picture-icon" />
                </div>
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    <h1 className="profile__name">{userName}</h1>
                    <button type="button" className="profile__button-name-change" onClick={props.onEditProfileClick}></button>
                </div>
                <p className="profile__function">{userDescription}</p>
            </div>
            <button type="button" className="profile__button-add-place" onClick={props.onAddPlaceClick}><img src={plusSign} alt="plus sign symbol" className="profile__plus-sign" /></button>
        </div>
        <section>
            <ul className="places">
            {cards.map((card) => <Card card={card} key={card._id} onCardClick={props.onCardClick}/>)}
            </ul>
        </section>
    </main>

    )
}

export default Main;