import Link from "next/link";

const PageBanner = ({ pageTitle, pageName }) => {
  return (
    <div className="mil-banner-sm mil-deep-bg">
      <img
        src="img/deco/map.png"
        alt="background"
        className="mil-background-image"
      />
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
      />
      <div className="mil-banner-content">
        <div className="container mil-relative">
          <ul className="mil-breadcrumbs mil-mb-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">{pageName}</a>
            </li>
          </ul>
          <h2 className="mil-uppercase">{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
