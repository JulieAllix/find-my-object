import React from 'react';

import InputStyled from './InputStyled';
import api from '../../assets/StockossTest.js';

const Input = ({ changeFieldValue, searchValue, savePosition }) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue(evt.target.value);
    if (searchValue.length === 4) {
      console.log('Code valide !');
      let id = evt.target.value;
      const result = api(id).position;
      console.log(result);
      savePosition(result);
    } else {
      console.log('Le code doit contenir 5 caractères !');
    }
  };
  return (
    <InputStyled>
      <form className="search-bar-form">
        <input 
          className="search-bar-input"
          placeholder="ex: dq324"
          type="text"
          onChange={handleChange}
          value={searchValue}
        />
      </form>
    </InputStyled>
  );
};

export default Input;