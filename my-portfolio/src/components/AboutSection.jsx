import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Environment, useGLTF } from "@react-three/drei";

function AnimatedCharacter({ zoomed }) {
  // Replace with your Google Drive direct link:
  const { scene } = useGLTF("https://drive.google.com/uc?export=download&id=1otNpoGaHrL51FoUlL-soUmg0X9cbCyy3");
  const group = useRef();

  const targetRotation = zoomed ? [0.55, 0.1, 0] : [0, 0, 0];
  const targetPosition = [2, -0.5, 0];

  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += (targetRotation[0] - group.current.rotation.x) * 0.03;
      group.current.rotation.y += (targetRotation[1] - group.current.rotation.y) * 0.03;
      group.current.rotation.z += (targetRotation[2] - group.current.rotation.z) * 0.03;
    }
  });

  return (
    <group ref={group} position={targetPosition}>
      <Float speed={0.5} rotationIntensity={zoomed ? 0 : 0.3} floatIntensity={0.4}>
        <primitive object={scene} scale={zoomed ? 15 : 5} />
      </Float>
    </group>
  );
}

function CameraController({ zoomed }) {
  const startPos = { x: 2.5, y: 0.5, z: 6 };
  const endPos = { x: 2.5, y: 1.2, z: 2.1 };

  useFrame(({ camera }) => {
    const target = zoomed ? endPos : startPos;
    camera.position.x += (target.x - camera.position.x) * 0.03;
    camera.position.y += (target.y - camera.position.y) * 0.03;
    camera.position.z += (target.z - camera.position.z) * 0.03;
    camera.lookAt(2.2, 2.1, 0);
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
      className="relative h-screen flex flex-row items-center justify-between px-16"
      ref={sectionRef}
    >
      {/* 3D Character */}
      <div className="w-1/2 flex justify-center items-center">
        {/* Your 3D model here */}
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
      </div>
      {/* About Me Text */}
      <div className="w-1/2 max-w-xl ml-12 z-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300">
          Hi, I'm Daniel Scholtz — a passionate software engineer with a strong foundation in building clean, scalable, and user-focused digital experiences. Whether it's designing interactive frontends, optimizing backend performance, or experimenting with 3D visuals and emerging tech, I love turning complex problems into thoughtful solutions.
          <br />
          <br />
          My journey began with a deep curiosity for how things work — from the inner mechanics of games to the logic behind websites. That curiosity eventually became a career path, and today, I get to blend creativity with code to build things that are not only functional, but meaningful.
          <br />
          <br />
          I’ve worked on a wide range of projects, from educational platforms and library systems to 3D-rendered interfaces and experimental web apps. I care about writing maintainable code, continuously learning, and staying up to date with modern technologies like React, Node.js, Tailwind, and Three.js.
          <br />
          <br />
          Beyond the code, I enjoy mentoring others, exploring the future of human-computer interaction, and contributing to collaborative environments where ideas evolve into innovation. I'm also currently diving deeper into federated learning and cybersecurity, particularly how AI can help defend critical systems against advanced threats.
          <br />
          <br />
          This site is a reflection of who I am — part developer, part designer, and always learning. Thanks for stopping by.
        </p>
      </div>
    </section>
  );
}