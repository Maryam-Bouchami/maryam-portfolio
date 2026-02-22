// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* Les autres sections viendront ici */}
    </div>
  );
}

export default App;
