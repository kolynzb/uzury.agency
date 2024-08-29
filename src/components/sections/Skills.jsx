import Content from "../../data/sections/skills.json";

const SkillsSection = () => {
    return (
        <section className="mil-skills mil-p-120-90">
            <div className="container">
                <div className="row align-items-end mil-mb-90">
                    <div className="col-xl-6">
                    <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                        {Content.subtitle}
                    </span>
                    <h2>
                        {Content.title.first} <span className="mil-accent">{Content.title.second}</span> <span dangerouslySetInnerHTML={{__html : Content.title.third}} />
                    </h2>
                    </div>
                    <div className="col-xl-6">
                    <p className="mil-mt-60-adapt">
                        {Content.description}
                    </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    {Content.items.map((item, key) => (
                    <div className="col-md-6 col-xl-3" key={`skills-i-${key}`}>
                        <h6 className="mil-mb-30">{item.label}</h6>
                        <div className="mil-skill-frame mil-mb-60">
                            <div className="mil-skill-track">
                            <div className="mil-skill-prog" style={{ width: item.value+"%" }} />
                            </div>
                            <div className="mil-text-sm">{item.value}%</div>
                        </div>
                    </div>
                    ))}

                    <div className="col-md-6 col-xl-3 mil-text-center">
                    <a href={Content.button.link} className="mil-link mil-mb-30">
                        <span>{Content.button.label}</span>
                        <i className="fas fa-arrow-right" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;