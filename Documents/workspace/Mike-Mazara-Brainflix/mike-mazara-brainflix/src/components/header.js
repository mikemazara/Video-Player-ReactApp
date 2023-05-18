import '../styles/header.scss'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-image" src="./assets/logo/Logo-brainflix.svg" alt="Brainflix logo" />
            </div>
            <div className="header__search">
                <input className="header__search-input" type="text" placeholder="Search" />
                <button className="header__search-button" type="submit">Search</button>
                <img className="header__user-image" src="/assets/images/Mohan-muruge.jpg" alt="User avatar" />
            </div>
            <div className="header__user">
                <button className="header__user-upload" type="button">+ UPLOAD</button>
            </div>
        </header>
    )
    }

export default Header