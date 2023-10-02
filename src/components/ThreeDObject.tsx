// src/components/ThreeDObject.tsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const ThreeDObject: React.FC = () => {
  const meshRef = useRef<Mesh | null>(null); // Change the type to RefObject and initialize with null

  // Animation logic
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

export default ThreeDObject;
