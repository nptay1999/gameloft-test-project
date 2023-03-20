import React from 'react';
import Logo from '../../assets/imgs/layout/Gameloft_Logo_Flat_White_Line-01.png';
import Menu from '../../assets/imgs/layout/menu-icon.svg';

function Header(): JSX.Element {
  return (
    <>
      <header className="header">
        <div className="header-container container-fuild">
          <img src={Logo} alt="Logo" className="header__logo" />
          <img src={Menu} alt="Menu" className="header__menu" />
        </div>
      </header>
      <div className="header-shadow" />
    </>
  );
}

export default Header;
