import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

import dynamic from "next/dynamic";
const Solution2LeftTabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2LeftTabSlider"),
  {
    ssr: false,
  }
);

const Solution2ReviSlider = dynamic(
  () => import("@/src/components/sliders/Solution2ReviSlider"),
  {
    ssr: false,
  }
);

const Solution2TabSlider = dynamic(
  () => import("@/src/components/sliders/Solution2TabSlider"),
  {
    ssr: false,
  }
);

const Solution2 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solution"} pageTitle={"Big data"} />
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <h2 className="mil-mb-60">
            Making <span className="mil-accent">Business</span> Sense of{" "}
            <span className="mil-accent">Your Data</span> for Any User,
            <br /> Anytime, Anywhere
          </h2>
          <p className="mil-mb-60">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <div className="row">
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/17.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">
                      Enable a Single Source <br />
                      of Truth
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/19.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">
                      Democratize Your <br />
                      Data Safely
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/18.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">
                      Foster a Data Culture For Efficiency
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-hover-card mil-price-card mil-card-only-30 mil-mb-30">
                <div className="mil-icon-box-2">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                    <img src="img/icons/md/11.svg" alt="icon" />
                  </div>
                  <div className="mil-box-text">
                    <h6 className="mil-box-text">
                      Scale UP With an AI-Ready Infrastructure
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}

      <Solution2ReviSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <Solution2TabSlider />
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* left nav tabs */}
      <Solution2LeftTabSlider />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "15%" }} />
        <div className="container">
          <div className="mil-text-center mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              A Great Service
            </span>
            <h2 className="mil-mb-30">
              Values That <span className="mil-accent">Lead Us</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-20">Productivity</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-20">Transparency</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-20">Personality</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-20">Volition</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
      {/* contact end */}
    </Layouts>
  );
};
export default Solution2;
