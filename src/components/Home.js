import React from 'react';

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
          <div
            id="homeCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#homeCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            {/* Carousel Inner */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`${process.env.PUBLIC_URL}/images/amaran.png`}
                  alt="amaran_cover"
                  className="d-block w-100"
                />
                <div className="carousel-caption">
                  <h3>Recent</h3>
                  <p>Indhu | Mukund</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/flawless.png`}
                  alt="flawless_cover"
                  className="d-block w-100"
                />
                <div className="carousel-caption">
                  <h3>Previous</h3>
                  <p>Flawless</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/jd.png`}
                  alt="jd_cover"
                  className="d-block w-100"
                />
                <div className="carousel-caption">
                  <h3>Earlier</h3>
                  <p>JD core!</p>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#homeCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
