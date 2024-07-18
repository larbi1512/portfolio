import HeroSections from "./components/HeroSections";
import SkillHero from "./components/SkillHero";
import About from "./components/About"
import Projects from "./components/Projects"
export default function Home() {
  return (
    <main className="  max-h-screen flex-col bg-main ">
      <HeroSections/>
      <SkillHero/>
      <About/>
      <Projects/>

    </main>
  );
}
