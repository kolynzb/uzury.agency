const ContactForm = () => {
  return (
    <section className="mil-contact mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "10%" }}
      />
      <div className="container">
        <h2 className="mil-light mil-mb-90">
          Contact <span className="mil-accent">Me</span>
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
                <input type="email" placeholder="Your Email" />
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
                We will process your personal information in accordance with our
                Privacy Policy.
              </p>
              <div className="mil-checbox-frame mil-mb-60">
                <input
                  className="mil-checkbox"
                  id="checkbox-1"
                  type="checkbox"
                  defaultValue="value"
                />
                <label htmlFor="checkbox-1" className="mil-text-sm mil-light">
                  I would like to be contacted with news and updates about your{" "}
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
  );
};
export default ContactForm;
