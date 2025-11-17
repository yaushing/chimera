import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import SubmitPage from './SubmitPage';
import X404Page from './x404Page';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/*" element={<X404Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;