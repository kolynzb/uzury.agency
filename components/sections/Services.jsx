import Content from "../../data/sections/services.json";

const ServicesSection = () => {
  return (
    <section className="mil-services mil-p-120-90">
      <div className="mil-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <h2 className="mil-mb-30">
          {Content.title.first} <span className="mil-accent">{Content.title.second}</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <h4 className="mil-mb-60 mil-mt-30">{Content.column1.heading}</h4>
            <div className="mil-divider mil-divider-left" />
            {Content.column1.items.map((item, key) => (
            <div key={`services-1-i-${key}`}>
              {key > 0 &&
              <div className="mil-divider mil-divider-left" />
              }
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src={item.icon} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">{item.num}</span> {item.name}
                  </h5>
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="col-lg-6 col-xl-6">
            <h4 className="mil-mb-60 mil-mt-30">{Content.column2.heading}</h4>
            <div className="mil-divider mil-divider-left" />
            {Content.column2.items.map((item, key) => (
            <div key={`services-2-i-${key}`}>
              {key > 0 &&
              <div className="mil-divider mil-divider-left" />
              }
              <div className="mil-service-item">
                <div className="mil-service-icon">
                  <div className="mil-icon-frame mil-icon-frame-md">
                    <img src={item.icon} alt="icon" />
                  </div>
                </div>
                <div className="mil-service-text">
                  <h5 className="mil-mb-30">
                    <span className="mil-accent">{item.num}</span> {item.name}
                  </h5>
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;