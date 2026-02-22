import Navbar from "./components/Navbar";
import "./styles/global.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1 style={{ marginTop: "150px", textAlign: "center" }}>
          Portfolio en construction – React + TS + CSS
        </h1>
      </main>
    </div>
  );
}

export default App;
