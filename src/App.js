import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';  // Import Navigate for redirection
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home page
import Videos from './components/Videos'; // Import Videos page
import About from './components/About'; // Import About page

function App() {
  return (
    <>
      <Navbar /> {/* This renders the Navbar */}
      <div className="container mt-4">
        {/* Routes will render the corresponding page component */}
        <Routes>
          {/* Define the /home route */}
          <Route path="/" element={<Home />} />
          
          {/* Define other routes */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
