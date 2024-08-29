import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";

const CareersBannerSlider = dynamic(
  () => import("@/src/components/sliders/CareersBannerSlider"),
  {
    ssr: false,
  }
);
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts"), { ssr: false } );

const Careers = (props) => {
  return (
    <Layouts>
      <PageBanner pageName={"Careers"} pageTitle={"Careers"} />
      {/* careers */}
      <section className="mil-careers mil-p-120-90">
        <div className="container">
          <div className="row justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h3 className="mil-mb-30">
                Inspire and Get Inspired by <br />
                <span className="mil-accent">Professional</span> Experts
              </h3>
            </div>
            <div className="col-xl-4">
              <p>
                It uses a dictionary of over{" "}
                <span className="mil-accent">200 Latin words</span>, combined
                with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable.
              </p>
            </div>
          </div>
          <ul className="mil-vacancies-frame">
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">New York</span>
                  </div>
                  <h4>UI and Web Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Miami</span>
                  </div>
                  <h4>App Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge mil-badge-dark">Remote</span>
                    <span className="mil-text-sm mil-dark">Whole world</span>
                  </div>
                  <h4>Sell Agent</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="mil-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-vacancy-head mil-mb-15">
                    <span className="mil-badge">Full Time</span>
                    <span className="mil-text-sm mil-dark">Toronto</span>
                  </div>
                  <h4>UI/UX Designer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 mil-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 mil-mb-30">
                  <div className="mil-adaptive-right">
                    <a href="#." className="mil-button mil-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* careers end */}
      {/* about */}
      <section className="mil-about mil-deep-bg mil-p-120-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Work With Us
              </span>
              <h2 className="mil-mb-30">
                Why <span className="mil-accent">Choose</span> Us?
              </h2>
              <p className="mil-mb-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <p className="mil-mb-50">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod facer possim assum.
              </p>
              <div className="mil-buttons-frame">
                <a href="#." className="mil-button mil-border">
                  <span>Read more</span>
                </a>
                <a href="#." className="mil-link">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="mil-about-illustration-2">
                <div className="mil-image-frame">
                  <img src="img/photo/8.jpg" alt="Office" />
                </div>
                <a href="#." className="mil-play-button">
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-counters mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">20</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Years of Experience In The IT Industry</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">705</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Satisfied Clients We Have Served Globally</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">280</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Recognitions Over Two Decades</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <h2 className="mil-mb-20">72</h2>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Awards &amp; Certifications Of Our Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      {/* banners slider */}
      <CareersBannerSlider />
      {/* banners slider end */}
      {/* partners */}
      <div className="mil-partners mil-p-90-60">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      {/* partners end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* blog */}
      <LatestPostsSlider posts={props.posts} />
    </Layouts>
  );
};
export default Careers;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}
