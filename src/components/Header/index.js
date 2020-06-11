import React from 'react';

import HeaderStyled from './HeaderStyled';

import { render } from '@testing-library/react';

class Header extends React.Component {

  
  render() {
    return (
      <HeaderStyled>
        Header
      </HeaderStyled>
    );
  }
}

export default Header;