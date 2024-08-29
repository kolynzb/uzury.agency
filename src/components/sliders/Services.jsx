import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Content from '../../data/sliders/services';

const Home2ServicesSlider = () => {
  return (
    <section className="mil-services mil-deep-bg mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {Content.subtitle}
            </span>
            <h2>{Content.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-services-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-services-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milServicesSlider}
          className="swiper-container mil-services-slider"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <div className="mil-hover-card">
              <h4 className="mil-mb-30">{item.name}</h4>
              <p className="mil-mb-50">
                {item.text}
              </p>
              <div className="mil-divider mil-divider-left mil-mb-50" />
              <ul className="mil-simple-list mil-mb-50">
                {item.list.map((element, key) => (
                <li>{element.value}</li>
                ))}
              </ul>
              <a href={item.link} className="mil-link">
                <span>{item.button}</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Home2ServicesSlider;
