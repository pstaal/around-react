import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupProfile from './PopupProfile';
import PopupAvatar from './PopupAvatar';
import PopupConfirmation from './PopupConfirmation';
import PopupPlace from './PopupPlace';
import PopupImage from './PopupImage';
import React from 'react';

function App() {

    const [openAvatar, setOpenAvatar] = React.useState(false);
    const [openProfile, setOpenProfile] = React.useState(false);
    const [openPlace, setOpenPlace] = React.useState(false);
    const [openPicture, setOpenPicture] = React.useState(false);

    function handleEditAvatarClick() {
        setOpenAvatar(true);
    }

    function handleEditProfileClick() {
        setOpenProfile(true);
    }

    function handleAddPlaceClick() {
        setOpenPlace(true);
    }

    function handlePictureClick() {
        setOpenPicture(true);
    }


  return (
  <div className="page">
    <Header />
    <Main onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onEditAvatarClick={handleEditAvatarClick} onCardClick={handlePictureClick}/>
    <Footer />
    <PopupProfile isOpen={openProfile}/>
    <PopupPlace isOpen={openPlace}/>
    <PopupAvatar isOpen={openAvatar}/>
    <PopupImage isOpen={openPicture}/>
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
