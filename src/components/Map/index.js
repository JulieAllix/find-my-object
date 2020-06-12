import React from 'react';

import Shelf from '../Shelf';

import MapStyled from './MapStyled';
import warehouse_sm from '../../assets/images/warehouse-sm_1x.jpg';
import warehouse_md from '../../assets/images/warehouse-md_1x.jpg';
import warehouse_lg from '../../assets/images/warehouse-lg_1x.jpg';

const letters = ['a', 'b', 'c', 'd', 'e'];
const numbers = ['0', '1', '2', '3', '4', '5'];
const images = warehouse_sm + ' 600w,' + warehouse_md + ' 900w,' + warehouse_lg + ' 1400w';

const Map = ({ highlightedShelf }) => {
  return (
    <MapStyled>
      <div className="map-container">
      {/* I use the picture element with srcSet in order to display different sized img according to screen's width  */}
        <picture>
          <img   
            className="warehouse" 
            srcSet={images}
            src={warehouse_lg}   
            type="image/jpeg"   
            alt="Le plan de l'entrepôt"
          />
        </picture>
        <div className="shelves">
        {/* I map on the letter and number objects in order to create the shelves names*/}
          {letters.map((letter) => (
            <div className="shelves-row" key={letter}>
              {numbers.map((number) => (
                <Shelf 
                  key={number}
                  letter={letter}
                  number={number}
                  highlightedShelf={highlightedShelf}
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