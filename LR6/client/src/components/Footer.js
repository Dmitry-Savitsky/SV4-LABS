import React from 'react';
import './../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="contact-info">
                <p>Телефон: +375297894532</p>
                <p>Почта: example@example.com</p>
                <p>Адрес: ул. Примерная, д. 123, г. Примерный</p>
            </div>
            <div className="rights">
                <p>© 2024 Все права защищены</p>
            </div>
            <div className="social-links">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://twitter.com/">Twitter</a>
                <a href="https://www.instagram.com/">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;
