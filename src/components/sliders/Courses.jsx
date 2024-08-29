import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/courses.json";

const Home2Courses = () => {
  return (
    <section className="mil-courses mil-deep-bg mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "40%" }} />
      <div
        className="mil-deco"
        style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <div className="row align-items-center mil-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {Content.subtitle}
            </span>
            <h2 className="mil-mb-30">{Content.title}</h2>
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
          className="swiper-container mil-courses-slider mil-mb-90"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <a href="#." className="mil-card">
              <div className="mil-cover-frame mil-mb-15">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="mil-description">
                <div className="mil-fw-descr">
                  <div className="mil-card-top">
                    <ul className="mil-bages mil-mb-15">
                      {item.tags.map((tag) => (
                      <li className="mil-dark">{tag}</li>
                      ))}
                    </ul>
                    <div className="mil-stars mil-mb-15">
                      <span className="mil-dark">{item.rating}</span>
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
                  <h4 className="mil-mb-15">{item.title}</h4>
                  <p className="mil-text-sm mil-mb-15">{item.author}</p>
                  { item.price.format == 'free' &&
                  <div className="mil-text-lg mil-bold mil-accent">{item.price.value}</div>
                  }
                  { item.price.format == 'default' &&
                  <div className="mil-text-lg mil-dark mil-bold">{item.price.value}</div>
                  }
                  { item.price.format == 'sale' &&
                  <div className="mil-text-lg mil-bold">
                    <s className="mil-text-sm">{item.price.old}</s> &nbsp;{" "}
                    <span className="mil-accent">{item.price.value}</span>
                  </div>
                  }
                </div>
              </div>
            </a>
          </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <a href={Content.button.link} className="mil-link">
              <span>{Content.button.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home2Courses;
