import React from 'react';
import styles from './About.module.css';
import { ReactComponent as Ts } from '../../svgs/ts.svg';
import { ReactComponent as Js } from '../../svgs/js.svg';
import { ReactComponent as Reactlogo } from '../../svgs/react.svg';
import { ReactComponent as Htmllogo } from '../../svgs/html.svg';
import { ReactComponent as Css } from '../../svgs/css.svg';
import { ReactComponent as Mongodb } from '../../svgs/mongoDB.svg';
import { ReactComponent as Firebase } from '../../svgs/firebase.svg';
import { ReactComponent as Xd } from '../../svgs/xd.svg';
import { ReactComponent as Photoshop } from '../../svgs/photoshop.svg';
import { ReactComponent as Vscode } from '../../svgs/vscode.svg';
import { ReactComponent as Git } from '../../svgs/git.svg';

function About(props) {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>About Me</h1>
      <div className={styles.profile}>
        <span>
          <p>
            Hello! I'm Nara lee🤗 <br /> Thanks for visiting my website! <br />
            <br />I graduated from Fanshawe College of Internet application and
            Web development in London, Ontario, Canada.
          </p>

          <p>
            Other than coding, I spend most of my free time playing online games
            or video games. Especially, I fall in love with Final Fantasy XIV
            these days!🤩 <br /> <br />
            I've also been trying to read about algorithms, data structure, and
            refactoring so feel free to contact me with programming-related
            books.
          </p>
        </span>
        <img
          className={styles.profileimg}
          src="https://res.cloudinary.com/nara9709/image/upload/v1675041691/profile_e6qskv.png"
          alt="profile"
        />
      </div>

      <div className={styles.toolkit}>
        <h2>My Skills</h2>
        <ul className={styles.list}>
          <li>
            <div className={styles.skill}>
              <Ts width={60} height={60} />
              <span>TypeScript</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Reactlogo width={60} height={60} />
              <span>React.js</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Js width={60} height={60} />
              <span>JavaScript</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Htmllogo width={60} height={60} />
              <span>HTML5</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Css width={60} height={60} />
              <span>PostCSS</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Mongodb width={60} height={60} />
              <span>MongoDB</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Firebase width={60} height={60} />
              <span>Firebase</span>
            </div>
          </li>
        </ul>

        <h2>Tools</h2>

        <ul className={styles.list}>
          <li>
            <div className={styles.skill}>
              <Xd width={60} height={60} />
              <span>AdobeXD</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Photoshop width={60} height={60} />
              <span>Adobe PhotoShop</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Git width={60} height={60} />
              <span>GitHub</span>
            </div>
          </li>
          <li>
            <div className={styles.skill}>
              <Vscode width={60} height={60} />
              <span>VSCode</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
