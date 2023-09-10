import React from "react";

interface BlogInterface {
  ref: React.RefObject<HTMLDivElement> | null;
}
const Blog: React.FC<BlogInterface> = ({ ref }) => {
  return (
    <div className="services-container" ref={ref}>
      <div className="blog-container-wrapper">
        <div className="blog-container">
          <div className="blog-wrapper">
            <div className="blog-text-container">
              <h1 className="blog-heading">Our Blog</h1>
              <p className="blog-paragraph">
                Value proposition accelerator product management venture
              </p>
            </div>

            <div className="blog-card-container">
              <div className="blog-card-container-content">
                <div className="blog-card-container-wrapper">
                  <div className="blog-card">
                    <div className="blog-card-image-container">
                      <img
                        src={require("../assets/blog_card_image_1.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="blog-card-text">
                      <div className="blog-text-1">
                        <h3 className="card-text-small-heading">Category</h3>
                        <p className="card-text-small-paragraph">
                          November 22, 2021
                        </p>
                      </div>

                      <p className="blog-text-paragraph">
                        Pitch termsheet backing validation focus release.
                      </p>
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-card-footer-image-container">
                        <img
                          src={require("../assets/blog_card_footer_image_1.png")}
                          className="card-image"
                          alt=""
                        />
                      </div>

                      <p className="blog-card-footer-text">Chandler Bing</p>
                    </div>
                  </div>

                  <div className="blog-card">
                    <div className="blog-card-image-container">
                      <img
                        src={require("../assets/blog_card_image_2.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="blog-card-text">
                      <div className="blog-text-1">
                        <h3 className="card-text-small-heading">Category</h3>
                        <p className="card-text-small-paragraph">
                          November 22, 2021
                        </p>
                      </div>

                      <p className="blog-text-paragraph">
                        Seed round direct mailing non-disclosure agreement
                        graphical user interface rockstar.
                      </p>
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-card-footer-image-container">
                        <img
                          src={require("../assets/blog_card_footer_image_2.png")}
                          className="card-image"
                          alt=""
                        />
                      </div>

                      <p className="blog-card-footer-text">Rachel Green</p>
                    </div>
                  </div>

                  <div className="blog-card">
                    <div className="blog-card-image-container">
                      <img
                        src={require("../assets/blog_card_image_3.png")}
                        className="card-image"
                        alt=""
                      />
                    </div>

                    <div className="blog-card-text">
                      <div className="blog-text-1">
                        <h3 className="card-text-small-heading">Category</h3>
                        <p className="card-text-small-paragraph">
                          November 22, 2021
                        </p>
                      </div>

                      <p className="blog-text-paragraph">
                        Beta prototype sales iPad gen-z marketing network
                        effects value proposition.
                      </p>
                    </div>

                    <div className="blog-card-footer">
                      <div className="blog-card-footer-image-container">
                        <img
                          src={require("../assets/blog_card_footer_image_3.png")}
                          className="card-image"
                          alt=""
                        />
                      </div>

                      <p className="blog-card-footer-text">Monica Geller</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="blog-button-container">
              <button className="blog-button">Load more</button>
            </div>
          </div>

          <div className="blog-wrapper-2">
            <div className="blog-2-container">
              <div className="blog-2-heading">
                <h1 className="blog-2-heading-text">
                  An enterprise template to ramp up your company website
                </h1>
              </div>

              <div className="blog-2-button-wrapper">
                <div className="blog-2-btn-wrapper">
                    <input type="text" className="form-control" placeholder="Your email address" />
                </div>

                <div className="blog-2-btn-wrapper-2">
                    <button className="blog-2-btn">Start now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
