import React from 'react';
import classNames from 'classnames';

import InputStyled from './InputStyled';

import api from '../../assets/StockossTest.js';

const Input = ({ 
  changeFieldValue, 
  searchValue, 
  savePosition, 
  opacityStatus, 
  changeOpacityStatus 
}) => {
  const handleChange = (evt) => {
    evt.preventDefault();
    changeFieldValue(evt.target.value);

    if (evt.target.value.length === 5) {
      changeOpacityStatus(false);
      let id = evt.target.value;
      const result = api(id).position;
      savePosition(result);
    } else if (evt.target.value.length > 5) {
      savePosition("");
      changeOpacityStatus(true);
    } else {
      changeOpacityStatus(false);
      savePosition("");
    };
    
  };

  return (
    <InputStyled>
      <form className="form">
        <input 
          type="text"
          name="identifiant"
          autoComplete="off"
          required
          className="search-bar-input"
          onChange={handleChange}
          value={searchValue}
        />
        <label htmlFor="identifiant" className="label-name">
          <span className="content-name">Identifiant</span>
        </label>
      </form>
      <div className="warning-container">
        <p className={classNames({
            warning: true,
            appear: opacityStatus,
          })}
        >
          Attention, vous avez saisi un trop grand nombre de caractères : l'identifiant doit contenir <em>5 caractères</em>, ni plus ni moins !
        </p>
      </div>
    </InputStyled>
  );
};

export default Input;