import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Contact = () => {
  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="mil-contact mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <form>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">01.</span> Tell Us About Yourself
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>First Name</span>
                      </label>
                      <input type="text" placeholder="John" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Last Name</span>
                      </label>
                      <input type="text" placeholder="Jones" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Email Address</span>
                      </label>
                      <input type="email" placeholder="doe@mydomain.com" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Company</span>
                      </label>
                      <input type="text" placeholder="Your company name" />
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Role</span>
                      </label>
                      <input type="text" placeholder="Your role" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">02.</span> What Can We Help You
                  With?
                </h4>
                <div className="row">
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Product Design</span>
                      </label>
                      <input type="text" placeholder="Web Designer" />
                    </div>
                  </div>
                </div>
                <h4 className="mil-mb-60">
                  <span className="mil-accent">03.</span> Tell Us About Your
                  Project
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="mil-shortened"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mil-attach-frame mil-dark mil-mb-30">
                      <i className="fas fa-paperclip" />
                      <label className="mil-custom-file-input">
                        <span>Attach your file</span>
                        <input type="file" id="mil-file-input" />
                      </label>
                      <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                    </div>
                  </div>
                  <div className="col-lg-6 mil-mb-30">
                    <div className="mil-input-frame mil-dark-input mil-mb-30">
                      <label className="mil-h6 mil-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" placeholder={123} />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button className="mil-button mil-border mil-fw">
                      <span>Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Support Request</h5>
                <p className="mil-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link href="contact" className="mil-link mil-link-sm">
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Need Help?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="mil-list-title mil-mb-30">Needs More Info?</h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="mil-divider mil-mb-60" />
              <Link href="contact" className="mil-link mil-link-sm mil-mb-15">
                <span>Legality Guide</span>
                <i className="fas fa-arrow-right" />
              </Link>
              <br />
              <Link href="contact" className="mil-link mil-link-sm">
                <span>Security Center</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="mil-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.289421122936!2d-74.0577166!3d40.7107384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250aee3ee6da7%3A0xe8a316c6c836011f!2sBuddy's%20JC!5e0!3m2!1sen!2sua!4v1682071433844!5m2!1sen!2sua"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container" />
      </div>
      {/* map end */}
      {/* contact info */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">United States</h4>
                <h5 className="mil-list-title mil-mb-15">New York</h5>
                <p className="mil-mb-30">
                  525, North Tryon Street, Suite 1600, Charlotte, NC 28202-0213
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">usa</span>.support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">Germany</h4>
                <h5 className="mil-list-title mil-mb-15">Berlin</h5>
                <p className="mil-mb-30">
                  501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat
                  - 380060
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">germany</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <h4 className="mil-mb-30">France</h4>
                <h5 className="mil-list-title mil-mb-15">Paris</h5>
                <p className="mil-mb-30">
                  397 Bedford Highway, Suite 323 Halifax NS B3M 2L3 Science City
                  Road
                </p>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h6 className="mil-mb-15">
                  <span className="mil-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="mil-accent">france</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
