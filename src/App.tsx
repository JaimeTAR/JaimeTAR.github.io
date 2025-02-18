import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProgrammingCarousel from "./components/ProgrammingCarousel";

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <ProgrammingCarousel />
      </main>
      <Footer />
    </>
  );
}

export default App;
