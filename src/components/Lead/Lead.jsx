import { useState } from 'react';
import './Lead.css';

function Lead() {
    // Состояния для значений формы
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    // Состояния для ошибок
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // Обработчик изменения имени
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(''); // Очистить ошибку при изменении
    };

    // Обработчик изменения телефона
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setPhoneError(''); // Очистить ошибку при изменении
    };

    // Функция для проверки валидации
    const validateForm = () => {
        let valid = true;

        // Валидация имени
        if (!name) {
            setNameError('Пожалуйста, введите ваше имя');
            valid = false;
        }

        // Убираем пробелы перед валидацией
        const phoneWithoutSpaces = phone.replace(/\s+/g, '');

        // Валидация телефона (принимаем только цифры, возможный "+" в начале и пробелы)
        const phoneRegex = /^[+]?\d*$/;
        if (!phoneWithoutSpaces) {
            setPhoneError('Пожалуйста, введите ваш телефон');
            valid = false;
        } else if (!phoneRegex.test(phoneWithoutSpaces)) {
            setPhoneError('Пожалуйста, введите ваш телефон');
            valid = false;
        }

        return valid;
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = {
                name: name,
                phone: phone,
            };

            fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.message);
                    if (data.message === 'Форма успешно отправлена!') {
                        setName('');
                        setPhone('');
                        setNameError('');
                        setPhoneError('');
                    }
                })
                .catch((error) => {
                    console.error('Ошибка:', error);
                });
        }
    };

    return (
        <section className="lead">
            <h2 className="lead__title">Получите бесплатную консультацию</h2>
            <form onSubmit={handleSubmit} className="lead__form">
                <input
                    placeholder="Ваше имя"
                    className={`lead__form-input ${nameError ? 'lead__form-input--error' : ''}`}
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />

                <input
                    placeholder="Телефон"
                    className={`lead__form-input ${phoneError ? 'lead__form-input--error' : ''}`}
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <input className="lead__form-button" type="submit" value="Заказать звонок" />
            </form>
        </section>
    );
}

export default Lead;
