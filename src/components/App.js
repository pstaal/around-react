import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupProfile from './PopupProfile';
import PopupAvatar from './PopupAvatar';
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


    React.useEffect(() => {
        api.getInitialUser().then((data) => {
            setCurrentUser(data);
        }).catch((err) => {
            console.log(err); // log the error to the console
        });
    },[]);

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


  return (
  <div className="page">
    <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick}/>
        <Footer />
        <PopupProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <PopupPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
        <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </CurrentUserContext.Provider>
  </div>

  );
}

export default App;
