import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Service4Courses = () => {
  return (
    <section className="mil-courses mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "40%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Unlimited Training
            </span>
            <h2 className="mil-mb-30">Latest Courses</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <div className="mil-slider-nav mil-mb-30">
                <div className="mil-slider-btn-prev mil-courses-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-courses-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milCoursesSlider}
          className="swiper-container mil-courses-slider mil-mb-30"
        >
          <SwiperSlide className="swiper-slide">
            <a href="#." className="mil-card">
              <div className="mil-cover-frame mil-mb-15">
                <img src="img/blog/1.jpg" alt="project" />
              </div>
              <div className="mil-description">
                <div className="mil-fw-descr">
                  <div className="mil-card-top">
                    <ul className="mil-bages mil-mb-15">
                      <li className="mil-dark">Security</li>
                      <li className="mil-dark">Team</li>
                    </ul>
                    <div className="mil-stars mil-mb-15">
                      <span className="mil-dark">4.5</span>
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li className="mil-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-divider-left mil-mb-20" />
                  <h4 className="mil-mb-15">Cibersecurity Premium</h4>
                  <p className="mil-text-sm mil-mb-15">John Stone</p>
                  <div className="mil-text-lg mil-bold mil-accent">Free</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="mil-card">
              <div className="mil-cover-frame mil-mb-15">
                <img src="img/projects/2.jpg" alt="project" />
              </div>
              <div className="mil-description">
                <div className="mil-fw-descr">
                  <div className="mil-card-top">
                    <ul className="mil-bages mil-mb-15">
                      <li className="mil-dark">Security</li>
                      <li className="mil-dark">Team</li>
                    </ul>
                    <div className="mil-stars mil-mb-15">
                      <span className="mil-dark">4.5</span>
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li className="mil-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-divider-left mil-mb-20" />
                  <h4 className="mil-mb-15">Cibersecurity Premium</h4>
                  <p className="mil-text-sm mil-mb-15">John Stone</p>
                  <div className="mil-text-lg mil-dark mil-bold">$22.99 us</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="mil-card">
              <div className="mil-cover-frame mil-mb-15">
                <img src="img/projects/1.jpg" alt="project" />
              </div>
              <div className="mil-description">
                <div className="mil-fw-descr">
                  <div className="mil-card-top">
                    <ul className="mil-bages mil-mb-15">
                      <li className="mil-dark">Security</li>
                      <li className="mil-dark">Team</li>
                    </ul>
                    <div className="mil-stars mil-mb-15">
                      <span className="mil-dark">4.5</span>
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li className="mil-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-divider-left mil-mb-20" />
                  <h4 className="mil-mb-15">Cibersecurity Premium</h4>
                  <p className="mil-text-sm mil-mb-15">John Stone</p>
                  <div className="mil-text-lg mil-bold">
                    <s className="mil-text-sm">$15.99 us</s> &nbsp;{" "}
                    <span className="mil-accent">$50.99 us</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="mil-card">
              <div className="mil-cover-frame mil-mb-15">
                <img src="img/blog/3.jpg" alt="project" />
              </div>
              <div className="mil-description">
                <div className="mil-fw-descr">
                  <div className="mil-card-top">
                    <ul className="mil-bages mil-mb-15">
                      <li className="mil-dark">Security</li>
                      <li className="mil-dark">Team</li>
                    </ul>
                    <div className="mil-stars mil-mb-15">
                      <span className="mil-dark">4.5</span>
                      <ul>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li className="mil-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mil-divider mil-divider-left mil-mb-20" />
                  <h4 className="mil-mb-15">Cibersecurity Premium</h4>
                  <p className="mil-text-sm mil-mb-15">John Stone</p>
                  <div className="mil-dark mil-bold">19.99 us$</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Service4Courses;
