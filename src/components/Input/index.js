import React from 'react';

import InputStyled from './InputStyled';
import api from '../../assets/StockossTest.js';

const Input = ({ changeFieldValue, searchValue, savePosition }) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue(evt.target.value);

    if (evt.target.value.length === 5) {
      console.log('Code valide !');
      let id = evt.target.value;
      const result = api(id).position;
      savePosition(result);
    } else {
      console.log('Le code doit contenir 5 caractères !');
      savePosition("");
    }
  };

  return (
    <InputStyled>
      <form className="form">
        <input 
          type="text"
          name="identifiant"
          autocomplete="off"
          required
          className="search-bar-input"
          onChange={handleChange}
          value={searchValue}
        />
        <label for="identifiant" className="label-name">
          <span className="content-name">Identifiant</span>
        </label>
      </form>
    </InputStyled>
  );
};

export default Input;