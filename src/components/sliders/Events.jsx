import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/events.json";

const Home2EventsSlider = () => {
  return (
    <section className="mil-events mil-deep-bg mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-end mil-mb-60-adapt">
          <div className="col-md-4 col-xl-4">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {Content.subtitle}
            </span>
            <h2 className="mil-mb-30">{Content.title}</h2>
          </div>
          <div className="col-md-5 col-xl-5">
            <p className="mil-mb-30">
              {Content.text}
            </p>
          </div>
          <div className="col-md-3 col-xl-3">
            <div className="mil-adaptive-right mil-mb-30">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-events-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-events-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milEventsSlider}
          className="swiper-container mil-events-slider"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <Link href={item.link} className="mil-card-2">
              <div className="mil-cover-frame">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="mil-description">
                <ul className="mil-speakers">
                  {item.speakers.map((element, key) => (
                  <li className="mil-speaker">
                    <img src={element.image} alt={element.alt} />
                  </li>
                  ))}
                </ul>
                <div className="mil-card-title">
                  <p className="mil-category mil-text-sm mil-mb-15">
                    {item.category}
                  </p>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Home2EventsSlider;
