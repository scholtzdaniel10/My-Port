import React from "react";
import Hero3D from './components/Hero3D';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans">
      {/* Dreamy overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(80,120,255,0.18) 0%, rgba(0,0,40,0.35) 100%)",
          backdropFilter: "blur(0.3px)"
        }}
      />
      <header className="sticky top-0 bg-black border-b border-gray-800 z-50">
        <nav className="max-w-6xl mx-auto p-4 flex justify-between">
          <span className="text-xl font-bold">Daniel Scholtz</span>
          <div className="space-x-4">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>
      <Hero3D />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}

export default App;