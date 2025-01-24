import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './styles/Home.css';
import './styles/Navbar.css';
import './styles/Modal.css';
import './styles/videoCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router basename="/video-page"> {/* Add basename here */}
    <App />
  </Router>
);
