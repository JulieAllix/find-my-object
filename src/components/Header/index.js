import React from 'react';

import logo from '../../assets/images/stockoss.png';

import HeaderStyled from './HeaderStyled';

import { render } from '@testing-library/react';

class Header extends React.Component {

  
  render() {
    return (
      <HeaderStyled>
        <img
          src={logo}
          alt="Le logo de Stockoss"
          className="logo"
        />
        <div className="title-container">
          Où est mon objet ?
        </div>
        <div className="instructions-container">
          <p className="instructions-paragraph">Trouvez l'emplacement d'un objet dans l'entrepôt en temps réel !</p> 
          <p className="instructions-paragraph">Saisissez l'identifiant (cinq caractères) de l'objet que vous cherchez dans la barre de recherche ci-dessous. Son emplacement apparaîtra sur la carte de l'entrepôt.</p>
        </div>
      </HeaderStyled>
    );
  }
}

export default Header;