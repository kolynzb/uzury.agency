const DefaultFooter = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content mil-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="mil-logo mil-mb-30"
                style={{ width: 140 }}
              />
              <p className="mil-light-soft mil-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <a href="#." className="mil-app-btn mil-mb-5">
                <i className="fab fa-google-play" />
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    Available on the
                  </span>
                  <div className="mil-h6">Google Play</div>
                </div>
              </a>
              <a href="#." className="mil-app-btn">
                <i className="fab fa-apple" />
                <div className="mil-app-text">
                  <span className="mil-accent mil-text-sm">
                    Download on the
                  </span>
                  <div className="mil-h6">App Store</div>
                </div>
              </a>
            </div>
            <div className="col-xl-7 mil-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 mil-mb-30">
                  <h3 className="mil-light mil-up-font mil-mb-30">
                    Join The <span className="mil-accent">ITSulu</span> <br />
                    Experience
                  </h3>
                  <p className="mil-light-soft">
                    Lorem ipsum dolor sit amet, consectetuer
                    <br /> adipiscing elit, sed diam nonummy.
                  </p>
                </div>
                <div className="col-lg-5 mil-mb-30">
                  <form>
                    <input
                      className="mil-rounded-input mil-text-center mil-mb-5"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="mil-button mil-accent-bg mil-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mil-divider mil-light" />
        <div className="mil-footer-links">
          <ul className="mil-social mil-light">
            <li className="mil-adapt-links">
              <a href="#.">Facebook</a>
              <a href="#.">FB</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">Instagram</a>
              <a href="#.">IG</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">LinkedIn</a>
              <a href="#.">IN</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">Twitter</a>
              <a href="#.">TW</a>
            </li>
            <li className="mil-adapt-links">
              <a href="#.">YouTube</a>
              <a href="#.">YT</a>
            </li>
          </ul>
          <ul className="mil-additional-links mil-light">
            <li>
              <a href="#.">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#.">Privacy Policy</a>
            </li>
            <li>
              <a href="#.">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© ITSulu 2023.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default DefaultFooter;
