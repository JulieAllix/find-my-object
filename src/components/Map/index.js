import React from 'react';

import MapStyled from './MapStyled';
import warehouse from '../../assets/images/warehouse.jpg';

class Map extends React.Component {

  
  render() {
    return (
      <MapStyled>
        <div className="map-container">
        <img
          src={warehouse}
          alt="Le plan de l'entrepôt"
          className="warehouse"
        />
        </div>
      </MapStyled>
    );
  }
}

export default Map;