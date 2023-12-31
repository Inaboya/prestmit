import React from "react";


const Home: React.FC= () => {
  return (
    <div className="home__container">
      <div className="home__wrapper">
        <div className="home_content--first">
          <div className="side__1">
            <div className="side__1--wrapper">
              <h1 className="side__1--heading">
                Save time by building fast with Boldo Template{" "}
              </h1>

              <p className="side__1--paragraph">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>

              <div className="side__1--button">
                <div className="button-container">
                  <button className="side__1--btn">Buy template</button>
                </div>

                <div className="button-container-2">
                  <button className="side__2--btn">Explore</button>
                </div>
              </div>
            </div>
          </div>
          <div className="side__2">
            <div className="side__2--content-1">
              <div className="side__2--dots">
                <div className="dot-1"></div>
                <div className="dot-2"></div>
                <div className="dot-3"></div>
              </div>

              <div className="side-2-content">
                <div className="side-2-content-1">
                  <div className="div-one"></div>
                  <div className="progress-bar"></div>
                  <p className="bar-text">80%</p>
                </div>

                <div className="side-2-content-1">
                  <div className="div-one"></div>
                  <div className="progress-bar-2"></div>
                  <p className="bar-text">30%</p>
                </div>

                <div className="side-2-content-1">
                  <div className="div-one"></div>
                  <div className="progress-bar-3"></div>
                  <p className="bar-text">100%</p>
                </div>

                <div className="side-2-content-1">
                  <div className="div-one"></div>
                  <div className="progress-bar-4"></div>
                  <p className="bar-text">73%</p>
                </div>
              </div>
            </div>

            <div className="side__2--content-2">
              <div className="content-2-first">
                <div className="side__2--dots">
                  <div className="dot-1"></div>
                  <div className="dot-2"></div>
                  <div className="dot-3"></div>
                </div>

                <div className="image-container">
                  <img
                    src={require("../assets/bar_chart_img.png")}
                    className="bar_chart_icon"
                    alt=""
                  />
                </div>
              </div>
              <div className="content-2-second">
                <div className="side__2--dots">
                  <div className="dot-1"></div>
                  <div className="dot-2"></div>
                  <div className="dot-3"></div>
                </div>

                <div className="content-2-image-container">
                  
                  <div className="image-2-container-first">
                    <img
                      src={require("../assets/pie_chart.png")}
                      className="pie_chart_icon"
                      alt=""
                    />
                  </div>

                  <div className="content-2-long-lines">
                    <div className="progress-bar-5"></div>
                    <div className="progress-bar-5"></div>
                    <div className="progress-bar-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel-slider">
            <img
              src={require("../assets/carousel_logos.png")}
              className="card-images"
              alt=""
            />

            <img
              src={require("../assets/carousel_logos.png")}
              className="card-images"
              alt=""
            />

            <img
              src={require("../assets/carousel_logos.png")}
              className="card-images"
              alt=""
            />

            <img
              src={require("../assets/carousel_logos.png")}
              className="card-images"
              alt=""
            />

            <img
              src={require("../assets/carousel_logos.png")}
              className="card-images"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
