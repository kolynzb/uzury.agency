import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Event = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm-3">
        <img
          src="img/photo/13.jpg"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          data-swiper-parallax={-100}
          data-swiper-parallax-scale="1.1"
          alt="image"
        />
        <div className="mil-overlay" />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <div className="row justify-content-between">
              <div className="col-xl-6">
                <span className="mil-suptitle mil-light mil-suptitle-2 mil-mb-30">
                  Our Latest News
                </span>
                <h2 className="mil-light mil-mb-60">
                  Technical <span className="mil-accent">Controls</span> To Stop
                  Social Engineering
                </h2>
                <ul className="mil-simple-list mil-mb-50">
                  <li>
                    <span className="mil-light">Thursday, Jul. 20, 2023</span>
                  </li>
                  <li>
                    <span className="mil-light">2:00 pm ET - 11:00 am PT</span>
                  </li>
                </ul>
                <p className="mil-light-soft mil-mb-120">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas.
                </p>
              </div>
              <div className="col-xl-5 mil-relative">
                <form className="mil-event-form">
                  <h4 className="mil-mb-60 mil-text-center">
                    Reserve Your Spot
                  </h4>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>First Name</span>
                      <span className="mil-accent">Required</span>
                    </label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Last Name</span>
                      <span className="mil-accent">Required</span>
                    </label>
                    <input type="text" placeholder="Doe" />
                  </div>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Company Name</span>
                      <span className="mil-dark-soft">Optional</span>
                    </label>
                    <input type="text" placeholder="Agency Designs Inc." />
                  </div>
                  <div className="mil-input-frame mil-dark-input mil-mb-30">
                    <label className="mil-h6 mil-dark">
                      <span>Email Address</span>
                      <span className="mil-accent">Required</span>
                    </label>
                    <input type="email" placeholder="email@mydomain.com" />
                  </div>
                  <p className="mil-text-sm mil-mb-30">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Nam liber tempor cum
                    soluta nobis eleifend option congue nihil imperdiet doming
                    id quod mazim placerat facer possim assum.
                  </p>
                  <div className="mil-checbox-frame mil-dark-input mil-mb-30">
                    <input
                      className="mil-checkbox"
                      id="checkbox-1"
                      type="checkbox"
                      defaultValue="value"
                    />
                    <label htmlFor="checkbox-1" className="mil-text-sm">
                      I agree to receive other communications from{" "}
                      <span className="mil-accent">ITSulu.</span>
                    </label>
                  </div>
                  <p className="mil-text-sm mil-mb-30">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi.
                  </p>
                  <Link href="contact" className="mil-button mil-border mil-fw">
                    <span>Submit Now</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-banner-panel">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h6>
                Digital <span className="mil-accent">Transformation</span>{" "}
                Services &amp; Why It Matters Webinar
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* description */}
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-mb-60">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum.
              </p>
              <h4 className="mil-mb-60">In This Session, We'll Talk About:</h4>
              <ul className="mil-check-icon-list mil-mb-60">
                <li className="mil-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">New Multichannel TTPs</span>
                </li>
                <li className="mil-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">
                    The role of Natural Language Understanding
                  </span>
                </li>
                <li className="mil-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">
                    Augmenting Security Training with Defensive Layers
                  </span>
                </li>
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="mil-dark">
                    Contextual Analysis of Inbound and Outbound Messaging
                  </span>
                </li>
              </ul>
              <div className="mil-divider mil-mb-60" />
              <h4 className="mil-mb-60">Speakers:</h4>
              <div className="row mil-mb-30">
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="mil-post-sm mil-top-text mil-mb-30"
                  >
                    <div className="mil-cover-frame">
                      <img src="img/faces/2.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h5 className="mil-mb-10">Jane Meldrum</h5>
                      <p className="mil-text-sm">
                        VP, Research Director <br />
                        ITSulu Agent
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="mil-post-sm mil-top-text mil-mb-30"
                  >
                    <div className="mil-cover-frame">
                      <img src="img/faces/3.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h5 className="mil-mb-10">Jane Meldrum</h5>
                      <p className="mil-text-sm">
                        VP, Research Director <br />
                        ITSulu Agent
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="mil-post-sm mil-top-text mil-mb-30"
                  >
                    <div className="mil-cover-frame">
                      <img src="img/faces/4.jpg" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h5 className="mil-mb-10">Jane Meldrum</h5>
                      <p className="mil-text-sm">
                        VP, Research Director <br />
                        ITSulu Agent
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h4 className="mil-mb-60">Recommended Resources:</h4>
              <div className="row mil-mb-60">
                <div className="col-lg-3">
                  <p className="mil-dark mil-mt-15 mil-mb-30">Podcast:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="mil-rec-res">
                    <li className="mil-dark">
                      <a href="#.">
                        <span>Big Data and Designs Tallks with Experts</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>
                          Best Way to Learn New Skills is by Maria Perez
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>
                          Ask the Expert About Business Startups and Ideas
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mil-mb-60">
                <div className="col-lg-3">
                  <p className="mil-dark mil-mt-15 mil-mb-30">Blog:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="mil-rec-res">
                    <li className="mil-dark">
                      <a href="#.">
                        <span>Career Programmer Webinar with Roy Walker</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>How to Differentiate Between Business</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>
                          Code and Hacking, Live Online Lessons &amp; eLearning
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <p className="mil-dark mil-mt-15 mil-mb-30">Courses:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="mil-rec-res">
                    <li className="mil-dark">
                      <a href="#.">
                        <span>Communication Skills Master Class for Code</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>The Best Online Professional Hacking</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="mil-dark">
                      <a href="#.">
                        <span>
                          Microsoft Access Master Class, From Beginner
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Event;
