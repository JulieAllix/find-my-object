import React from 'react';

import Header from '../Header';
import Input from '../Input';

import AppStyled from './AppStyled';

import { render } from '@testing-library/react';

class App extends React.Component {

  
  render() {
    return (
      <AppStyled>
        <Header />
        <Input />
      </AppStyled>
    );
  }
}

export default App;