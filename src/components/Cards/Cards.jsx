import './Cards.css';
import Card from '../Card/Card.jsx';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS
import service10 from '../../assets/img/service-10.webp';
import service1 from '../../assets/img/service-1.webp';
import service2 from '../../assets/img/service-2.webp';
import service3 from '../../assets/img/service-3.webp';
import service4 from '../../assets/img/service-4.webp';
import service5 from '../../assets/img/service-5.webp';
import service6 from '../../assets/img/service-6.webp';
import service8 from '../../assets/img/service-8.webp';
import service9 from '../../assets/img/service-9.webp';

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
    const [currentIndex, setCurrentIndex] = useState(0); // Индекс слайда
    const [isMobile, setIsMobile] = useState(false); // Состояние для проверки мобильного устройства
    const displayCount = 1; // Количество карточек на одном слайде
    const images = cardsData; // Данные для слайдера
    const [touchStartX, setTouchStartX] = useState(0); // Начальная позиция свайпа
    const [touchEndX, setTouchEndX] = useState(0); // Конечная позиция свайпа

    useEffect(() => {
        // Инициализация AOS
        AOS.init({
            duration: 1000,
            easing: 'ease-out',
            once: true,
        });

        // Функция для обновления состояния isMobile при изменении ширины окна
        const handleResize = () => {
            if (window.innerWidth <= 740) {
                setIsMobile(true); // Включаем слайдер на мобильных устройствах
            } else {
                setIsMobile(false); // Отключаем слайдер на больших экранах
            }
        };

        // Добавляем слушатель события resize
        window.addEventListener('resize', handleResize);

        // Проверяем размер окна при первоначальной загрузке
        handleResize();

        // Убираем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Функция для обновления слайдера
    const updateSlider = () => {
        return images.slice(currentIndex, currentIndex + displayCount);
    };

    // Обработчик кнопки "влево"
    const leftButton = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Обработчик кнопки "вправо"
    const rightButton = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Обработчик начала свайпа
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX); // Сохраняем начальную позицию свайпа
    };

    // Обработчик завершения свайпа
    const handleTouchEnd = (e) => {
        setTouchEndX(e.changedTouches[0].clientX); // Сохраняем конечную позицию свайпа

        // Определяем направление свайпа
        if (touchStartX - touchEndX > 50) {
            // Свайп влево
            rightButton();
        } else if (touchEndX - touchStartX > 50) {
            // Свайп вправо
            leftButton();
        }
    };

    return (
        <section id="services" className="cards">
            <h2 className="cards__title">Наши услуги</h2>
            <div
                className="cards__box"
                onTouchStart={isMobile ? handleTouchStart : null} // Добавляем обработчик свайпа
                onTouchEnd={isMobile ? handleTouchEnd : null} // Добавляем обработчик свайпа
            >
                {isMobile
                    ? // Для мобильных устройств показываем только слайдер
                      updateSlider().map((card) => (
                          <Card
                              key={card.id}
                              imgPath={card.imgPath}
                              title={card.title}
                              data-aos="fade-up" // Добавляем анимацию для карточек на мобильных устройствах
                          />
                      ))
                    : // Для больших экранов показываем все карточки
                      cardsData.map((card) => (
                          <Card
                              key={card.id}
                              imgPath={card.imgPath}
                              title={card.title}
                              data-aos="fade-up" // Добавляем анимацию для всех карточек на больших экранах
                          />
                      ))}
            </div>
            {isMobile && (
                <div className="slider-buttons">
                    <button className="service__buttons_3row-left" onClick={leftButton}>
                        &gt;
                    </button>
                    <button className="service__buttons_3row-right" onClick={rightButton}>
                        &gt;
                    </button>
                </div>
            )}
        </section>
    );
}

export default Cards;
