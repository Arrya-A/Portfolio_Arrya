import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Header />
      {/* <Footer/> */}
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
