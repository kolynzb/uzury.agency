import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const PriceTestimonialSlider = dynamic(
  () => import("@/src/components/sliders/PriceTestimonialSlider"),
  {
    ssr: false,
  }
);
const Prices = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Pricing"} pageTitle={"Pricing and plans"} />
      {/* prices */}
      <section className="mil-prices mil-p-120-0">
        <div className="container">
          <h3 className="mil-text-center mil-mb-120">
            Get <span className="mil-accent">2 months</span> free by choosing
            ITSulu annual plan
          </h3>
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-hover-card mil-price-card mil-mb-30">
                <p className="mil-mb-15">For People</p>
                <h2>PLUS</h2>
                <div className="mil-plan-price mil-mb-15">
                  <h3 className="mil-accent">$9</h3>
                  <span>Per Month</span>
                </div>
                <p className="mil-text-sm mil-mb-60">2TB (2000 GB), 1 User</p>
                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="mil-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li className="mil-empty">
                    There many variations of passages
                  </li>
                  <li className="mil-empty">All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-price-card mil-mb-30">
                <p className="mil-mb-15">For Independent Workers</p>
                <h2>PRO</h2>
                <div className="mil-plan-price mil-mb-15">
                  <h3 className="mil-accent">$99</h3>
                  <span>Per Month</span>
                </div>
                <p className="mil-text-sm mil-mb-60">4TB (4000 GB), 4 User</p>
                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="mil-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li className="mil-empty">All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-price-card mil-mb-30">
                <p className="mil-mb-15">Startup</p>
                <h2>GOLD</h2>
                <div className="mil-plan-price mil-mb-15">
                  <h3 className="mil-accent">$299</h3>
                  <span>Per Month</span>
                </div>
                <p className="mil-text-sm mil-mb-60">
                  All the necessary space, Unlimited
                </p>
                <a href="#." className="mil-button mil-border mil-fw mil-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="mil-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-lx-12 mil-p-90-120">
              <h3 className="mil-text-center">
                Do you only need <span className="mil-accent">9GB</span> to save
                and share your files?
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* prices end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* reviews */}
      <PriceTestimonialSlider />
      {/* reviews end */}
      {/* call to action */}
      <section className="call-to-action mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "15%" }}
        />
        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-60">
              <img src="img/icons/md/6l.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Leadership Team</p>
            <h2 className="mil-light mil-mb-30">
              <span className="mil-accent">ITSulu</span> in The Future
            </h2>
            <p className="mil-light-soft mil-mb-60">
              It is a long established fact that a reader will be distracted by
              the readable content <br /> of a page when looking at its layout.
            </p>
            <a href="#." className="mil-button-with-label">
              <div className="mil-button mil-border mil-icon-button mil-light">
                <span>
                  <i className="fas fa-play" />
                </span>
              </div>
              <span className="mil-light">Watch Video</span>
            </a>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </Layouts>
  );
};
export default Prices;
