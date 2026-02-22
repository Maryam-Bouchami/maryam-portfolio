// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/global.css";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      {/* Les autres sections viendront ici */}
    </div>
  );
}

export default App;
