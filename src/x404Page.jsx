import logo from './assets/images/logo.png';
import './assets/css/App.css';
import './assets/css/style.css';

function X404Page() {
    return (
    <div className="App">
        <header className="App-header">
            <h1>ERROR 404: PAGE NOT FOUND</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                ETA: 30ᵗʰ November 2025.<br/>Copyright © The Chimera 2025
            </p>
            <a href="/#/">Return to Home</a>
        </header>
    </div>
    );
}

export default X404Page;
