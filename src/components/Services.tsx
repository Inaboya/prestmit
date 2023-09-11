import React from "react";
import ArrowRightSVG from "../assets/arrow_right.svg";

interface ServicesInterface {
  ref: React.RefObject<HTMLDivElement> | null;
}

const Services: React.FC<ServicesInterface> = ({ ref }) => {
  return (
    <div className="services-container" ref={ref}>
      <div className="services-wrapper">
        <div className="services-header-container">
          <h1 className="services-heading">Our Services</h1>
          <p className="services-paragraph">
            Handshake infographic mass market crowdfunding iteration
          </p>
        </div>

        <div className="services-hero-container">
          <div className="services-card-container">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-image-container">
                  <img
                    src={require("../assets/image_card_1.png")}
                    className="card-image"
                    alt=""
                  />
                </div>

                <div className="card-text">
                  <h3 className="card-text-heading">Cool feature title</h3>

                  <p className="card-text-paragraph">
                    Learning curve network effects return on investment.
                  </p>
                </div>

                <div className="card-button-container">
                  <button className="card-btn">
                    <span className="btn-text">Explore page</span>
                    <span className="btn-icon">
                      <img src={ArrowRightSVG} alt="" />
                    </span>
                  </button>
                  <div className="black-line"></div>
                </div>
              </div>

              <div className="card">
                <div className="card-image-container">
                  <img
                    src={require("../assets/image_card_2.png")}
                    className="card-image"
                    alt=""
                  />
                </div>

                <div className="card-text">
                  <h3 className="card-text-heading">Cool feature title</h3>

                  <p className="card-text-paragraph">
                    Learning curve network effects return on investment.
                  </p>
                </div>

                <div className="card-button-container">
                  <button className="card-btn">
                    <span className="btn-text">Explore page</span>
                    <span className="btn-icon">
                      <img src={ArrowRightSVG} alt="" />
                    </span>
                  </button>
                  <div className="black-line"></div>
                </div>
              </div>

              <div className="card">
                <div className="card-image-container">
                  <img
                    src={require("../assets/image_card_3.png")}
                    className="card-image"
                    alt=""
                  />
                </div>

                <div className="card-text">
                  <h3 className="card-text-heading">Cool feature title</h3>

                  <p className="card-text-paragraph">
                    Learning curve network effects return on investment.
                  </p>
                </div>

                <div className="card-button-container">
                  <button className="card-btn">
                    <span className="btn-text">Explore page</span>
                    <span className="btn-icon">
                      <img src={ArrowRightSVG} alt="" />
                    </span>
                  </button>
                  <div className="black-line"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-about-container">
            <div className="services-about-wrapper">
              <div className="about-side">
                <div className="side-content-container">
                  <div className="side-content-card">
                    <div className="content-image-container">
                      <img
                        src={require("../assets/content_image_1.png")}
                        className="content-image"
                        alt=""
                      />

                      <div className="inner-image-container">
                        <div className="inner-wrapper">
                          <div className="inner-image-con">
                            <img
                              src={require("../assets/inner_image_2.png")}
                              className="image-2"
                              alt=""
                            />
                          </div>

                          <h4 className="inner-header">30%</h4>
                          <p className="inner-text">More income in June</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="side-content-card">
                    <div className="content-side-wrapper">
                      <p className="side-text-paragraph-1">
                        We connect our customers with the best, and help them
                        keep up-and stay open.
                      </p>

                      <div className="side-content">
                        <div className="side-image-container">
                          <i className="fa-solid fa-circle-check fa-2x"></i>
                        </div>
                        <p className="content-text-paragraph">
                          We connect our customers with the best.
                        </p>
                      </div>

                      <div className="side-content">
                        <div className="side-image-container">
                          <i className="fa-solid fa-circle-check fa-2x"></i>
                        </div>
                        <p className="content-text-paragraph">
                          Advisor success customer launch party.
                        </p>
                      </div>

                      <div className="side-content">
                        <div className="side-image-container">
                          <i className="fa-solid fa-circle-check fa-2x"></i>
                        </div>
                        <p className="content-text-paragraph">
                          Business-to-consumer long tail.
                        </p>
                      </div>

                      <div className="side-content-button-container">
                        <button className="side-btn">Start Now</button>
                      </div>
                    </div>
                  </div>

                  <div className="side-content-card">
                    <div className="content-side-wrapper">
                      <p className="side-text-paragraph-1">
                        We connect our customers with the best, and help them
                        keep up-and stay open.
                      </p>

                      <div className="content-side-content">
                        <div className="side-image-container">
                          {/* <i className="fa-solid fa-feather fa-2x"> */}
                          <img src={require("../assets/feather.png")} alt="" />
                        </div>
                        <p className="content-text-paragraph-1">
                          We connect our customers with the best.
                        </p>
                      </div>

                      <div className="side-content-1">
                        <div className="side-image-container">
                          {/* <i className="fa-solid fa-circle-check fa-2x"></i>
                           */}

                          <img src={require("../assets/eye.png")} alt="" />
                        </div>
                        <p className="content-text-paragraph-2">
                          Advisor success customer launch party.
                        </p>
                      </div>

                      <div className="side-content-1">
                        <div className="side-image-container">
                          {/* <i className="fa-solid fa-circle-check fa-2x"></i> */}
                          <img src={require("../assets/sun.png")} alt="" />
                        </div>
                        <p className="content-text-paragraph-2">
                          Business-to-consumer long tail.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="side-content-card-2">
                    <div className="content-image-container-2">
                      <img
                        src={require("../assets/content_image_2.png")}
                        alt=""
                        className="content-image"
                      />

                      <div className="inner-image-container-2">
                        <div className="inner-wrapper-2">
                          <div className="inner-image-con-2">
                            <img
                              src={require("../assets/pie_chart.png")}
                              alt=""
                              className="image-2"
                            />
                          </div>

                          <div className="inner-wrapper-text-2">
                            <div className="text-2-container">
                              <div className="dot1"></div>
                              <p className="text-2-text">
                                35% - Agile Development
                              </p>
                            </div>

                            <div className="text-2-container">
                              <div className="dot2"></div>
                              <p className="text-2-text">
                                30% - Investor bandwidth
                              </p>
                            </div>

                            <div className="text-2-container">
                              <div className="dot3"></div>
                              <p className="text-2-text">35% - A/B testing </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
