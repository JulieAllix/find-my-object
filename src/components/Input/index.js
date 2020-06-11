import React from 'react';

import InputStyled from './InputStyled';

const Input = ({ changeFieldValue, searchValue }) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue(evt.target.value);
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