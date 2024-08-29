import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution1MilBoxSlider = () => {
  return (
    <section className="mil-awards">
      <div className="row m-0">
        <div className="col-xl-6 p-0 mil-relative">
          <img
            src="img/photo/14.jpg"
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="mil-overlay mil-gradient-bg" />
          <div className="mil-fake-container mil-p-120-120">
            <Swiper
              {...sliderProps.milBoxSlider}
              className="swiper-container mil-box-slider mil-mb-120"
            >
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="mil-light mil-mb-120">
                    AI Solutions To Analyze and Understand The{" "}
                    <span className="mil-accent">Physical World</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-15">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/10.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Facial Recognition</h5>
                  </div>
                  <p className="mil-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="mil-light mil-mb-120">
                    Industry Specific AI Consulting and{" "}
                    <span className="mil-accent">Development</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-15">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/11.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Artificial Intelligence</h5>
                  </div>
                  <p className="mil-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="mil-light mil-mb-120">
                    AI Solutions To Analyze and Understand The{" "}
                    <span className="mil-accent">Physical World</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-15">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/10.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Facial Recognition</h5>
                  </div>
                  <p className="mil-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="mil-light mil-mb-120">
                    Industry Specific AI Consulting and{" "}
                    <span className="mil-accent">Development</span>
                  </h3>
                  <div className="mil-hori-box mil-mb-30">
                    <div className="mil-mr-15">
                      <div className="mil-icon-frame mil-light mil-icon-frame-md">
                        <img src="img/icons/md/11.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="mil-light">Artificial Intelligence</h5>
                  </div>
                  <p className="mil-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="mil-slider-nav">
              <div className="mil-slider-btn-prev mil-box-prev mil-light">
                <i className="fas fa-arrow-left" />
                <span className="mil-h6">Prev</span>
              </div>
              <div className="mil-slider-btn-next mil-box-next mil-light">
                <span className="mil-h6">Next</span>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 p-0 mil-relative"
          style={{ overflow: "hidden" }}
        >
          <img
            src="img/photo/14.jpg"
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="mil-overlay mil-with-deco mil-super-light" />
        </div>
      </div>
    </section>
  );
};
export default Solution1MilBoxSlider;
