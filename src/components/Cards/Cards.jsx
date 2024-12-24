import './Cards.css';
import Card from '../Card/Card.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; // Подключаем базовые стили Swiper
import 'swiper/css/navigation';  // Для стилей навигации
import 'swiper/css/pagination';  // Для стилей пагинации
import 'swiper/css/effect-coverflow'; // Для стилей эффекта Coverflow
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
    { id: 1, imgPath: service10, title: 'Мойка окон', aosAnimation: 'fade-up' },
    { id: 2, imgPath: service1, title: 'Монтаж рекламной конструкции', aosAnimation: 'fade-up' },
    { id: 3, imgPath: service2, title: 'Монтаж греющего кабеля', aosAnimation: 'fade-up' },
    { id: 4, imgPath: service3, title: 'Покраска крыши дома', aosAnimation: 'fade-up' },
    { id: 5, imgPath: service4, title: 'Фото и видеосъёмка', aosAnimation: 'fade-up' },
    { id: 6, imgPath: service5, title: 'Покраска фасада', aosAnimation: 'fade-up' },
    { id: 7, imgPath: service6, title: 'Штукатурка фасада', aosAnimation: 'fade-up' },
    { id: 8, imgPath: service8, title: 'Обслуживание систем освещения', aosAnimation: 'fade-up' },
    { id: 9, imgPath: service9, title: 'Покраска крыши дома', aosAnimation: 'fade-up' },
    { id: 10, imgPath: service1, title: 'Новая услуга 1', aosAnimation: 'fade-up' },
    { id: 11, imgPath: service1, title: 'Новая услуга 2', aosAnimation: 'fade-up' },
    { id: 12, imgPath: service1, title: 'Новая услуга 3', aosAnimation: 'fade-up' },
    { id: 13, imgPath: service1, title: 'Новая услуга 4', aosAnimation: 'fade-up' },
    { id: 14, imgPath: service1, title: 'Новая услуга 5', aosAnimation: 'fade-up' },
];

function Cards() {
    return (
        <section className='cards__swiper'>
           <Swiper
    modules={[Keyboard, Pagination, Navigation, EffectCoverflow]}  // Подключаем модули
    keyboard={{ enabled: true }}  // Включаем управление клавиатурой
    spaceBetween={50}
    loop={true} 
    pagination={{
        clickable: true,  // Включаем возможность клика по пагинации
        el: '.swiper-pagination',  // Контейнер для пагинации
    }}
    navigation={{
        nextEl: '.swiper-button-next',  // Кнопка "следующий"
        prevEl: '.swiper-button-prev',  // Кнопка "предыдущий"
    }}
    effect="coverflow"  // Активируем эффект Coverflow
    coverflowEffect={{
        rotate: 5,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false,
    }}
    breakpoints={{
        // Когда экран больше 1200px
        1200: {
            slidesPerView: 3,  // Показываем 3 карточки
        },
        // Когда экран от 900px до 1199px
        900: {
            slidesPerView: 2,  // Показываем 2 карточки
        },
        // Когда экран меньше 900px
        0: {
            slidesPerView: 1,  // Показываем 1 карточку
        },
    }}
>
    {cardsData.map((card) => (
        <SwiperSlide key={card.id}>
            <Card
                imgPath={card.imgPath}
                title={card.title}
            />
        </SwiperSlide>
    ))}
</Swiper>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </section>
    );
}

export default Cards;
