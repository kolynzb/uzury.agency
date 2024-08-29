import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <Layouts noHeader noFooter>
      {/* top bar */}
      <div className="mil-top-position mil-fixed">
        <div className="mil-top-panel mil-top-panel-transparent mil-animated">
          {/* mil-top-panel-transparent */}
          <div className="container-fluid">
            <Link href="/" style={{ width: 140 }} >
              <Image src="/logo/logo.svg" className="" style={{
                filter: "brightness(0) invert(1)"
              }} width={100} height={100} />
            </Link>
            <div className="mil-navigation">
              <p className="mil-light">
                We Provide{" "}
                <span className="mil-accent m-3">
                  Design &amp; IT Solutions
                </span>{" "}
                For Enterprise
              </p>
            </div>
            {/* mobile menu button */}
            <div className="mil-menu-btn">
              <span />
            </div>
            {/* mobile menu button end */}
          </div>
        </div>
      </div>
      {/* top bar end */}
      {/* coming soon */}
      <div className="mil-dark-bg mil-add-page">
        <img
          src="https://bslthemes.com/html/itsulu/img/photo/20.jpg"
          alt="background"
          className="mil-background-image"
        />
        <div className="mil-overlay" />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <h1 className="mil-light mil-mb-15">
                Coming <span className="mil-accent">Soon</span>
              </h1>
              <p className="mil-light-soft">We are working on our website.</p>
            </div>
            <div className="col-xl-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h4 className="mil-light mil-mb-30">
                    Join The <span className="mil-accent">Uzury</span>
                    <br /> Experience
                  </h4>
                </div>
                <div className="col-lg-7">
                  <p style={{ opacity: "0" }} className="mil-light-soft mil-mb-30">
                    Lorem ipsum dolor sit amet, consectetuer <br />
                    adipiscing elit sed diam nonummy.
                  </p>
                </div>
              </div>
              <form className="mil-subscribe-form mil-mb-30">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-accent-bg">
                  Subscribe Now
                </button>
              </form>
              <a href="tel:0784330349" className="mil-link mil-light">
                <span>Contact Us</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon end */}
      <div className="mil-addition-bottom">
        <div className="container-fluid">
          <p className="mil-text-sm mil-light-soft">© Uzury 2024.</p>
          <p className="mil-text-sm mil-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </Layouts>
  );
};
export default ComingSoon;
