import React, { useState } from 'react';
import './../styles/NotaryCard.css';

const NotaryCard = ({ notary }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="notary-card">
      <img src={notary.img} alt={notary.name} />
      <p>{notary.name}</p>
      <button onClick={handleShowPopup}>Подробнее</button>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>{notary.name}</h3>
            <img src={notary.img} alt={notary.name} />
            <p>Опыт работы: {notary.experience}</p>
            <p>Телефон: {notary['phone-number']}</p>
            <div className="action-buttons">
              <button>Редактировать</button>
              <button>Удалить</button>
            </div>
            <button className="close-button" onClick={handleClosePopup}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotaryCard;
