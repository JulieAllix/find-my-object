import React from 'react';

import logo from '../../assets/images/stockoss.png';

import HeaderStyled from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <img
        src={logo}
        alt="Le logo de Stockoss"
        className="logo"
      />
      <div className="warehouse">
        <div className="title-container">
          Où est mon objet ?
        </div>
      </div>
      <div className="instructions-container">
        <p className="subtitle">Trouvez l'emplacement d'un objet dans l'entrepôt en temps réel !</p> 
        <p className="instructions-paragraph">Saisissez l'identifiant <em>(cinq caractères)</em> de l'objet que vous cherchez dans la barre de recherche ci-dessous. Son emplacement apparaîtra sur la carte de l'entrepôt.</p>
      </div>
    </HeaderStyled>
  );
};


export default Header;