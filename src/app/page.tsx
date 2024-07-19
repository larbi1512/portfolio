import HeroSections from "./components/HeroSections";
import SkillHero from "./components/SkillHero";
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills";
import Experience from "./components/Experience";
export default function Home() {
  return (
    <main className="  max-h-screen flex-col bg-main ">
      <HeroSections/>
      <SkillHero/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>

    </main>
  );
}
