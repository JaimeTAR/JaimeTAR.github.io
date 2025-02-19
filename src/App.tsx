import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProgrammingCarousel from "./components/ProgrammingCarousel";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <ProgrammingCarousel />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
