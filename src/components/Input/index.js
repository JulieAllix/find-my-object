import React from 'react';

import InputStyled from './InputStyled';

const Input = () => {
  return (
    <InputStyled>
      <form className="search-bar-form">
        <input 
          className="search-bar-input"
          placeHolder="ex: dq324"
          type="text"
          name="searchBar"
        />
      </form>
    </InputStyled>
  );
};

export default Input;