import React from 'react';

import AppStyled from './AppStyled';

import { render } from '@testing-library/react';

class App extends React.Component {

  
  render() {
    return (
      <AppStyled>
        Coucou
      </AppStyled>
    );
  }
}

export default App;