import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupProfile from './PopupProfile';
import PopupAvatar from './PopupAvatar';
import PopupConfirmation from './PopupConfirmation';
import PopupPlace from './PopupPlace';
import ImagePopup from './ImagePopup';
import React from 'react';


function App() {

    const [openAvatar, setOpenAvatar] = React.useState(false);
    const [openProfile, setOpenProfile] = React.useState(false);
    const [openPlace, setOpenPlace] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({isOpen: false, link: '', title: ''});

    function handleEditAvatarClick() {
        setOpenAvatar(true);
    }

    function handleEditProfileClick() {
        setOpenProfile(true);
    }

    function handleAddPlaceClick() {
        setOpenPlace(true);
    }

    function handleCardClick({isOpen, link, title}) {
        setSelectedCard({isOpen, link, title});
    }
 
    function closeAllPopups() {
        setOpenAvatar(false);
        setOpenProfile(false);
        setOpenPlace(false);
        setSelectedCard({isOpen: false, link: '', title: ''});
    }


  return (
  <div className="page">
    <Header />
    <Main onCardClick={handleCardClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick}/>
    <Footer />
    <PopupProfile isOpen={openProfile} onClose={closeAllPopups}/>
    <PopupPlace isOpen={openPlace} onClose={closeAllPopups}/>
    <PopupAvatar isOpen={openAvatar} onClose={closeAllPopups}/>
    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    <PopupConfirmation />
   
    
        
    
    <template id="card-template">
        <li className="places__card">
            <img src="<%=require('./images/Trash.svg')%>" alt="trashcan icon" className="places__card-delete-icon" />
            <img className="places__card-image" />
            <div className="places__card-content">
                <h2 className="places__card-title"></h2>
                <div className="places__like">
                    <button type="button" className="places__card-button"></button>
                    <p className="places__likes-counter"></p>
                </div>
            </div>
        </li>
    </template>
</div>
  );
}

export default App;
