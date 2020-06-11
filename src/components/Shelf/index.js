import React from 'react';
import classNames from 'classnames';

import ShelfStyled from './ShelfStyled';

class Shelf extends React.Component {
  render() {
    return (
      <ShelfStyled>
        <div className={classNames({
          shelf: true,
        })}
        >
          <p className="shelf-name">
            {this.props.letter}{this.props.number}
          </p>
        </div>
      </ShelfStyled>
    );
  }
}

export default Shelf;