import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Banner.css';

const phoneNumber = '7072332236';
const message =
    'Здравствуйте! Я интересуюсь услугами промальпа, и хотел бы задать несколько вопросов.';
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

function Banner() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Время анимации
            easing: 'ease-in-out', // Плавное изменение
        });
    }, []);

    return (
        <section className="banner" data-aos="fade-up">
            <h1 className="banner__title" data-aos="fade-down">
                Промышленный <br />
                альпинизм в Алматы
            </h1>
            <h2 className="banner__subtitle" data-aos="fade-left">
                Опытные специалисты для монтажа, <br />
                обслуживания и ремонта на высоте
            </h2>
            <a className="banner__button" href={whatsappLink} data-aos="zoom-in">
                Бесплатная консультация
            </a>
        </section>
    );
}

export default Banner;
