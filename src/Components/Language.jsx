import React, { useState } from 'react';

const languages = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Frances' },
  { value: 'it', label: 'Italiano' },
];

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className="language-container">
      <label className="language-label" htmlFor="language-select">
        <u>Seleccione el idioma:</u> <span>Icono Aquí</span>
      </label>
      <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
        {languages.map((language) => (
          <option
            key={language.value}
            value={language.value}
            className={selectedLanguage === language.value ? 'selected' : ''}
          >
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Language;
