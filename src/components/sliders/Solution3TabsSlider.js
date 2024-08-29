import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Solution3TabsSlider = () => {
  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Data Analytics Expertise
        </span>
        <h2 className="mil-mb-90">
          IoT Development and Implementation{" "}
          <span className="mil-accent">Roadmap</span>
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li>
                <a href="#tab-l-1" className="mil-h4 mil-active">
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="mil-h4">
                  MVP Development
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="mil-h4">
                  MVP Rollout and Testing
                </a>
              </li>
              <li>
                <a href="#tab-l-4" className="mil-h4">
                  IoT Scaling
                </a>
              </li>
              <li>
                <a href="#tab-l-5" className="mil-h4">
                  IoT Ecosystem Setup
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
            >
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/24.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/21.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/20.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solution3TabsSlider;
