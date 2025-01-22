import React from 'react';

const About = () => (
  <div className="container mt-4">
    <h2>About</h2>
    <p>
      Welcome to my website! Here, you'll find the same videos I shared on Instagram—but with much better quality.
    </p>
    <p>
      Only a curated selection of videos is available. Each video is offered in 1080p, optimized for smooth playback with compact file sizes (typically between 8–12 MB).
    </p>
    <p>
      Additionally, posters and covers are included and optimized to be under 2 MB. Hopefully, fast loading without compromising quality. If you experience buffering, stay tuned! The content is designed to deliver the best possible quality while maintaining smooth playback.
    </p>
    <p>
      Rest assured, no external sources (videos or images) are used directly. All content here has been edited and adapted by me.
    </p>
    <h2 style={{ paddingBottom: '20px' }}>For more</h2>
    <div className="d-flex flex-column align-items-center">
      <a
        href="mailto:rooseendhrat@gmail.com"
        className="btn btn-outline-dark mb-3 email-btn"
        style={{ width: '200px' }}
        title="Email"
      >
        <i className="fas fa-envelope"></i> Email
      </a>
      <a
        href="https://www.instagram.com/roosee.ze"
        className="btn btn-outline-dark instagram-btn"
        style={{ width: '200px' }}
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </div>
);

export default About;
