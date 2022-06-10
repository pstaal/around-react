import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import React from 'react';
import Api from '../utils/api';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext';

//initalize api instance
const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
      authorization: "5ad7ef92-ff2d-4fbe-9e41-f5034926c435",
      "Content-Type": "application/json"
    }
  }); 


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false); 
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: '', title: ''});
    const [currentUser, setCurrentUser] = React.useState('');
    const [cards, setCards] = React.useState([]);
    const [selectedCardId, setSelectedCardId] = React.useState(null);


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

    function handleCardDelete(CardId) {
        api.deleteCard(CardId).then((res) => {
            setCards(cards.filter(card => card._id !== CardId));
            setSelectedCardId(null);
            closeAllPopups();
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    }

    function handleAddPlaceSubmit(cardObject){
        api.addCart(cardObject).then((newCard) => {
            setCards([newCard, ...cards]); 
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

    function handleConfirmation(cardId) {
        setIsConfirmDeletePopupOpen(true);
        setSelectedCardId(cardId);
    }
 
    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsConfirmDeletePopupOpen(false);
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
        <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onConfirm={handleConfirmation} onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick}/>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <ConfirmDeletePopup isOpen={isConfirmDeletePopupOpen} cardId={selectedCardId} onClose={closeAllPopups} onDelete={handleCardDelete}/>
    </CurrentUserContext.Provider>
  </div>

  );
}

export default App;
