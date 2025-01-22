import React from 'react';

const Home = () => (
  <div className="container mt-4">
    <div className="home-content d-flex flex-column flex-lg-row align-items-start">
      <div className="text-content">
        <h2>Home</h2>
        <p>
          This website features a selection of videos, the same ones I shared on Instagram. 
          I've uploaded them here in higher quality for better viewing.
        </p>
        <p>
          Browse through the <strong>Videos</strong> section to check them out. 
          If you want more information, check the <strong>About</strong> section.
        </p>
      </div>
      <div className="image-wrapper">
        <img 
          src={`${process.env.PUBLIC_URL}/images/jd.png`} 
          alt="Home" 
          className="home-image" 
        />
      </div>
    </div>
  </div>
);

export default Home;
