import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const TeamSingle = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <div className="row justify-content-between">
              <div className="col-lg-6 mil-adaptive-center">
                <Link href="team" className="mil-link link-left mil-mb-30">
                  <i className="fas fa-arrow-left" />
                  <span>Go Back</span>
                </Link>
                <h2 className="mil-uppercase mil-mb-30">Hayman Andrews</h2>
                <p>Engineering</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src="img/faces/t1.png" alt="Hayman Andrews" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* team member */}
      <section className="mil-team mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h3 className="mil-mb-30">Biography</h3>
              <p className="mil-mb-60">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                id, repudiandae ducimus ipsam magni neque iste provident fugiat
                laboriosam officia repellendus dolores enim perspiciatis a
                cupiditate nihil.
              </p>
              <ul className="mil-timeline">
                <li>
                  <h5 className="mil-mb-5">Capital Agency</h5>
                  <p className="mil-text-sm">2014-1017</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Under Inc</h5>
                  <p className="mil-text-sm">2017-1019</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">ITSulu Group</h5>
                  <p className="mil-text-sm">2019-Today</p>
                </li>
              </ul>
              <p className="mil-mb-60">
                Typi non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima. Eodem modo typi, qui
                nunc nobis videntur parum clari, fiant sollemnes in futurum.
                Duis autem vel eum iriure dolor in hendrerit.
              </p>
              <div className="mil-divider mil-mb-60" />
              <div className="row">
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Wearable Dev</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Design Analytics</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Content Strategy</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
              </div>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-30">Skills</h3>
              <p className="mil-mb-60">
                Typi non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima.
              </p>
              <div className="mil-divider mil-mb-60" />
              <h3 className="mil-mb-60">Social</h3>
              <ul className="mil-social-links mil-mb-30">
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
              </ul>
            </div>
            <div className="col-md-3 col-lg-3 col-lg-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30">
                  ITSulu allowed me to grow and{" "}
                  <span className="mil-accent">reach goals</span> that I never
                  imagined.
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Hayman Andrews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default TeamSingle;
