"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";
import { exchangeServers } from "@/lib/exchangeData";
import { latLngToSphereCoords } from "@/lib/geoUtils";
import { useState, useEffect } from "react";
import { generateMockLatency, LatencyLink } from "@/lib/latencyData";
import LatencyLine from "./LatencyLine";
import RealTimeLatency from "./RealTimeLatency"; // ✅ Import here

export default function ThreeScene() {
  const [latencyLinks, setLatencyLinks] = useState<LatencyLink[]>([]);

  useEffect(() => {
    setLatencyLinks(generateMockLatency());
    const interval = setInterval(() => {
      setLatencyLinks(generateMockLatency());
    }, 5000); // refresh every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />

        <Globe />
        <ServerMarkers />
        {latencyLinks.map((link) => (
          <LatencyLine
            key={link.id}
            fromId={link.from}
            toId={link.to}
            latency={link.latencyMs}
          />
        ))}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.3}
        />
      </Canvas>

      <div className="absolute top-4 left-4 z-10">
        <RealTimeLatency location="global" />
      </div>
    </div>
  );
}

function Globe() {
  const texture = useTexture("/earthmap.jpg");
  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function ServerMarkers() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {exchangeServers.map((server) => {
        const [x, y, z] = latLngToSphereCoords(
          server.coordinates[0],
          server.coordinates[1]
        );

        const color =
          server.provider === "AWS"
            ? "orange"
            : server.provider === "GCP"
            ? "skyblue"
            : "green";

        return (
          <mesh
            key={server.id}
            position={[x, y, z]}
            onPointerOver={() => setHoveredId(server.id)}
            onPointerOut={() => setHoveredId(null)}
          >
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color={color} />

            {hoveredId === server.id && (
              <Html center distanceFactor={8}>
                <div className="bg-black/80 text-white p-2 rounded text-xs">
                  <div><b>{server.name}</b></div>
                  <div>{server.location}</div>
                  <div>{server.provider}</div>
                </div>
              </Html>
            )}
          </mesh>
        );
      })}
    </>
  );
}