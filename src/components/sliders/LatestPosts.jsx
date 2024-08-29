import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../common/sliderProps";
import SectionData from "../../data/sliders/latest-posts.json";

const LatestThinking = ( {posts} ) => {

  const latestPosts = [];

  posts.slice(0, SectionData.numOfItems).forEach((post, index) => {
    let s_class1 = 'mil-slide-25';
    let s_class2 = 'mil-card-sm mil-reverse-sm';
    let s_type = 'two';

    if ( ((index) % 3) == 0 || index == 0 ) {
      s_class1 = 'mil-slide-50';
      s_class2 = '';
      s_type = 'one';
    }
    if ( ((index+1) % 3) == 0 ) {
      s_class2 = 'mil-card-sm';
      s_type = 'three';
    }
    let newobj = Object.assign({}, post, { "tempType": s_type, "classOne" :  s_class1, "classTwo": s_class2 });
    latestPosts.push(newobj);
  });

  return (
    <section className="mil-blog mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, right: "30%" }} />
      <div className="container">
        <div className="row align-items-center mil-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {SectionData.subtitle}
            </span>
            <h2>{SectionData.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right mil-mt-60-adapt">
              <div className="mil-slider-nav">
                <div className="mil-slider-btn-prev mil-blog-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="mil-h6">Prev</span>
                </div>
                <div className="mil-slider-btn-next mil-blog-next">
                  <span className="mil-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milBlogSlider}
          className="swiper-container mil-blog-slider mil-mb-90"
        >
          {latestPosts.map((item, key) => (
          <SwiperSlide className={`swiper-slide ${item.classOne}`}>
            <Link href="publication" className={`mil-card ${item.classTwo}`}>
              { item.tempType == 'one' &&
              <>
                <div className="mil-cover-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      {item.title}
                    </h4>
                    <h6>
                      by: <span className="mil-accent">{item.author}</span>
                    </h6>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {item.short}
                    </p>
                  </div>
                </div>
              </>
              }
              { item.tempType == 'two' &&
              <>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      {item.title}
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {item.short}
                    </p>
                  </div>
                </div>
                <div className="mil-cover-frame">
                  <img src={item.image} alt={item.title} />
                </div>
              </>
              }
              { item.tempType == 'three' &&
              <>
                <div className="mil-cover-frame">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <h4 className="mil-mb-20">
                      {item.title}
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      {item.short}
                    </p>
                  </div>
                </div>
              </>
              }
            </Link>
          </SwiperSlide>
          ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-12">
            <Link href={SectionData.button.link} className="mil-link">
              <span>{SectionData.button.label}</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestThinking;