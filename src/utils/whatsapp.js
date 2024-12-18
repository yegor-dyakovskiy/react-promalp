function callMe() {
    const phoneNumber = '7072332236';
    const message =
        'Здравствуйте! Я интересуюсь услугами промальпа, и хотел бы задать несколько вопросов.';
    const encodedMessage = encodeURIComponent(message); // Кодируем сообщение
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return whatsappLink;
}

export default callMe;
