import Content from "../../data/sections/about.json";

const AboutSection = () => {
    return (
      <section className="mil-about mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "10%" }} />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-xl-5">
              <div className="mil-about-illustration mil-mb-60">
                <div className="mil-image-frame">
                  <img src={Content.image} alt={Content.title} />
                </div>
                <div className="mil-window">
                  <ul className="mil-speakers">
                    {Content.speakers.map((item, key) => (
                    <li className="mil-speaker">
                      <img src={item.image} alt={item.alt} />
                    </li>
                    ))}
                  </ul>
                  <div className="mil-window-bottom">
                    <h3>{Content.rating.value}</h3>
                    <div>
                      <ul className="mil-stars">
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                        <li className="mil-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                      <p className="mil-text-sm">{Content.rating.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                {Content.subtitle}
              </span>
              <h2 className="mil-mb-30">{Content.title}</h2>
              <p className="mil-mb-30">
                {Content.text}
              </p>
              <ul className="mil-simple-list mil-mb-60">
                {Content.list.map((item, key) => (
                <li>{item.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>        
    );
};

export default AboutSection;