import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Conditions from './pages/Conditions';
import BmiCalculator from './pages/BmiCalculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/bmi" element={<BmiCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;