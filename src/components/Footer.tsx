import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="div-1">
        <div className="logo-container">
          <div className="logo-image-container">
            <img
              src={require("../assets/logo_dark.png")}
              className="card-image"
              alt=""
            />
          </div>
          <h2 className="footer-heading-text">Boldo</h2>
        </div>

        <p className="footer-text">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>

        <p className="footer-text">All rights reserved</p>
      </div>

      <div className="div-1">
        <h2 className="footer-heading-text-1">Landings</h2>

        <p className="footer-text">Home</p>
        <p className="footer-text">Products</p>
        <p className="footer-text">Services</p>
      </div>

      
      <div className="div-1">
        <h2 className="footer-heading-text-1">Company</h2>

        <p className="footer-text">Home</p>
        <p className="footer-text">Career</p>
        <p className="footer-text">Services</p>
      </div>

      
      <div className="div-1">
        <h2 className="footer-heading-text-1">Resources</h2>

        <p className="footer-text">Blog</p>
        <p className="footer-text">Products</p>
        <p className="footer-text">Services</p>
      </div>
    </div>
  );
};

export default Footer;
