import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Publications from "./components/Publications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Competencies from "./components/Competencies";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-6xl px-6 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
      <Sidebar />
      <div className="min-w-0 max-w-[46rem] pb-12 pt-10 lg:pt-16">
        <main>
          <About />
          <Publications />
          <Experience />
          <Projects />
          <Competencies />
          <Education />
        </main>
        <Footer />
      </div>
    </div>
  );
}
