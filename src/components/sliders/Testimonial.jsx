import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Content from '../../data/sliders/testimonial';

const Home1TestimonialSlider = () => {
  return (
    <section className="mil-reviews mil-deep-bg mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {Content.subtitle}
            </span>
            <h2>
              {Content.title.first} <span className="mil-accent">{Content.title.second}</span> {Content.title.third}
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-revi-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-revi-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container mil-revi-slider"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <div className="mil-review">
              <div className="mil-stars mil-mb-30">
                <img src="img/icons/sm/11.svg" alt="quote" />
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
                  <li>
                    <i className="fas fa-star" />
                  </li>
                </ul>
              </div>
              <p className="mil-mb-30">
                {item.text}
              </p>
              <div className="mil-author">
                <img src={item.image} alt={item.name} />
                <div className="mil-name">
                  <h6 className="mil-mb-5">{item.name}</h6>
                  <span className="mil-text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Home1TestimonialSlider;
