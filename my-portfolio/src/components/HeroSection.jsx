import { Canvas } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls } from "@react-three/drei";

function AxeModel() {
  const { scene } = useGLTF("/woodsman_collection_heavy_duty_hatchet_axe.glb");
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} scale={2} />
    </Float>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative">
      <Canvas className="absolute inset-0 w-full h-full z-0">
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <AxeModel />
        {/* Interactive controls: rotate with mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Hi, I'm Daniel Scholtz</h1>
        <p className="text-xl text-gray-300 mt-4">
          Software Engineer & 3D Web Enthusiast
        </p>
      </div>
    </section>
  );
}