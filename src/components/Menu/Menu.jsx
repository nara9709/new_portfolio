import React from 'react';
import styles from './Menu.module.css';
import { ReactComponent as Close } from '../../svgs/close.svg';
import { ReactComponent as Git } from '../../svgs/git.svg';
import { ReactComponent as Linkedin } from '../../svgs/linkedin.svg';
import { ReactComponent as Blog } from '../../svgs/blog.svg';
import { Link } from 'react-router-dom';

function Menu({ toggleMenu }) {
  return (
    <div className={styles.menuBox}>
      <span className={styles.close}>
        <Close onClick={toggleMenu} width="80" height="80" />
      </span>

      <ul className={styles.showList}>
        <Link to={'projects'}>
          <li onClick={toggleMenu}>Projects</li>
        </Link>

        <Link to={'about'}>
          <li onClick={toggleMenu}>About Nara</li>
        </Link>

        <Link to={'contact'}>
          <li onClick={toggleMenu}>Contact</li>
        </Link>

        <ul className={styles.linkList}>
          <li>
            <a
              href="https://github.com/nara9709"
              target="_blank"
              rel="noreferrer"
            >
              <Git width="50" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nara-lee-05ba8a15a/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin width="50" height="50" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@worldkr19"
              target="_blank"
              rel="noreferrer"
            >
              <Blog width="50" height="50" />
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Menu;
