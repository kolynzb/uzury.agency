import Content from "../../data/sections/icon-boxes.json";

const IconBoxesSection = () => {
    return (
      <section className="mil-icon-boxes mil-p-120-60">
        <div className="container">
          <div className="row">
            {Content.items.map((item) => (
            <div className="col-md-6 col-xl-3">
              <div className="mil-icon-box mil-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="mil-text-sm mil-mb-20">{item.subtitle}</p>
                <h5 dangerouslySetInnerHTML={{__html : item.title}} />
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default IconBoxesSection;