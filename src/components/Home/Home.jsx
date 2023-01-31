import Avatar from '../Avatar/Avatar';
import React from 'react';
import styles from './Home.module.css';
import AnimatedText from 'react-animated-text-content';
import { ReactComponent as Frame } from '../../svgs/frame.svg';
function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.nameBox}>
        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 2,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.05}
          duration={2.5}
          tag="h2"
          className={styles.title}
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="5%"
        >
          Frontend Developer
        </AnimatedText>

        <AnimatedText
          type="words" // animate words or chars
          animation={{
            x: '200px',
            y: '-20px',
            scale: 2,
            ease: 'ease-in-out',
          }}
          animationType="float"
          interval={0.1}
          duration={3.5}
          tag="h1"
          className={styles.name}
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="5%"
        >
          Nare Lee
        </AnimatedText>
      </div>
      <div className={styles.svgsBox}>
        <Frame className={styles.frameSvg} />
      </div>
      <Avatar></Avatar>
    </section>
  );
}

export default Home;
