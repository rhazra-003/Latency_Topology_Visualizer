import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { latLngToSphereCoords } from "@/lib/geoUtils";
import { exchangeServers } from "@/lib/exchangeData";

interface Props {
  fromId: string;
  toId: string;
  latency: number;
}

export default function LatencyLine({ fromId, toId, latency }: Props) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + 0.2 * Math.sin(clock.elapsedTime * 3);
      ref.current.scale.set(scale, scale, scale);
    }
  });

  const from = exchangeServers.find((s) => s.id === fromId);
  const to = exchangeServers.find((s) => s.id === toId);
  if (!from || !to) return null;

  const start = latLngToSphereCoords(from.coordinates[0], from.coordinates[1]);
  const end = latLngToSphereCoords(to.coordinates[0], to.coordinates[1]);

  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const curve = new THREE.CatmullRomCurve3(points);

  const color =
    latency < 100 ? "green" : latency < 200 ? "yellow" : "red";

  const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.01, 8, false);

  return (
    <mesh geometry={tubeGeometry} ref={ref}>
      <meshBasicMaterial color={color} />
    </mesh>
  );
}