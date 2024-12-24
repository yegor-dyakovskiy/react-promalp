import './Header.css';
import logo from '../../assets/svg/logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';
import callMe from '../../utils/whatsapp';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__logo-box">
                    <img className="nav__logo" src={logo} alt="logo" />
                    <div className="nav__logo-textbox">
                        <p className="nav__logo-textup">ПРОМАЛЬП</p>
                        <p className="nav__logo-textdown">АЛМАТЫ</p>
                    </div>
                </div>
                <ul className="nav__menu">
                    <li className="nav__menu-item">
                        <a className="nav__menu-link" href="#about">
                            О нас
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-link" href="#services">
                            Услуги
                        </a>
                    </li>
                    <li className="nav__menu-item">
                        <a className="nav__menu-link" href="#">
                            Контакты
                        </a>
                    </li>
                </ul>
                <div className="nav__socials">
                    <a className="nav__icon" href="#">
                        <img src={instagram} alt="" />
                    </a>
                    <a className="nav__icon" href={callMe()}>
                        <img src={whatsapp} alt="" />
                    </a>
                    <a className="nav__phone" href={callMe()}>
                        +7 707 233 2236
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
