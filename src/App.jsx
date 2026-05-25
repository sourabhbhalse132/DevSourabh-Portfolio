import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import NotFound from "./pages/NotFound";

function Home() {
  return (
    <div className="bg-[#020617] text-white font-sans overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16 md:pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="py-6 text-center text-slate-500 text-xs sm:text-sm border-t border-white/5 bg-[#020617]">
        &copy; {new Date().getFullYear()} Sourabh Bhalse &bull; Crafted with
        React, Tailwind CSS &amp; Modern Web Tech
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;