import React, { useState } from 'react';
import './../styles/Notaries.css';
import notariesData from '../json/Notaries.json'; // Импортируем данные
import NotaryCard from '../components/NotaryCard'; // Импортируем компонент NotaryCard
import Menu from '../components/Menu'; // Импортируем компонент Menu

const Notaries = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleSubmit = (formData) => {
        // Здесь можно обработать данные формы
        console.log('Form data:', formData);
        // Закрываем меню после отправки данных
        setShowMenu(false);
    };

    const handleCancel = () => {
        setShowMenu(false);
    };

    return (
        <div className="notaries-page-container">
            <div className='notaries-page-header'>
                <h1 className="title">Список нотариусов:</h1>
                <ul>
                    <li>
                        {/* Кнопка вызова меню */}
                        <button onClick={handleToggleMenu}> Добавить </button>
                        {/* Показываем меню, если showMenu === true */}
                        {showMenu && <Menu onSubmit={handleSubmit} onCancel={handleCancel} />}
                    </li>
                </ul>
            </div>

            {/* Тело страницы */}
            <div className='notaries-page-body'>
                {notariesData.map(notary => (
                    <NotaryCard key={notary.id} notary={notary} />
                ))}
            </div>
        </div>
    );
};

export default Notaries;
