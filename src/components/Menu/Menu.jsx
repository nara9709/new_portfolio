import React from 'react';
import styles from './Menu.module.css';
import { ReactComponent as Close } from '../../svgs/close.svg';
import { ReactComponent as Git } from '../../svgs/git.svg';
import { ReactComponent as Linkedin } from '../../svgs/linkedin.svg';
import { ReactComponent as Blog } from '../../svgs/blog.svg';

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

      <ul
        className={menuVisibility ? `${styles.showList}` : `${styles.hideList}`}
      >
        <li>Projects</li>
        <li>About Nara</li>

        <li>Contact</li>

        <ul className={styles.linkList}>
          <li>
            <Git width="50" height="50" />
          </li>
          <li>
            <Linkedin width="50" height="50" />
          </li>
          <li>
            <Blog width="50" height="50" />
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Menu;
