import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Videos from './components/Videos';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          {/* Redirect any invalid route to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
