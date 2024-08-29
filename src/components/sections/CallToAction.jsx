import Link from "next/link";
import Content from "../../data/sections/call-to-action.json";

const CallToActionSection = () => {
    return (

        <section className="mil-call-to-action mil-p-120-120">
            <div
                className="mil-deco mil-deco-accent"
                style={{ top: 0, left: "12%" }}
            />
            <img
                src={Content.bg_image}
                className="mil-background-image"
                style={{ objectPosition: "center" }}
                alt="image"
            />
            <div className="mil-overlay" />
            <div className="container">
                <div className="mil-cta-content">
                <span className="mil-suptitle mil-light-soft mil-suptitle-2 mil-mb-30">
                    {Content.subtitle}
                </span>
                <h2 className="mil-h1 mil-light mil-mb-30">
                    {Content.title.first} <span className="mil-accent">{Content.title.second}</span> {Content.title.third}
                </h2>
                <Link href={Content.link} className="mil-link">
                    <span className="mil-light">{Content.button}</span>
                    <i className="fas fa-arrow-right" />
                </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;