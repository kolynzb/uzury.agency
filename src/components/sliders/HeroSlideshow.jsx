import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/hero-slideshow.json";

const Home1BannerSlider = () => {
  return (
    <div className="mil-banner mil-top-space-0">
      <Swiper
        {...sliderProps.milBannersSlider}
        className="swiper-container mil-banner-slideshow"
      >
        {Content.slides.map((slide, key) => (
        <SwiperSlide className="swiper-slide">
          <img
            src={slide.image}
            className="mil-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax={-100}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="mil-overlay" />
      <div className="mil-banner-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <span className="mil-suptitle mil-mb-60">
                <span className="mil-light">{Content.subtitle.first}</span>{" "}
                <span className="mil-accent">{Content.subtitle.second}</span>
              </span>
              <h1 className="mil-mb-60">
                <span dangerouslySetInnerHTML={{__html : Content.title.first}} className="mil-uppercase mil-light" />{" "}
                <span className="mil-font-3 mil-accent">{Content.title.second}</span>
              </h1>
              <div className="mil-flex-hori-center">
                <div>
                  <Link
                    href={Content.button.link}
                    className="mil-button mil-border mil-light"
                  >
                    <span>{Content.button.label}</span>
                  </Link>
                </div>
                <p className="mil-button-descr mil-light-soft">
                  {Content.description}
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-illustration-1">
                {Content.items.map((item, key) => (
                <div className={`mil-item mil-item-${key+1}`}>
                  <div className="mil-plus">
                    <div className="mil-hover-window">
                      <div className="mil-window-content">
                        <h5 className="mil-dark mil-mb-15">{item.title}</h5>
                        <div className="mil-divider mil-divider-left mil-mb-15" />
                        <p className="mil-text-sm">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">{item.label}</h6>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home1BannerSlider;
