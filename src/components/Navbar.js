import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  // Close modal when clicking outside the image
 // const handleBackdropClick = (event) => {
  //  if (event.target.classList.contains('modal')) {
 //     setShowModal(false);
 //   }
 // };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          {/*<img
            src={'default-profile.jpg'}
            alt="Logo"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '60px' }}
            onClick={toggleModal} // Trigger modal on click
          />*/}
          <i
            className="fas fa-user img-fluid rounded-circle"
            style={{ maxWidth: '60px', cursor: 'pointer' }}
            onClick={toggleModal} // Trigger modal on click
          ></i>
          <span className="ms-3 name-title">ROOSEE.ZE</span>
        </Link>

        {/* Hidden checkbox and label for CSS toggle */}
        <input type="checkbox" className="navbar-toggler-checkbox" id="navbar-toggler-checkbox" />
        <label className="navbar-toggler" htmlFor="navbar-toggler-checkbox">
          <span className="navbar-toggler-icon"></span>
        </label>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center justify-content-lg-end w-100">
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)' }} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)' }} to="/videos">
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{ color: 'rgba(255, 255, 255, 0.8)' }} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Modal Component 
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block' }}
          onClick={handleBackdropClick} // Close modal on backdrop click
        >
          <div className="modal-dialog custom-modal">
            <div className="modal-content">
              <div className="modal-body text-center p-0">
                <img
                  src={process.env.PUBLIC_URL + '/images/profile-pic.png'}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  id="zoomedProfilePic"
                />
              </div>
            </div>
          </div>
        </div>
      )}
        */}
    </nav>
  );
};

export default Navbar;
