import { Navbar } from "../components/sections/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { Experience } from "../components/sections/Experience";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
