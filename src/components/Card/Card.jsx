import './Card.css';

function Card({ imgPath, title, aosAnimation }) {
    return (
        <div className="cards__card" data-aos={aosAnimation}>
            <img className="cards__card-img" src={imgPath} alt={title} />
            <p className="cards__card-name">{title}</p>
        </div>
    );
}

export default Card;
