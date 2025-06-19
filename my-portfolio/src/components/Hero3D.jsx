import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function CreatorStudioModel() {
  // Use the Google Drive direct download link:
  const { scene } = useGLTF("https://drive.google.com/uc?export=download&id=1FTSqwCThLiDVWesbsips2yXPQiEyoB6-");
  const ref = useRef();
  const { mouse } = useThree();

  // Set your desired initial skew here:
  const initialRotation = { x: 0.1, y: -0.7, z: 0 };

  useFrame((state) => {
    if (ref.current) {
      // Only add a small offset to the initial skew based on mouse
      const targetY = initialRotation.y + mouse.x * 0.3;
      const targetX = initialRotation.x + mouse.y * 0.1;

      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.08;
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.08;

      // Bobbing effect
      ref.current.position.y = -0.2 + Math.sin(state.clock.getElapsedTime() * 1.2) * 0.07;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={[0.025, 0.025, 0.025]} // slightly smaller
      position={[0, -0.2, 0]}
      // The initial rotation is set in useFrame, so you don't need rotation prop here
    />
  );
}

export default function Hero3D() {
  return (
    <section className="relative w-full h-screen flex flex-row items-center justify-between overflow-hidden px-12">
      {/* Left: 3D Model */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <Canvas
          className="w-full h-4/5"
          camera={{ position: [0, 2, 14], fov: 50 }} // z: 14 instead of 10
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <CreatorStudioModel />
        </Canvas>
      </div>
      {/* Right: Text */}
      <div className="w-1/2 flex flex-col items-start justify-center z-10">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Hi, I'm Daniel Scholtz
        </h1>
        <p className="text-xl text-gray-200 mt-4 drop-shadow-lg">
          Software Engineer & 3D Web Enthusiast
        </p>
      </div>
    </section>
  );
}