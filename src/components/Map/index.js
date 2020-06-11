import React from 'react';

import MapStyled from './MapStyled';

import { render } from '@testing-library/react';

class Map extends React.Component {

  
  render() {
    return (
      <MapStyled>
        Map
      </MapStyled>
    );
  }
}

export default Map;