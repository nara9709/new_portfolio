import React, { useState } from 'react';
import styles from './Header.module.css';
import { ReactComponent as MenuIcon } from '../../svgs/menu.svg';
import { ReactComponent as Logo } from '../../svgs/logo.svg';
import { ReactComponent as Click } from '../../svgs/click.svg';
import Menu from '../Menu/Menu';

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
      <Menu menuVisibility={isMenuOpen} toggleMenu={toggleMenu} />
      <span>
        <Logo width="130" height="130" />
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
    </nav>
  );
}

export default Header;
