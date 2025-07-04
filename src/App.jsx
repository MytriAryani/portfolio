import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedCursor from "./components/AnimatedCursor";
import FloatingBlobs from "./components/FloatingBlobs";
import AnimatedLines from "./components/AnimatedLines";
import "./App.css";

function App() {
  return (
    <div className="relative font-sans bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen overflow-x-hidden">
      <AnimatedCursor />
      {/* <FloatingBlobs />
      <AnimatedLines /> */}
      <Navbar />
      <main className="pt-15">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
