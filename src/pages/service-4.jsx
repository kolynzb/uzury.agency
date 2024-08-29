import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Service4Courses = dynamic(
  () => import("@/src/components/sliders/Service4Courses"),
  {
    ssr: false,
  }
);
const Service4 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"Cybersecurity"} />
      {/* about */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <div
                className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/t4.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <h2 className="mil-mb-30">
                Protect Your IT Environments With{" "}
                <span className="mil-accent">Powerful Cloud Security</span>{" "}
                Solutions and Always on Support
              </h2>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Our{" "}
                  <span className="mil-accent">certified cloud security</span>{" "}
                  experts help protect your environments across hyperscale
                  public and private clouds so you can run your business
                  confidence.
                </p>
              </div>
              <a href="#." className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Discover Our Company
              </span>
              <h2 className="mil-mb-30">
                Explore <span className="mil-accent">Cloud Security</span>{" "}
                Solutions
              </h2>
              <p className="mil-mb-90">
                The import ContactForm from "@/src/components/ContactForm";
                import Layouts from "@/src/layouts/Layouts"; constant evolution
                of threats and the race for more sophisticated tools to combat
                them means that security is changing rapidly.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">Application Security</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">Data Protection</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Network Security</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-30">Security Strategy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>V</h3>
                </div>
                <h5 className="mil-mb-30">Detection and Response</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>VI</h3>
                </div>
                <h5 className="mil-mb-30">Elastic Engineering</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-mb-90">
                Boost Your <span className="mil-accent">Advantage</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>I</h3>
              </div>
              <h5 className="mil-mb-30">
                Cloud Native <br />
                Security Services
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>II</h3>
              </div>
              <h5 className="mil-mb-30">
                Multi <br />
                Cloud Security
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>III</h3>
              </div>
              <h5 className="mil-mb-30">
                On Site Security <br />
                and Compliance
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>IV</h3>
              </div>
              <h5 className="mil-mb-30">
                Consectetur <br />
                adipiscing elit
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-light mil-mb-90">
                Do You Know what Your{" "}
                <span className="mil-accent">Cybersecurity</span> Risk Score Is?
              </h2>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                By answering these simple questions about your cybersecurity
                technology, processes, and people, you'll receive a
                cybersecurity risk score against our baseline that can help you
                identify common security gaps in your environment that you may
                not be aware of.
              </p>
              <a href="#." className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* courses */}
      <Service4Courses />
      {/* courses end */}
      {/* contact */}
      <section className="mil-contact mil-gradient-bg mil-p-120-0">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: 0, right: "10%" }}
        />
        <div className="container">
          <h2 className="mil-light mil-mb-90">
            Contact <span className="mil-accent">Us</span>
          </h2>
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Name</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input type="text" placeholder="Enter Your Name Here" />
                </div>
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Email Adress</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <input type="email" id="email" placeholder="Your Email" />
                </div>
                <div className="mil-input-frame mil-mb-60">
                  <label>
                    <span className="mil-light">Phone</span>
                    <span className="mil-light-soft">Optional</span>
                  </label>
                  <input type="number" placeholder="Your Phone" />
                </div>
                <div className="mil-attach-frame mil-mb-60">
                  <i className="fas fa-paperclip" />
                  <label className="mil-custom-file-input">
                    <span>Attach your file</span>
                    <input type="file" id="mil-file-input" />
                  </label>
                  <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mil-input-frame mil-mb-30">
                  <label>
                    <span className="mil-light">Email Adress</span>
                    <span className="mil-accent">Required</span>
                  </label>
                  <textarea placeholder="Your Message" defaultValue={""} />
                </div>
                <p className="mil-text-sm mil-light-soft mil-mb-15">
                  We will process your personal information in accordance with
                  our Privacy Policy.
                </p>
                <div className="mil-checbox-frame mil-mb-60">
                  <input
                    className="mil-checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    defaultValue="value"
                  />
                  <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                    I would like to be contacted with news and updates about
                    your{" "}
                    <a href="#." className="mil-accent">
                      events and services
                    </a>
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button className="mil-button mil-accent-bg mil-fw">
                  <span>Send Message Now</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* contact end */}
    </Layouts>
  );
};
export default Service4;
