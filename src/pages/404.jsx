import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const E404 = () => {
  return (
    <Layouts noFooter transparent>
      {/* 404 */}
      <div className="mil-dark-bg mil-add-page">
        <div
          className="mil-deco mil-deco-accent"
          style={{ top: "40vh", right: "10%", transform: "rotate(90deg)" }}
        />
        <img src="img/deco/map.png" alt="background" className="mil-map-bg" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="mil-text-center mil-mb-30">
                <h5 className="mil-light">Error</h5>
                <h1 className="mil-light mil-404-number">404</h1>
                <h5 className="mil-light">
                  Page <span className="mil-accent">not</span> found
                </h5>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-404-text">
                <p className="mil-light-soft mil-mb-30">
                  The page you are looking for does not exist; it may have been
                  moved or removed altogether.
                </p>
                <Link href="home-2" className="mil-button mil-border mil-light">
                  <span>Back to homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 404 end */}
      <div className="mil-addition-bottom">
        <div className="container-fluid">
          <p className="mil-text-sm mil-light-soft">© ITSulu 2023.</p>
          <p className="mil-text-sm mil-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </Layouts>
  );
};
export default E404;
