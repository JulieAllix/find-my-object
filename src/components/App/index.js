import React from 'react';

import Header from '../Header';
import Input from '../../containers/Input';
import Map from '../../containers/Map';

import AppStyled from './AppStyled';

const App = () => {
  return (
    <AppStyled>
      <Header />
      <Input />
      <Map />
    </AppStyled>
  );
};

export default App;