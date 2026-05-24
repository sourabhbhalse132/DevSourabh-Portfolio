import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#020617] text-white font-sans overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content Layout Container */}
      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer System */}
      <footer className="py-6 text-center text-slate-500 text-xs sm:text-sm border-t border-white/5 bg-[#020617]">
        &copy; {new Date().getFullYear()} Sourabh Bhalse &bull; Crafted with React, Tailwind CSS &amp; Modern Web Tech
      </footer>
    </div>
  );
}

export default App;