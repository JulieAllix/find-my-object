import React from 'react';

import Shelf from '../Shelf';

import MapStyled from './MapStyled';
import warehouse from '../../assets/images/warehouse.jpg';

const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = ['0', '1', '2', '3', '4', '5'];

const Map = () => {
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
                  highlightedShelf="a4"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </MapStyled>
  );
};


export default Map;