import pen from '../images/pen.svg';
import profilePicture from '../images/profile_pic.jpg';
import plusSign from '../images/plus-sign.svg';

function Main() {
    return (
    <main className="content">
        <div className="profile">
            <div className="profile__picture-container">
                <img className="profile__picture" src={profilePicture} alt="jacque cousteau" />
                <div className="profile__picture-overlay">
                    <img src={pen} alt="pen icon" className="profile__picture-icon" />
                </div>
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    <h1 className="profile__name"></h1>
                    <button type="button" className="profile__button-name-change"></button>
                </div>
                <p className="profile__function"></p>
            </div>
            <button type="button" className="profile__button-add-place"><img src={plusSign} alt="plus sign symbol" className="profile__plus-sign" /></button>
        </div>
        <section>
            <ul className="places">
                
            </ul>
        </section>
    </main>

    )
}

export default Main;