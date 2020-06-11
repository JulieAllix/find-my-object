import React from 'react';

import Input from '../Input';

import AppStyled from './AppStyled';

import { render } from '@testing-library/react';

class App extends React.Component {

  
  render() {
    return (
      <AppStyled>
        <Input />
      </AppStyled>
    );
  }
}

export default App;