import React from 'react';

import AppStyled from './AppStyled';

import { render } from '@testing-library/react';

class App extends React.Component {

  
  render() {
    return (
      <AppStyled>
        Test
      </AppStyled>
    );
  }
}

export default App;