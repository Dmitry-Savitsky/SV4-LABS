import React, { useState } from 'react';
import './../styles/Menu.css';

const Menu = ({ onSubmit, onCancel, onSubmitSuccess, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onSubmitSuccess(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="menu-container">
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Изображение URL:
          <input
            type="text"
            name="img"
            value={formData.img || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Опыт:
          <input
            type="text"
            name="experience"
            value={formData.experience || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Телефон:
          <input
            type="text"
            name="phone-number"
            value={formData['phone-number'] || ''}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </form>
    </div>
  );
};

export default Menu;
