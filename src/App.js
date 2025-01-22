import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Use BrowserRouter for routing
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home page
import Videos from './components/Videos'; // Import Videos page
import About from './components/About'; // Import About page

function App() {
  return (
    <BrowserRouter basename="/video-page"> {/* Add basename */}
      <Navbar /> {/* This renders the Navbar */}
      <div className="container mt-4">
        {/* Routes will render the corresponding page component */}
        <Routes>
          {/* Redirect from root path ("/") to /home */}
          <Route path="/" element={<Navigate to="/home" />} />
          
          {/* Define the /home route */}
          <Route path="/home" element={<Home />} />
          
          {/* Define other routes */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
