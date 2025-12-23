import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Text3D, Center } from "@react-three/drei";
import { Suspense } from "react";
import FloatingGeometry from "./FloatingGeometry";
import ParticleField from "./ParticleField";

const Scene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#22d3ee" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#a855f7" />

      {/* Particle field background */}
      <ParticleField />

      {/* Floating geometries */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <FloatingGeometry
          position={[-3, 1, -2]}
          geometry="icosahedron"
          color="#22d3ee"
          speed={0.8}
          scale={0.8}
        />
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <FloatingGeometry
          position={[3, -1, -1]}
          geometry="octahedron"
          color="#a855f7"
          speed={1.2}
          scale={0.6}
        />
      </Float>

      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.2}>
        <FloatingGeometry
          position={[-2, -2, 0]}
          geometry="torus"
          color="#06b6d4"
          speed={0.5}
          scale={0.5}
        />
      </Float>

      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
        <FloatingGeometry
          position={[2.5, 2, -3]}
          geometry="sphere"
          color="#8b5cf6"
          speed={0.7}
          scale={0.4}
        />
      </Float>

      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.1}>
        <FloatingGeometry
          position={[0, 0, -2]}
          geometry="icosahedron"
          color="#0ea5e9"
          speed={0.6}
          scale={1.2}
        />
      </Float>

      {/* Interactive controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2.5}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
