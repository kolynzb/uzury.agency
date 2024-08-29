import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Team = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Team"} pageTitle={"Leadership Team"} />
      {/* team */}
      <section className="mil-team mil-p-120-60">
        <div className="container">
          <h3 className="mil-text-center mil-mb-120">
            It is a long established fact that a{" "}
            <span className="mil-accent">
              reader will be <br />
              distracted
            </span>{" "}
            by the readable content.
          </h3>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/1.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                <p>CEO ITSulu</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/2.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Jane Meldrum</h4>
                <p>Designer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link
                href="team-single"
                className="mil-team-card mil-mb-60 mil-mb-30"
              >
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/3.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Roy Ellawala</h4>
                <p>App Developer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/4.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Andrew Kazantzis</h4>
                <p>CEO ITSulu</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/5.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Jane Meldrum</h4>
                <p>Designer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="img/faces/6.jpg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Roy Ellawala</h4>
                <p>App Developer</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* team end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* icon boxes */}
      <section className="mil-icon-boxes mil-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between mil-mb-90">
            <div className="col-xl-6">
              <h2>
                Values that <span className="mil-accent">Lead Us</span>
              </h2>
            </div>
            <div className="col-xl-5">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">01.</span>&nbsp; Productivity
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">02.</span>&nbsp; Transparency
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">03.</span>&nbsp; Personality
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">
                  <span className="mil-accent">04.</span>&nbsp; Volition
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* icon boxes end */}
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
              Let’s <span className="mil-accent">Open the World</span> of IT to
              You
            </h2>
            <p className="mil-light-soft mil-mb-60">
              It is a long established fact that a reader will be distracted by
              the readable content <br /> of a page when looking at its layout.
            </p>
            <a href="#." className="mil-button mil-border mil-light">
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </Layouts>
  );
};
export default Team;
