import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: "box" | "sphere" | "torus" | "octahedron" | "icosahedron";
  color: string;
  speed?: number;
  scale?: number;
}

const FloatingGeometry = ({
  position,
  geometry,
  color,
  speed = 1,
  scale = 1,
}: FloatingGeometryProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003 * speed;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  const renderGeometry = () => {
    switch (geometry) {
      case "box":
        return <boxGeometry args={[1, 1, 1]} />;
      case "sphere":
        return <sphereGeometry args={[0.7, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.6, 0.25, 16, 50]} />;
      case "octahedron":
        return <octahedronGeometry args={[0.8]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[0.7]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.2}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

export default FloatingGeometry;
