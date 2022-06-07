import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PopupPlace from './PopupPlace';
import ImagePopup from './ImagePopup';
import React from 'react';
import { api } from '../utils/api';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); 
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: '', title: ''});
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        api.getInitialUser().then((data) => {
            setCurrentUser(data);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });

        api.getInitialCards().then((data) => {
            setCards([...cards, ...data]);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });

    },[]);

    function handleCardDelete(id) {
        api.deleteCard(id).then((res) => {
            setCards(cards.filter(card => card._id !== id));
            console.log(res);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    }

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


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick({isOpen, link, title}) {
        setSelectedCard({isOpen, link, title});
    }
 
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({isOpen: false, link: '', title: ''});
    }

    function handleUpdateUser(user) {
        api.setNewUser(user).then((data) => {
            setCurrentUser(data);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    }

    function handleUpdateAvatar(avatarObject) {
        api.changePicture(avatarObject).then((data) => {
            setCurrentUser(data); 
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    }


  return (
  <div className="page">
    <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick}/>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <PopupPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  </div>

  );
}

export default App;
