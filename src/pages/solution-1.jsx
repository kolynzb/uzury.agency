import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Solution1About = dynamic(
  () => import("@/src/components/sliders/Solution1About"),
  {
    ssr: false,
  }
);
const Solution1MilBoxSlider = dynamic(
  () => import("@/src/components/sliders/Solution1MilBoxSlider"),
  {
    ssr: false,
  }
);
const SolutionMilReviSlider = dynamic(
  () => import("@/src/components/sliders/SolutionMilReviSlider"),
  {
    ssr: false,
  }
);
const Solution1 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner
        pageName={"Solution"}
        pageTitle={"AI consulting and development"}
      />

      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqu
                  quis ipsum suspendisse ultrices gravida.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-button mil-border mil-mb-30">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* title */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Consulting and Development
            </span>
            <h2>
              AI Consulting and Development Company <br /> With{" "}
              <span className="mil-accent">Extensive Know How</span>
            </h2>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* about */}
      <Solution1About />
      {/* about end */}
      {/* title */}
      <section className="mil-p-120-0">
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Artificial Intelligence Consulting
            </span>
            <h2>Artificial Intelligence Solutions in Focus</h2>
          </div>
        </div>
      </section>
      {/* title end */}
      {/* ??? */}
      <Solution1MilBoxSlider />
      {/* ??? end */}
      {/* ??? */}
      <SolutionMilReviSlider />
      {/* ??? end */}
      {/* call to action */}
      <section className="call-to-action mil-gradient-bg mil-p-120-120">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, left: "15%" }}
        />
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
        />
        <div className="container mil-text-center">
          <div className="mil-cta-frame">
            <div className="mil-icon-frame mil-icon-frame-md mil-mb-50">
              <img src="img/icons/md/13l.svg" alt="icon" />
            </div>
            <p className="mil-light mil-mb-30">Cybersecurity Ventures</p>
            <h3 className="mil-light">
              The Estimated Global Cost of{" "}
              <span className="mil-accent">Cybercrime</span> is{" "}
              <span className="mil-accent">$6T</span> <br />
              and Climbing <span className="mil-accent">+ 15%</span> a Year.
            </h3>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* tech stack */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Our Tools
          </span>
          <h2 className="mil-mb-90">
            AI Development <span className="mil-accent">Tech Stack</span>
          </h2>
          <div className="row mil-grid-lines">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>JavaScript</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Python</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>GCloud</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Java</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>MySQL</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>ONNX</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Kotlin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Swift</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>PHP</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>MariaDB</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>AWS</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>React</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tech stack end */}
    </Layouts>
  );
};
export default Solution1;
