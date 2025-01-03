import './About.css';
function About() {
    return (
        <section className="about">
            <h2 className="about__title">О нас</h2>
            <div className="about__container">
                <div className="about__img"></div>
                {/* <img className="about__img" src={imgAbout} alt="промальп альпинист алматы" /> */}
                <article className="about__article">
                    Мы предлагаем широкий спектр услуг для решения самых сложных задач на высоте.{' '}
                    <br />
                    <br />
                    Промальп Алматы — лидер в области выполнения высотных работ методом
                    промышленного альпинизма. <br />
                    <br />
                    Наши специалисты успешно выполняют:
                    <ul>
                        <li>Ремонтно-строительные работы</li>
                        <li>Монтажные работы</li>
                        <li> Клининговые услуги на высоте</li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default About;
