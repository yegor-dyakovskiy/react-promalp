import './Advantages.css';

import icon1 from '../../assets/svg/advantages-1.svg';
import icon2 from '../../assets/svg/advantages-2.svg';
import icon3 from '../../assets/svg/advantages-3.svg';
import icon4 from '../../assets/svg/advantages-4.svg';
import icon5 from '../../assets/svg/advantages-5.svg';
import icon6 from '../../assets/svg/advantages-6.svg';

const cardsData = [
    {
        id: 1,
        imgPath: icon6,
        title: 'Высокое качество работ ',
        text: 'Мы обеспечиваем точность, аккуратность и внимательность к деталям на каждом этапе выполнения задач',
    },
    {
        id: 2,
        imgPath: icon5,
        title: 'Безопасность ',
        text: 'Соблюдение всех нормативов и требований безопасности для надежности и защиты на всех уровнях',
    },
    {
        id: 3,
        imgPath: icon4,
        title: 'Оперативность',
        text: 'Мы гарантируем быстрое и эффективное выполнение задач, сохраняя качество и внимание к каждой детали',
    },
    {
        id: 4,
        imgPath: icon3,
        title: 'Бесплатная консультация ',
        text: 'Мы предоставляем бесплатную консультацию, чтобы помочь вам разобраться в вопросах и предложить оптимальные решения для вашего проекта',
    },
    {
        id: 5,
        imgPath: icon2,
        title: 'Бесплатный замер ',
        text: 'Мы предоставляем бесплатный замер, чтобы точно оценить объём работ и предложить вам наилучшее решение',
    },
    {
        id: 6,
        imgPath: icon1,
        title: 'Закупка и доставка материалов',
        text: ' Мы занимаемся закупкой и доставкой всех необходимых материалов, гарантируя их качество и своевременность поставки',
    },
];

function Advantages() {
    return (
        <section className="advantages">
            <h2 className="advantages__title">Почему выбирают нас?</h2>
            <div className="advantages__container">
                {cardsData.map((card) => (
                    <div key={card.id} className="advantages__card">
                        <img
                            src={card.imgPath}
                            alt={card.title}
                            className="advantages__card-icon"
                        />
                        <p className="advantages__card-title">{card.title}</p>
                        <p className="advantages__card-text">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Advantages;
