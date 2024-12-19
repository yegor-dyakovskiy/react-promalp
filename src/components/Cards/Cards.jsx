import './Cards.css';
import Card from '../Card/Card.jsx';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS
import service10 from "../../assets/img/service-10.webp";
import service1 from "../../assets/img/service-1.webp";
import service2 from "../../assets/img/service-2.webp";
import service3 from "../../assets/img/service-3.webp";
import service4 from "../../assets/img/service-4.webp";
import service5 from "../../assets/img/service-5.webp";
import service6 from "../../assets/img/service-6.webp";
import service8 from "../../assets/img/service-8.webp";
import service9 from "../../assets/img/service-9.webp";

const cardsData = [
    { id: 1, imgPath: service10, title: 'Мойка окон' },
    { id: 2, imgPath: service1, title: 'Монтаж рекламной конструкции' },
    { id: 3, imgPath: service2, title: 'Монтаж греющего кабеля' },
    { id: 4, imgPath: service3, title: 'Покраска крыши дома' },
    { id: 5, imgPath: service4, title: 'Фото и видеосъёмка' },
    { id: 6, imgPath: service5, title: 'Покраска фасада' },
    { id: 7, imgPath: service6, title: 'Штукатурка фасада' },
    { id: 8, imgPath: service8, title: 'Обслуживание систем освещения' },
    { id: 9, imgPath: service9, title: 'Покраска крыши дома' },
    { id: 10, imgPath: service1, title: 'Новая услуга 1' },
    { id: 11, imgPath: service1, title: 'Новая услуга 2' },
    { id: 12, imgPath: service1, title: 'Новая услуга 3' },
    { id: 13, imgPath: service1, title: 'Новая услуга 4' },
    { id: 14, imgPath: service1, title: 'Новая услуга 5' },
];


function Cards() {
    // Состояние для отображаемых карточек
    const [visibleCards, setVisibleCards] = useState(9);

    // Инициализация AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Длительность анимации
            easing: 'ease-out', // Плавность анимации
            once: true, // Анимация будет выполнена один раз
        });
    }, []);

    // Функция для обработки клика на кнопку
    const handleShowMore = () => {
        setVisibleCards((prevVisible) => prevVisible + 9); // Показываем ещё 9 карточек
    };

    return (
        <section className="cards">
            <h2 className="cards__title">Наши услуги</h2>
            <div className="cards__box">
                {cardsData.slice(0, visibleCards).map((card) => (
                    <Card
                        key={card.id}
                        imgPath={card.imgPath}
                        title={card.title}
                        aosAnimation="fade-up" // Передаем анимацию через пропс
                    />
                ))}
            </div>
            {visibleCards < cardsData.length && (
                <button className="cards__text" onClick={handleShowMore}>
                    Весь список услуг &gt;&gt;&gt;
                </button>
            )}
        </section>
    );
}

export default Cards;
