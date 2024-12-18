import './Callme.css';
import whatsapp from '../../assets/svg/whatsapp.svg';
import callMe from '../../utils/whatsapp';

function Callme() {
    return (
        <a
            className="callme"
            href={callMe()} // Замените номер на ваш
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={whatsapp} alt="WhatsApp icon" />
        </a>
    );
}

export default Callme;
