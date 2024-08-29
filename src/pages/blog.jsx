import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Blog"} pageTitle={"Our Blog"} />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <Link href="publication" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/1.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/2.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication" className="mil-card mil-mb-60">
                <div className="mil-cover-frame">
                  <img src="img/blog/3.jpg" alt="project" />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">About ITSulu</h5>
                <p className="mil-mb-30">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt.
                </p>
                <Link href="team-single" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent">Jane Meldrum</h4>
                    <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <form className="mil-sidebar-input-frame mil-mb-60">
                <input
                  type="text"
                  className="mil-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Recent Posts</h5>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/6.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>The World’s Fastest 2 Qubit Qate</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/5.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Build Your Money Machine, Take Control</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/4.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Android App For Shaving Products Drive</h6>
                  </div>
                </Link>
                <Link href="publication" className="mil-post-sm mil-mb-15">
                  <div className="mil-cover-frame">
                    <img src="img/blog/3.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h6>Positioning Your Self As a Pro Consultant</h6>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Categories</h5>
                <ul className="mil-hover-link-list">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Management</a>
                  </li>
                  <li>
                    <a href="#.">Software</a>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Tags</h5>
                <ul className="mil-tags">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">General</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Learning</a>
                  </li>
                </ul>
              </div>
              <div className="mil-divider mil-mb-60" />
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Newsletter</h5>
                <form className="mil-sidebar-input-frame">
                  <input
                    type="text"
                    className="mil-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h5 className="mil-list-title mil-mb-30">Contact us</h5>
              <p className="mil-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <Link href="contact" className="mil-link">
                <span>Send</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;
