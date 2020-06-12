import React from 'react';
import classNames from 'classnames';

import ShelfStyled from './ShelfStyled';

const Shelf = ({letter, number, highlightedShelf}) => {
  const shelfName = letter + number;
  if (shelfName === highlightedShelf){
    return (
      <ShelfStyled>
        <div className={classNames({
          shelf: true,
          highlighted: true,
        })}
        >
          <p className="shelf-name">
            {letter}{number}
          </p>
        </div>
      </ShelfStyled>
    );
  } else {
    return (
      <ShelfStyled>
        <div className={classNames({
          shelf: true,
          highlighted: false,
        })}
        >
          <p className="shelf-name">
            {letter}{number}
          </p>
        </div>
      </ShelfStyled>
    );
  }
};


export default Shelf;