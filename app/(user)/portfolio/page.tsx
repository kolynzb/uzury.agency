import PageBanner from "@/components/page-banner";
import Layouts from "@/layouts";
import Link from "next/link";
import cn from "classnames";

const Portfolio = () => {
  const caseStudies = []
  return (
    <Layouts>p
      <PageBanner pageName={"Works"} pageTitle={"Case Studies"} />
      {/* portfolio */}
      <section className="mil-p-120-120">
        <div className="container">
          {caseStudies.map((study, index) => (
              <div
                  key={study.id}

                  className={cn("row justify-content-between align-items-center",{
                    "flex-sm-row-reverse" : index % 2 === 1
                  })}
              >
                <div className="col-xl-6 mil-mb-60">
                  <div className={`mil-project-cover ${index % 2 === 1 ? "mil-type-2" : ""}`}>
                    <img src={study.imgSrc} alt="Project" />
                  </div>
                </div>
                <div className="col-xl-5 mil-mb-60">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              {study.description}
            </span>
                  <h3 className="mil-mb-30">{study.title}</h3>
                  <Link href={study.link} className="mil-button-with-label">
                    <div className="mil-button mil-border mil-icon-button">
                <span>
                  <i className="fas fa-plus" />
                </span>
                    </div>
                    <span className="mil-dark">See More</span>
                  </Link>
                </div>
              </div>
          ))}
          {/*<div className="row justify-content-between align-items-center">*/}
          {/*  <div className="col-xl-6 mil-mb-60">*/}
          {/*    <div className="mil-project-cover">*/}
          {/*      <img src="img/projects/2.jpg" alt="Project" />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-xl-5 mil-mb-60">*/}
          {/*    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">*/}
          {/*      The majority have suffered alteration in some form.*/}
          {/*    </span>*/}
          {/*    <h3 className="mil-mb-30">*/}
          {/*      Android App For Shaving Products Delivery*/}
          {/*    </h3>*/}
          {/*    <Link href="project" className="mil-button-with-label">*/}
          {/*      <div className="mil-button mil-border mil-icon-button">*/}
          {/*        <span>*/}
          {/*          <i className="fas fa-plus" />*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*      <span className="mil-dark">See More</span>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="row flex-sm-row-reverse justify-content-between align-items-center">*/}
          {/*  <div className="col-xl-6 mil-mb-60">*/}
          {/*    <div className="mil-project-cover mil-type-2">*/}
          {/*      <img src="img/projects/3.jpg" alt="Project" />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-xl-5 mil-mb-60">*/}
          {/*    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">*/}
          {/*      The majority have suffered alteration in some form.*/}
          {/*    </span>*/}
          {/*    <h3 className="mil-mb-30">*/}
          {/*      Android App For Shaving Products Delivery*/}
          {/*    </h3>*/}
          {/*    <Link href="project" className="mil-button-with-label">*/}
          {/*      <div className="mil-button mil-border mil-icon-button">*/}
          {/*        <span>*/}
          {/*          <i className="fas fa-plus" />*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*      <span className="mil-dark">See More</span>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*<div className="row justify-content-between align-items-center">*/}
          {/*  <div className="col-xl-6 mil-mb-60">*/}
          {/*    <div className="mil-project-cover">*/}
          {/*      <img src="img/projects/1.jpg" alt="Project" />*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className="col-xl-5 mil-mb-60">*/}
          {/*    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">*/}
          {/*      The majority have suffered alteration in some form.*/}
          {/*    </span>*/}
          {/*    <h3 className="mil-mb-30">*/}
          {/*      Android App For Shaving Products Delivery*/}
          {/*    </h3>*/}
          {/*    <Link href="project" className="mil-button-with-label">*/}
          {/*      <div className="mil-button mil-border mil-icon-button">*/}
          {/*        <span>*/}
          {/*          <i className="fas fa-plus" />*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*      <span className="mil-dark">See More</span>*/}
          {/*    </Link>*/}
          {/*  </div>*/}
          {/*</div>*/}


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
                <Link href="portfolio">1</Link>
              </li>
              <li>
                <Link href="portfolio">2</Link>
              </li>
              <li>
                <Link href="portfolio">3</Link>
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
      </section>
    </Layouts>
  );
};
export default Portfolio;
