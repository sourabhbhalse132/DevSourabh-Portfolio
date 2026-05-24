import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Sourabh Bhalse — Built with React & Tailwind
      </footer>
    </>
  );
}