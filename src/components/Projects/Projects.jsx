import React, { useRef, useState } from 'react';
import styles from './Projects.module.css';

function Projects() {
  const [showSkin, setSkin] = useState(false);
  const [showJournal, setJournal] = useState(false);
  const [showGame, setGame] = useState(false);
  const [showSushi, setSushi] = useState(false);

  return (
    <section className={styles.section}>
      <h1>Projects</h1>
      <div>
        <ul>
          <li
            className={styles.skinbody}
            onMouseEnter={() => setSkin(true)}
            onMouseLeave={() => setSkin(false)}
          >
            <img
              src="https://res.cloudinary.com/nara9709/image/upload/v1675057514/1_csgh5i.png"
              alt="skinbody"
            />
            {showSkin && (
              <div className={styles.modal}>
                <span
                  className={styles.closeIcon}
                  onClick={() => {
                    setSkin(false);
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <div className={styles.desBox}>
                  <h3>
                    Ski N Body <br /> e-commerce web site
                  </h3>
                  <p>
                    An E-commerce website where users can explore products,
                    check reviews, save items to their cart, and write reviews✍🏻{' '}
                    <br />
                    Admin user can upload their item and control their products!
                  </p>
                  <div className={styles.stackBox}>
                    <span className={styles.stack}>
                      <ion-icon name="logo-firebase"></ion-icon> Firebase
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-react"></ion-icon> React
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-css3"></ion-icon> PostCSS
                    </span>
                  </div>
                  <div>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://ski-n-body.netlify.app/"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://github.com/nara9709/Smart-shop"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className={styles.skinbody}
            onMouseEnter={() => setJournal(true)}
            onMouseLeave={() => setJournal(false)}
          >
            <img
              src="https://res.cloudinary.com/nara9709/image/upload/v1675057514/4_xlviag.png"
              alt="skinbody"
            />
            {showJournal && (
              <div className={styles.modal}>
                <span
                  className={styles.closeIcon}
                  onClick={() => {
                    setJournal(false);
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <div className={styles.desBox}>
                  <h3>
                    Emotion Journal <br /> Web Application
                  </h3>
                  <p>
                    A journal web application where user can write their
                    journals with an image and cute emotional emojies📔
                    <br />
                    All journal data save to the Firebase database so user can
                    read their journals wherever!
                  </p>
                  <div className={styles.stackBox}>
                    <span className={styles.stack}>
                      <ion-icon name="logo-firebase"></ion-icon> Firebase
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-react"></ion-icon> React
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-css3"></ion-icon> PostCSS
                    </span>
                  </div>
                  <div>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://emotionjournal.netlify.app/"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://github.com/nara9709/emotion_journal"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className={styles.skinbody}
            onMouseEnter={() => setGame(true)}
            onMouseLeave={() => setGame(false)}
          >
            <img
              src="https://res.cloudinary.com/nara9709/image/upload/v1675057514/3_ssrf3g.png"
              alt="skinbody"
            />
            {showGame && (
              <div className={styles.modal}>
                <span
                  className={styles.closeIcon}
                  onClick={() => {
                    setGame(false);
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <div className={styles.desBox}>
                  <h3>
                    🐰Find Carrots Game🥕 <br />
                  </h3>
                  <p>
                    A JavaScript mini-game application
                    <br /> <br />
                    If the user harvests all the carrots within the time limit,
                    he or she wins!
                  </p>
                  <div className={styles.stackBox}>
                    <span className={styles.stack}>
                      <ion-icon name="logo-html5"></ion-icon> HTML
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-css3"></ion-icon> CSS
                    </span>
                    <span className={styles.stack}>
                      <span className={styles.stack}>
                        <ion-icon name="logo-javascript"></ion-icon> JavaScript
                      </span>
                    </span>
                  </div>
                  <div>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://nara9709.github.io/Find_carrot_game/"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://github.com/nara9709/Find_carrot_game"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            className={styles.skinbody}
            onMouseEnter={() => setSushi(true)}
            onMouseLeave={() => setSushi(false)}
          >
            <img
              src="https://res.cloudinary.com/nara9709/image/upload/v1675057515/2_iff2lc.png"
              alt="skinbody"
            />
            {showSushi && (
              <div className={styles.modal}>
                <span
                  className={styles.closeIcon}
                  onClick={() => {
                    setSushi(false);
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
                <div className={styles.desBox}>
                  <h3>
                    Sushi Restaurant Website <br />
                  </h3>
                  <p>
                    A JavaScript Responsive sushi restaurant web <br />
                    <br /> Luxurious UI design and mobile-first design to
                    enhance user experience
                    <br />
                  </p>
                  <div className={styles.stackBox}>
                    <span className={styles.stack}>
                      <ion-icon name="logo-html5"></ion-icon> HTML
                    </span>
                    <span className={styles.stack}>
                      <ion-icon name="logo-css3"></ion-icon> CSS
                    </span>
                    <span className={styles.stack}>
                      <span className={styles.stack}>
                        <ion-icon name="logo-javascript"></ion-icon> JavaScript
                      </span>
                    </span>
                  </div>
                  <div>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://narasushi.netlify.app/"
                        rel="noreferrer"
                      >
                        View Live
                      </a>
                    </button>
                    <button className={styles.button}>
                      <a
                        target="_blank"
                        href="https://github.com/nara9709/sushi_restaurant_web"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
