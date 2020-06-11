import React from 'react';
import classNames from 'classnames';

import ShelfStyled from './ShelfStyled';

class Shelf extends React.Component {
  render() {
    const shelfName = this.props.letter + this.props.number;
    if (shelfName == this.props.highlightedShelf){
      return (
        <ShelfStyled>
          <div className={classNames({
            shelf: true,
            highlighted: true,
          })}
          >
            <p className="shelf-name">
              {this.props.letter}{this.props.number}
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
              {this.props.letter}{this.props.number}
            </p>
          </div>
        </ShelfStyled>
      );
    }

  }
}

export default Shelf;