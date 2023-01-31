import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Avatar.module.css';
import ModelAni from './Model_ani';
import Logo from '../../svgs/logo.svg';

function Avatar() {
  const [isRendered, setRendered] = useState(false);

  return (
    <div className={styles.avatarContainer}>
      {!isRendered && (
        <div className={styles.loadingDiv}>
          <img src={Logo} alt="logo" className={styles.logo} />
        </div>
      )}
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 20 }}
        style={{
          background: 'transparent',
          height: '100vh',
          zIndex: 3,
        }}
        onCreated={({}) => {
          setRendered(true);
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <ModelAni position={[0.025, -0.9, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default Avatar;
