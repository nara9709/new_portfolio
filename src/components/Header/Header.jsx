import React, { useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as MenuIcon } from '../../svgs/menu.svg';
import Logo from '../../svgs/logo.svg';
import { ReactComponent as Click } from '../../svgs/click.svg';
import Menu from '../Menu/Menu';
import { slideInLeft } from 'react-animations';

import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const slideinleft = keyframes`${slideInLeft}`;
const SlideLeft = styled.div`
  animation: 2s ${slideinleft};
`;

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <nav className={styles.nav}>
      <span>
        <Link to={'/'}>
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
      </span>
      <span>
        <Click width="60" height="60" className={styles.click} />
        <MenuIcon
          onClick={toggleMenu}
          className={styles.menu}
          width="100"
          height="100"
        ></MenuIcon>
      </span>
      {isMenuOpen && (
        <SlideLeft className={styles.slideinDiv}>
          <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </SlideLeft>
      )}
    </nav>
  );
}

export default Header;
