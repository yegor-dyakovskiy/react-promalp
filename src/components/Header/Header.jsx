import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css';
import logo from '../../assets/svg/logo.svg';
import instagram from '../../assets/svg/instagram.svg';
import whatsapp from '../../assets/svg/whatsapp.svg';

const phoneNumber = '7072332236';
const message =
    'Здравствуйте! Я интересуюсь услугами промальпа, и хотел бы задать несколько вопросов.';
const encodedMessage = encodeURIComponent(message); // Кодируем сообщение
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

function Header() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            easing: 'ease-in-out', // Плавность анимации
            once: true, // Анимация будет выполнена только один раз
        });
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav__logo-box">
                    <img
                        className="nav__logo"
                        src={logo}
                        alt="logo"
                        data-aos="fade-down" // Анимация появления сверху
                    />
                    <div
                        className="nav__logo-textbox"
                        data-aos="fade-up" // Анимация появления снизу
                    >
                        <p className="nav__logo-textup">ПРОМАЛЬП</p>
                        <p className="nav__logo-textdown">АЛМАТЫ</p>
                    </div>
                </div>
                <ul className="nav__menu">
                    <li className="nav__menu-item" data-aos="fade-left">
                        <a className="nav__menu-link" href="#">
                            О нас
                        </a>
                    </li>
                    <li className="nav__menu-item" data-aos="fade-left">
                        <a className="nav__menu-link" href="#">
                            Услуги
                        </a>
                    </li>
                    <li className="nav__menu-item" data-aos="fade-left">
                        <a className="nav__menu-link" href="#">
                            Контакты
                        </a>
                    </li>
                </ul>
                <div className="nav__socials">
                    <a
                        className="nav__icon"
                        href="#"
                        data-aos="fade-right"
                        data-aos-delay="200" // Задержка анимации для разных элементов
                    >
                        <img src={instagram} alt="" />
                    </a>
                    <a
                        className="nav__icon"
                        href={whatsappLink}
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <img src={whatsapp} alt="" />
                    </a>
                    <a
                        className="nav__phone"
                        href={whatsappLink}
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        +7 707 233 2236
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
