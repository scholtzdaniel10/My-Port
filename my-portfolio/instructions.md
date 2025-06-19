# 🧠 Full Portfolio Instructions for GitHub Copilot

Build a modern portfolio inspired by Roman Kriuchko using:

- React with Vite
- TailwindCSS
- React Three Fiber (R3F) + Drei
- React Icons

---

## 🚀 1. Project Setup

```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-icons @react-three/fiber @react-three/drei three
```

Update tailwind.config.js:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

In src/index.css, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background: #000; color: #fff; }
```

## 🏗 2. File Structure

```
my-portfolio/
├── public/
│   └── project1.png
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx
│   │   ├── WorkSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ContactSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

## 🔧 3. App.jsx

Set up the global layout:

```javascript
import Hero3D from './components/Hero3D';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans">
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
```

## 🎧 4. Hero3D.jsx

3D sphere + text overlay:

```javascript
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div id="hero" className="relative h-screen">
      <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Environment preset="studio" />
        <Float speed={1.5} rotationIntensity={1}>
          <mesh>
            <icosahedronGeometry args={[1, 4]} />
            <meshStandardMaterial color="#ff0055" flatShading />
          </mesh>
        </Float>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Daniel Scholtz</h1>
        <p className="mt-4 text-xl text-gray-300">Software Engineer & 3D Web Enthusiast</p>
      </div>
    </div>
  );
}
```

## 🧩 5. WorkSection.jsx

```javascript
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "My Portfolio",
    description: "Built with React, Tailwind, Vite & R3F.",
    tags: ["React", "Tailwind", "R3F"],
    image: "/project1.png",
    github: "https://github.com/yourname/my-portfolio",
    live: "https://your-portfolio.vercel.app",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">My Work</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-gray-400">{p.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a href={p.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## 👤 6. AboutSection.jsx

```javascript
export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-400">
          I'm a software engineer passionate about building interactive web experiences and 3D graphics using React and Three.js.
        </p>
      </div>
    </section>
  );
}
```

## 📬 7. ContactSection.jsx

```javascript
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-400 mb-8">
          Feel free to reach out to me for collaborations or just a friendly hello!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
```

## ✅ 8. Public Assets

Place your hero background or project images in public/, e.g. project1.png.

## ▶️ 9. Run Locally

```bash
npm run dev
```

## 🎁 10. Extra Enhancements

Copilot can also:

- Swap icosahedronGeometry for a GLTF 3D avatar
- Add entry fade-in animations (Framer Motion)
- Generate more project cards from GitHub API
- Add transitions to navbar links

Thanks, Copilot! Let’s build a beautiful, interactive 3D portfolio 🎉

---

## ✅ What You Should Do Next

1. **Create `instructions.md`** in your project root, copy the block above.
2. Open it in your code editor—the Copilot will generate all files.
3. Copy or overwrite sections as needed (e.g., your email, GitHub links, images).
4. Run `npm run dev` and view at `http://localhost:5173`.