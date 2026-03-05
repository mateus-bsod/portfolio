"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { useRef, useEffect, useState  } from "react";
import * as THREE from "three";

function Cube() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useTexture("/texture.jpg");

  useFrame(() => {
    meshRef.current.rotation.x += 0.009;
    meshRef.current.rotation.y += 0.009;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export function CubeScene() {
  return (
    <Canvas className="pointer-events-none" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Cube />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default CubeScene;