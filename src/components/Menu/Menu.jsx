import React from 'react';
import styles from './Menu.module.css';
import { ReactComponent as Close } from '../../svgs/close.svg';

function Menu({ menuVisibility, toggleMenu }) {
  return (
    <div
      className={
        menuVisibility ? `${styles.menuBoxShow}` : `${styles.menuBoxHide}`
      }
    >
      <span className={styles.close}>
        <Close onClick={toggleMenu} width="80" height="80" />
      </span>

      <ul className={styles.menuList}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Menu;
