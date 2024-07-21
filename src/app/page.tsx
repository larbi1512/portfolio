import HeroSections from "./components/HeroSections";
import SkillHero from "./components/SkillHero";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

export default function Home() {
  
  return (
    <main className="  max-h-screen flex-col bg-main overflow-x-hidden">
      <Navbar/>
      <section id="hero">
      <HeroSections />
      </section>

      <SkillHero/>
      <section id="about">
      <About/>
      </section>
      <section id="projects"><Projects /></section>
      <section id="skills">
      <Skills/>
      </section>
      <section id="experience">      <Experience />
</section>
      <section id="contacts">
      <Contact/>
      </section>

    </main>
  );
}
