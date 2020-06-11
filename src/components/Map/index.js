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
        <div className="shelves">
          <div className="shelves-row">
            <div className="shelf">
              A0
            </div>
            <div className="shelf">
              A1
            </div>
            <div className="shelf">
              A2
            </div>
            <div className="shelf">
              A3
            </div>
            <div className="shelf">
              A4
            </div>
            <div className="shelf">
              A5
            </div>
          </div>
          <div className="shelves-row">
            <div className="shelf">
              A0
            </div>
            <div className="shelf">
              A1
            </div>
            <div className="shelf">
              A2
            </div>
            <div className="shelf">
              A3
            </div>
            <div className="shelf">
              A4
            </div>
            <div className="shelf">
              A5
            </div>
          </div>
          <div className="shelves-row">
            <div className="shelf">
              A0
            </div>
            <div className="shelf">
              A1
            </div>
            <div className="shelf">
              A2
            </div>
            <div className="shelf">
              A3
            </div>
            <div className="shelf">
              A4
            </div>
            <div className="shelf">
              A5
            </div>
          </div>
          <div className="shelves-row">
            <div className="shelf">
              A0
            </div>
            <div className="shelf">
              A1
            </div>
            <div className="shelf">
              A2
            </div>
            <div className="shelf">
              A3
            </div>
            <div className="shelf">
              A4
            </div>
            <div className="shelf">
              A5
            </div>
          </div>
          <div className="shelves-row">
            <div className="shelf">
              A0
            </div>
            <div className="shelf">
              A1
            </div>
            <div className="shelf">
              A2
            </div>
            <div className="shelf">
              A3
            </div>
            <div className="shelf">
              A4
            </div>
            <div className="shelf">
              A5
            </div>
          </div>
        </div>
        </div>
      </MapStyled>
    );
  }
}

export default Map;