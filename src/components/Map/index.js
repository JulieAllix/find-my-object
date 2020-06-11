import React from 'react';

import Shelf from '../Shelf';

import MapStyled from './MapStyled';
import warehouse from '../../assets/images/warehouse.jpg';

const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = ['0', '1', '2', '3', '4', '5'];
const a1 = false;
const a2 = true;
const a3 = false;
const a4 = false;
const a5 = false;
const b1 = false;
const b2 = false;
const b3 = false;
const b4 = false;
const b5 = false;
const c1 = false;
const c2 = false;
const c3 = false;
const c4 = false;
const c5 = false;
const d1 = false;
const d2 = false;
const d3 = false;
const d4 = false;
const d5 = false;
const e1 = false;
const e2 = false;
const e3 = false;
const e4 = false;
const e5 = false;

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
                  <Shelf 
                    key={number}
                    letter={letter}
                    number={number}
                  />
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