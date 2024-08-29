import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution3BoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution3BoxSlider"),
  {
    ssr: false,
  }
);
const Solution3ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution3ReviSlider"),
  {
    ssr: false,
  }
);
const Solution3TabsSlider = dynamic(
  () => import("@/src/components/sliders/Solution3TabsSlider"),
  {
    ssr: false,
  }
);

const Solution3 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solution"} pageTitle={"IoT development"} />
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-text-center mil-mb-90">
            End-to-End <span className="mil-accent">IoT Software</span>{" "}
            Development
          </h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">
                  Embedded <br />
                  IoT Solutions
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">
                  IoT Cloud Platforms and Dashboards
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">
                  IoT Mobile <br />
                  App Development
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore facilisis.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-p-0-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/16.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Smarthome Technology</h3>
              <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover mil-type-2">
                <img src="img/photo/17.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Medical IoT</h3>
              <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/18.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Apps For Wearables</h3>
              <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-30">
              <div className="mil-project-cover">
                <img src="img/photo/19.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-30">
              <h3 className="mil-mb-30">Industrial IoT Solutions</h3>
              <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#." className="mil-link">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <Solution3ReviSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* left nav tabs */}
      <Solution3TabsSlider />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* reviews */}
      <Solution3BoxSlider />
      {/* reviews end */}
    </Layouts>
  );
};
export default Solution3;
