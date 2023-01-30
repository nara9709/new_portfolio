import React, { useRef, useState } from 'react';
import styles from './Projects.module.css';

function Projects() {
  const [showSkin, setSkin] = useState(false);

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
              <div className={styles.skinModal}>
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
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
