import React from 'react';
import AnimatedText from 'react-animated-text-content';
import styles from './About.module.css';
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
        <h2>My Toolkit</h2>
        <div className={styles.toolBox}>
          <p>
            <span className={styles.js}>JavaScript</span>
            <span className={styles.react}>React.js</span>
          </p>
          <p>
            <span className={styles.html}>HTML</span>
            <span className={styles.css}>CSS</span>
            <span className={styles.postcss}>PostCSS</span>
          </p>
          <p>
            <span className={styles.xd}>AdobeXD</span>
            <span className={styles.photoshop}>Photoshop</span>
            <span className={styles.canva}>Canva</span>
          </p>
          <p>
            <span className={styles.git}>Git</span>
            <span className={styles.vs}>Visual Studio Code</span>
          </p>
          <p>
            <span className={styles.cloudinary}>Cloudinary</span>
            <span className={styles.firebase}>Firebase</span>
          </p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default About;
