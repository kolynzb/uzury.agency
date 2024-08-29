import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/hero.json";

const Home2BannerSlider = () => {
  return (
    <div className="mil-banner mil-top-space-100">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, left: "12%" }}
      />
      <Swiper
        {...sliderProps.milBannersSlider}
        className="swiper-container mil-banner-slider"
      >
        {Content.items.map((item, key) => (
        <SwiperSlide className="swiper-slide">
          <img
            src={item.image}
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="mil-overlay" />
          <div
            className="mil-banner-content-2"
            data-swiper-parallax-y={300}
            data-swiper-parallax-duration={600}
            data-swiper-parallax-opacity={0}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center mil-text-center">
                <div className="col-xl-8">
                  <span className="mil-suptitle mil-mb-60">
                    <span className="mil-light">{item.subtitle.first}</span>{" "}
                    <span className="mil-accent">{item.subtitle.second}</span>
                  </span>
                  <h1 className="mil-mb-50">
                    {item.title.map((element, key) => (
                    <>
                      { element.accent == "0" &&
                      <span dangerouslySetInnerHTML={{__html : element.string}} className="mil-uppercase mil-light" />
                      }
                      { element.accent == "1" &&
                      <span dangerouslySetInnerHTML={{__html : element.string}} className="mil-font-3 mil-accent" />
                      }
                      {" "}
                    </>
                    ))}
                  </h1>
                  <p className="mil-light-soft mil-mb-60">
                    <span dangerouslySetInnerHTML={{__html : item.text}} />
                  </p>
                  <div className="mil-buttons-frame mil-buttons-frame-center">
                    { item.button1.enable == "1" &&
                    <a href={item.button1.link} className="mil-button mil-accent-bg">
                      <span>{item.button1.label}</span>
                    </a>
                    }
                    { item.button2.enable == "1" &&
                    <a href={item.button2.link} className="mil-button-with-label">
                      <div className="mil-button mil-border mil-icon-button mil-light">
                        <span>
                          <i className="fas fa-play" />
                        </span>
                      </div>
                      <span className="mil-light">{item.button2.label}</span>
                    </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="mil-banner-nav">
        <div className="container">
          <div className="mil-banner-button mil-banner-prev">
            <i className="fas fa-arrow-left" />
          </div>
          <div className="mil-banner-button mil-banner-next">
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home2BannerSlider;
