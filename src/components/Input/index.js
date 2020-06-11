import React from 'react';

import InputStyled from './InputStyled';

import { render } from '@testing-library/react';

class Input extends React.Component {

  
  render() {
    return (
      <InputStyled>
        Input
      </InputStyled>
    );
  }
}

export default Input;