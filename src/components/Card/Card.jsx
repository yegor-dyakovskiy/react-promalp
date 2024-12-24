import './Card.css';

function Card({ imgPath, title }) {
    return (
        <div className="cards__card">
            <img className="cards__card-img" src={imgPath} alt={title} />
            <p className="cards__card-name">{title}</p>
        </div>
    );
}

export default Card;
