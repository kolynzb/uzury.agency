const Footer2 = () => {
  return (
    <footer className="mil-dark-bg">
      <img src="img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">
                Join The <span className="mil-accent">ITSulu</span> Experience
              </h3>
              <p className="mil-light-soft">
                Duis autem vel eum iriure dolor in hendrerit in vulputate.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <form className="mil-subscribe-form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="mil-button mil-accent-bg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="mil-divider mil-light" />
          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="mil-logo mil-mb-60"
                style={{ width: 140 }}
              />
              <p
                className="mil-light mil-light-soft"
                style={{ marginBottom: 45 }}
              >
                2307 Beverley Rd Brooklyn, <br />
                New York 11226 USA.
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent">+07</span>&nbsp;
                  <span className="mil-light-soft">0 002 00 05</span>
                </li>
                <li>
                  <span className="mil-accent">info</span>
                  <span className="mil-light mil-light-soft">
                    @mydomain.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Social</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="#.">Facebook</a>
                    </li>
                    <li>
                      <a href="#.">Instagram</a>
                    </li>
                    <li>
                      <a href="#.">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#.">Twitter</a>
                    </li>
                    <li>
                      <a href="#.">YouTube</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">
                    Support
                  </h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="#.">Documentation</a>
                    </li>
                    <li>
                      <a href="#.">Support</a>
                    </li>
                    <li>
                      <a href="#.">FAQs</a>
                    </li>
                    <li>
                      <a href="#.">Download</a>
                    </li>
                    <li>
                      <a href="#.">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="#.">About Us</a>
                    </li>
                    <li>
                      <a href="#.">Terms &amp; condition</a>
                    </li>
                    <li>
                      <a href="#.">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#.">Partners</a>
                    </li>
                    <li>
                      <a href="#.">Press</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
export default Footer2;
