import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="page">
    <header className="header">
        <img className="logo" alt="logo" src="<%=require('./images/logo.svg')% >" />
    </header>
    <main className="content">
        <div className="profile">
            <div className="profile__picture-container">
                <img className="profile__picture" src="<%=require('./images/profile_pic.jpg')%>" alt="picture of jacque cousteau" />
                <div className="profile__picture-overlay">
                    <img src="<%=require('./images/pen.svg')%>" alt="pen icon" className="profile__picture-icon" />
                </div>
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    <h1 className="profile__name"></h1>
                    <button type="button" className="profile__button-name-change"></button>
                </div>
                <p className="profile__function"></p>
            </div>
            <button type="button" className="profile__button-add-place"><img src="<%=require('./images/plus-sign.svg')%>" alt="plus sign symbol" className="profile__plus-sign" /></button>
        </div>
        <section>
            <ul className="places">
                
            </ul>
        </section>
    </main>
    <footer className="footer">
        <p className="footer__text">&copy; 2021 Around The U.S.</p>
    </footer>

        <div className="popup popup-profile">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">Edit Profile</h3>
                <form name="popupform" className="popup__form popup__form-profile">
                    <input id="name-input" minlength="2" maxlength="40" required placeholder="name" name="userName" className="popup__input" type="text" />
                    <span className="name-input-error popup__input-error"></span>
                    <input id="function-input" minlength="2" maxlength="200" required placeholder="function" name="userJob" className="popup__input" type="text" />
                    <span className="function-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-profile" disabled>Save</button>
                </form>
            </div>
        </div>

        <div className="popup popup-place">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">New Place</h3>
                <form name="popupform" className="popup__form popup__form-place">
                    <input id="title-input" minlength="1" maxlength="30" required placeholder="Title" name="title" className="popup__input" type="text" />
                    <span className="title-input-error popup__input-error"></span>
                    <input id="link-input" required placeholder="Image URL" name="link" className="popup__input" type="url" />
                    <span className="link-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-place" disabled>Create</button>
                </form>
            </div>
        </div>

        <div className="popup popup-profile-picture">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title">Change profile picture</h3>
                <form name="popupform" className="popup__form popup__form-profile-picture">
                    <input id="profile-input" required placeholder="New profile image URL" name="avatar" className="popup__input" type="url" />
                    <span className="profile-input-error popup__input-error"></span>
                    <button type="submit" className="popup__button popup__button_disabled popup__button-picture" disabled>Save</button>
                </form>
            </div>
        </div>

        <div className="popup popup-confirm">
            <div className="popup__container">
                <button type="button" className="popup__close"></button>
                <h3 className="popup__title popup__title-confirm">Are you sure?</h3>
                <button type="submit" className="popup__button popup__button-confirm">Yes</button>    
            </div>
        </div>
  
    
        <div className="popup popup-picture">
            <div className="popup-picture__container">
                <button type="button" className="popup__close"></button>
                <img className="popup-picture__image" />
                <p className="popup-picture__title"></p>
            </div>
        </div>
    
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
