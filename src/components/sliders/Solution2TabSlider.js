import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2TabSlider = () => {
  return (
    <section className="mil-p-120-120">
      <div className="mil-deco" style={{ top: 0, left: "15%" }} />
      <div className="container">
        <div className="mil-text-center mil-mb-90">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            A Great Service
          </span>
          <h2 className="mil-mb-30">
            Supercharge <span className="mil-accent">Your Data</span> With
          </h2>
        </div>
        <div className="mil-tab-buttons mil-tab-buttons-2 mil-mb-90">
          <a href="#tab1" className="mil-active">
            <div>
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                <img src="img/icons/md/20.svg" alt="icon" />
              </div>
              <h6>DataOps</h6>
            </div>
          </a>
          <a href="#tab2">
            <div>
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-15">
                <img src="img/icons/md/21.svg" alt="icon" />
              </div>
              <h6>MLOps</h6>
            </div>
          </a>
        </div>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div data-swiper-parallax-y={-100} data-swiper-parallax-opacity={0}>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Solution2TabSlider;
