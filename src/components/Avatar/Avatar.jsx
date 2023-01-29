import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import ModelAni from './Model_ani';

function Avatar() {
  return (
    <div>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          background: 'transparent',
          height: '100vh',
          zIndex: 3,
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
