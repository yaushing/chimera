import logo from './assets/images/logo.png';
import { useState } from 'react';
import './assets/css/App.css';
import './assets/css/style.css';


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

function gethash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function LandingPage() {
    const [unlocked, setUnlocked] = useState(false);

    window.unlock = () => {
        const key = prompt("Enter access key:");
        if (gethash(key) === -1100845144) {
            setUnlocked(true);
            console.log("Access granted.");
        } else {
            console.log("Access denied.");
        }
    };

    return (
    <div className="App">
        {!unlocked && 
            <header className="App-header">
                <IntroText />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    ETA: 30ᵗʰ November 2025.<br/>Copyright © The Chimera 2025
                </p>
            </header>
        }
        {unlocked && (
            <div className="nav-container">
<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="brand-container">
                    <a className="navbar-brand" href="/#/">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="title-container">
                    <div className="navbar-text text-white" style={{ fontWeight: 'bold' }}>
                        LETTERS NEVER SENT
                    </div>
                </div>
                <div className="link-container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/#/">Messages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#/submit">Submit</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
            )}
    </div>
    );
}

export default LandingPage;
