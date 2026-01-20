/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';

import CardFront from '../assets/Discover.jpg';
import CardBack from '../assets/WAChannel.jpg';

import './Lanyard.css';

export default function Lanyard() {
  return (
    <div className="lanyard-wrapper">
      <Canvas camera={{ position: [0, 1.5, 11], fov: 35 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Environment preset="city" blur={0.5} />

        {/* Left Card */}
        <LanyardCard position={[-2, 1.5, 0]} frontTexture={CardFront} backTexture={CardBack} />

        {/* Right Card */}
        <LanyardCard position={[2, 1.5, 0]} frontTexture={CardBack} backTexture={CardFront} />

        {/* Lock manual rotation */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false} 
        />
      </Canvas>
    </div>
  );
}

function LanyardCard({ position, frontTexture, backTexture }) {
  const cardRef = useRef();
  const front = useTexture(frontTexture);
  const back = useTexture(backTexture);

  // Auto rotation
  useFrame((_, delta) => {
    if (cardRef.current) {
      cardRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={cardRef} position={[position[0], position[1], position[2]]}>
      {/* Thin box for 3D effect */}
      <boxGeometry args={[2, 2.8, 0.1]} />
      <meshPhysicalMaterial
        map={front}
        side={THREE.FrontSide}
        roughness={0.2}
        metalness={0.3}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}
