import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useGLTF } from "@react-three/drei";

function AnimatedCharacter({ zoomed }) {
  const { scene } = useGLTF("/character.glb");
  const group = useRef();

  // === MODEL ROTATION (pose) ===
  const targetRotation = zoomed
    ? [0.55, 0.1, 0] // Flip Y for right side
    : [0, 0, 0];

  // === MODEL POSITION (move right) ===
  const targetPosition = [2, -0.5, 0]; // Move to right

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += (targetRotation[0] - group.current.rotation.x) * 0.08;
      group.current.rotation.y += (targetRotation[1] - group.current.rotation.y) * 0.08;
      group.current.rotation.z += (targetRotation[2] - group.current.rotation.z) * 0.08;
    }
  });

  return (
    <group ref={group} position={targetPosition}>
      <Float speed={1.5} rotationIntensity={zoomed ? 0 : 0.5} floatIntensity={0.5}>
        <primitive object={scene} scale={zoomed ? 15 : 5} />
      </Float>
    </group>
  );
}

function CameraController({ zoomed }) {
  // === CAMERA POSITION (move right) ===
  const startPos = { x: 2.5, y: 0.5, z: 6 };
  const endPos = { x: 2.5, y: 1.2, z: 2.1 };

  useFrame(({ camera }) => {
    const target = zoomed ? endPos : startPos;
    camera.position.x += (target.x - camera.position.x) * 0.08;
    camera.position.y += (target.y - camera.position.y) * 0.08;
    camera.position.z += (target.z - camera.position.z) * 0.08;
    camera.lookAt(2.2, 2.1, 0); // Focus on right
  });
  return null;
}

export default function AboutSection() {
  const [zoomed, setZoomed] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setZoomed(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 px-0 min-h-[40rem] flex flex-row-reverse items-center justify-start overflow-hidden"
      ref={sectionRef}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0.2, 6], fov: 60 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Environment preset="studio" />
          <Suspense fallback={null}>
            <AnimatedCharacter zoomed={zoomed} />
            <CameraController zoomed={zoomed} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-start text-left pl-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400">
          I'm a software engineer passionate about building interactive web experiences and 3D graphics using React and Three.js.
        </p>
      </div>
    </section>
  );
}