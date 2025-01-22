import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Home.css';
import './styles/Navbar.css';
import './styles/Modal.css';
import './styles/videoCard.css' // Your custom styles (optional)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; // Import Bootstrap JS (bundle includes all necessary JS)
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>
);
