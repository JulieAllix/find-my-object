import React from 'react';

import InputStyled from './InputStyled';

class Input extends React.Component {

  
  render() {
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
  }
}

export default Input;