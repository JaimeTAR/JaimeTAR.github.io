import About from "./components/About";
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
      </main>
      <Footer />
    </>
  );
}

export default App;
