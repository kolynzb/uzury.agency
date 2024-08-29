import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution3BoxSlider = () => {
  return (
    <section className="mil-gradient-bg mil-p-120-120">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "30%" }}
      />
      <div
        className="mil-deco mil-deco-accent"
        style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <Swiper
          {...sliderProps.milBoxSlider}
          className="swiper-container mil-box-slider"
        >
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div
                className="row justify-content-between align-items-center"
                data-swiper-parallax-y={-100}
                data-swiper-parallax-opacity={0}
              >
                <div className="col-lg-3 offset-lg-1">
                  <div
                    className="mil-circle-illustration mil-with-dots mil-mb-60"
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-circle-bg" />
                    <div className="mil-image-frame">
                      <img src="img/faces/t6.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                    <img src="img/icons/sm/11.svg" alt="icon" />
                  </div>
                  <p className="mil-text-lg mil-light mil-mb-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida risus commodo
                    viverra maecenas.
                  </p>
                  <h3 className="mil-light mil-mb-15">Victoria Oldman</h3>
                  <p className="mil-light-soft">
                    Director of Product Management
                  </p>
                  <p className="mil-accent">ITAgency, Inc</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="row justify-content-between align-items-center"
                data-swiper-parallax-y={-100}
                data-swiper-parallax-opacity={0}
              >
                <div className="col-lg-3 offset-lg-1">
                  <div
                    className="mil-circle-illustration mil-with-dots mil-mb-60"
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-circle-bg" />
                    <div className="mil-image-frame">
                      <img src="img/faces/t1.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                    <img src="img/icons/sm/11.svg" alt="icon" />
                  </div>
                  <p className="mil-text-lg mil-light mil-mb-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida risus commodo
                    viverra maecenas.
                  </p>
                  <h3 className="mil-light mil-mb-15">John Doe</h3>
                  <p className="mil-light-soft">
                    Director of Product Management
                  </p>
                  <p className="mil-accent">ITAgency, Inc</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div
                className="row justify-content-between align-items-center"
                data-swiper-parallax-y={-100}
                data-swiper-parallax-opacity={0}
              >
                <div className="col-lg-3 offset-lg-1">
                  <div
                    className="mil-circle-illustration mil-with-dots mil-mb-60"
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-circle-bg" />
                    <div className="mil-image-frame">
                      <img src="img/faces/t2.png" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="mil-icon-frame mil-light mil-icon-frame-sm mil-mb-60">
                    <img src="img/icons/sm/11.svg" alt="icon" />
                  </div>
                  <p className="mil-text-lg mil-light mil-mb-60">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua quis ipsum suspendisse ultrices gravida risus commodo
                    viverra maecenas.
                  </p>
                  <h3 className="mil-light mil-mb-15">Oscar Trueman</h3>
                  <p className="mil-light-soft">
                    Director of Product Management
                  </p>
                  <p className="mil-accent">ITAgency, Inc</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="row">
          <div className="col-lg-5">
            <div className="mil-slider-nav justify-content-lg-center mil-reviews-btns-space">
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
      </div>
    </section>
  );
};
export default Solution3BoxSlider;
