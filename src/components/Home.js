import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div className="home-content d-flex flex-column flex-lg-row">
      {/* Text Content */}
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

      {/* Image Wrapper and Carousel Container */}
      <div className="image-wrapper d-flex justify-content-center align-items-center">
        <div className="carousel-container">
          <Carousel
            ride="carousel"
            interval={3000} // Auto slide interval
          >
            <Carousel.Item>
              <img
                src={`${process.env.PUBLIC_URL}/images/amaran.png`}
                alt="amaran_cover"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Recent</h3>
                <p>Indhu | Mukund</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={`${process.env.PUBLIC_URL}/images/flawless.png`}
                alt="flawless_cover"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Previous</h3>
                <p>Flawless</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                src={`${process.env.PUBLIC_URL}/images/jd.png`}
                alt="jd_cover"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Earlier</h3>
                <p>JD core!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
