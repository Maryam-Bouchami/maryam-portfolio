// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/global.css";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
