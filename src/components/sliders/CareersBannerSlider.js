import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const CareersBannerSlider = () => {
  return (
    <section className="mil-banners mil-p-120-0">
      <div className="container">
        <div className="mil-text-center mil-mb-120">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            We Offer You
          </span>
          <h2 className="mil-mb-30">
            Great Benefits for <span className="mil-accent">Working</span> With
            Us
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Itaque eveniet, officiis voluptate voluptatum.
          </p>
        </div>
        <Swiper
          {...sliderProps.milBannersSlider}
          className="swiper-container mil-banners-slider"
        >
          <SwiperSlide className="swiper-slide">
            <div className="mil-banner-slide">
              <img
                src="img/photo/10.jpg"
                alt="banner"
                className="mil-banner-bg"
                data-swiper-parallax={-100}
                data-swiper-parallax-scale="1.1"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div
                  className="col-lg-8 col-xl-6"
                  data-swiper-parallax-y={-300}
                >
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                    <h4 className="mil-mb-30">Continuous Learning</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua quis ipsum suspendisse ultrices gravida risus
                      commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-banner-slide">
              <img
                src="img/photo/11.jpg"
                alt="banner"
                className="mil-banner-bg"
                data-swiper-parallax={-100}
                data-swiper-parallax-scale="1.1"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div
                  className="col-lg-8 col-xl-6"
                  data-swiper-parallax-y={-300}
                >
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                    <h4 className="mil-mb-30">Consectetur adipiscing elit</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua quis ipsum suspendisse ultrices gravida risus
                      commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="mil-banner-slide">
              <img
                src="img/photo/12.jpg"
                alt="banner"
                className="mil-banner-bg"
                data-swiper-parallax={-100}
                data-swiper-parallax-scale="1.1"
              />
              <div className="mil-overlay" />
              <div className="row justify-content-end align-items-center">
                <div
                  className="col-lg-8 col-xl-6"
                  data-swiper-parallax-y={-300}
                >
                  <div className="mil-icon-box mil-sb-inner mil-relative">
                    <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                    <h4 className="mil-mb-30">Dolore magna aliqua</h4>
                    <div className="mil-divider mil-divider-left mil-mb-30" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua quis ipsum suspendisse ultrices gravida risus
                      commodo viverra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="mil-banners-pagination" />
        </Swiper>
      </div>
    </section>
  );
};
export default CareersBannerSlider;
