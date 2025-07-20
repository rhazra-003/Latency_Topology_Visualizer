"use client";

import { Mesh } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface GlowingEndpointProps {
  position: [number, number, number];
  color?: string;
}

export default function GlowingEndpoint({ position, color = "#00ffff" }: GlowingEndpointProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(clock.getElapsedTime() * 5) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[0.02, 16, 16]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  );
}