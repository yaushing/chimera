import logo from './logo.png';
import './App.css';


function IntroText() {
  const intros = [
    "Reticulating splines...",
    "Calibrating etheric circuits...",
    "Summoning subroutines...",
    "Aligning quantum flux...",
    "Harmonizing data streams...",
    "Optimizing neural pathways...",
    "Engaging hyperdrive...",
    "Stabilizing temporal matrix...",
    "Charging plasma conduits...",
    "Configuring multidimensional arrays..."
  ];

  const intro = intros[Math.floor(Math.random() * intros.length)];

  return <p>{intro}</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IntroText />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ETA: 30ᵗʰ November 2025.<br/>Copyright © The Chimera 2025
        </p>
      </header>
    </div>
  );
}

export default App;
