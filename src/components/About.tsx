import React from "react";

const About: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-wrapper-container-1">
            <div className="about-container-heading-container">
              <h3 className="about-container-heading">
                An enterprise template to ramp up your company website
              </h3>
            </div>

            <div className="about-container-dots-image">
              <div className="dots-image-container">
                <img
                  src={require("../assets/arrow_right.png")}
                  className="card-image-1"
                  alt=""
                />
              </div>
              <div className="dots-image-container">
                <img
                  src={require("../assets/arrow_left.png")}
                  className="card-image-1"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="about-wrapper-container-2">
            <div className="about-wrapper-1">
              <div className="about-card-1">
                <div className="about-wrapper-card-content">
                  <h3 className="card-content-heading">
                    “Buyer buzz partner network disruptive non-disclosure
                    agreement business”
                  </h3>

                  <div className="about-wrapper-card-bio">
                    <div className="about-wrapper-image-container">
                      <img
                        src={require("../assets/about_card_1.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="about-wrapper-card-text">
                      <p className="about-wrapper-card-1">Albus Dumbledore</p>
                      <p className="about-wrapper-card-2">Manager @ Howarts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-card-1">
                <div className="about-wrapper-card-content">
                  <h3 className="card-content-heading">
                    “Learning curve infrastructure value proposition advisor
                    strategy user experience hypotheses investor.”
                  </h3>

                  <div className="about-wrapper-card-bio">
                    <div className="about-wrapper-image-container">
                      <img
                        src={require("../assets/about_card_2.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="about-wrapper-card-text">
                      <p className="about-wrapper-card-1">Severus Snape</p>
                      <p className="about-wrapper-card-2">
                        Manager @ Slytherin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-card-1">
                <div className="about-wrapper-card-content">
                  <h3 className="card-content-heading">
                    “Release facebook responsive web design business model
                    canvas seed money monetization.”
                  </h3>

                  <div className="about-wrapper-card-bio">
                    <div className="about-wrapper-image-container">
                      <img
                        src={require("../assets/about_card_3.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="about-wrapper-card-text">
                      <p className="about-wrapper-card-1">Harry Potter</p>
                      <p className="about-wrapper-card-2">
                        Team Leader @ Gryffindor
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-description-container">
        <div className="about-description-wrapper">
          <div className="description-container">
            <div className="decription-image-container">
              <img
                src={require("../assets/office_picture.png")}
                alt=""
                className="card-image"
              />
            </div>

            <div className="description-text-container">
              <div className="description-heading-container">
                <h3 className="description-heading-text">
                  We connect our customers with the best, and help them keep
                  up-and stay open.
                </h3>
              </div>

              <div className="description-heading-paragraph">
                <div className="paragraph-text-container">
                  <div className="paragraph-text-text-1">
                    <p className="paragraph-text-paragraph">
                      We connect our customers with the best?
                    </p>
                    <div className="icon-div">
                      <i className="fa-solid fa-circle-check fa-2x"></i>
                    </div>
                  </div>
                  <div className="white-line"></div>
                </div>

                <div className="paragraph-text-container">
                  <div className="paragraph-text-text-1">
                    <p className="paragraph-text-paragraph">
                      Android research & development rockstar?
                    </p>
                    <div className="icon-div">
                      <i className="fa-solid fa-circle-check fa-2x"></i>
                    </div>
                  </div>
                  <div className="white-line"></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
