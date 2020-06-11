import React from 'react';

import MapStyled from './MapStyled';
import warehouse from '../../assets/images/warehouse.jpg';

const letters = ['A', 'B', 'C', 'D', 'E'];
const numbers = ['0', '1', '2', '3', '4', '5'];

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
          {/* I map on the letter and number objects in order to create the shelves names*/}
            {letters.map((letter) => (
              <div className="shelves-row">
                {numbers.map((number) => (
                <div className="shelf">
                  {letter}{number}
                </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </MapStyled>
    );
  }
}

export default Map;