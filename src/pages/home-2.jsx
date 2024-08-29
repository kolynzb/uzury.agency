import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";

import CallToActionSection from "../components/sections/CallToAction";
import PartnersSection from "../components/sections/Partners";
import AboutSection from "../components/sections/About";
import Divider from "../components/sections/Divider";
import IconBoxesSection from "../components/sections/IconBoxes"
import AwardsSection from "../components/sections/Awards"

const HeroSlider = dynamic( () => import("../components/sliders/Hero"), { ssr: false } );
const EventsSlider = dynamic( () => import("../components/sliders/Events"), { ssr: false } );
const CoursesSlider = dynamic( () => import("../components/sliders/Courses"), { ssr: false } );
const ServicesSlider = dynamic( () => import("../components/sliders/Services"), { ssr: false } );

const Home2 = () => {
  return (
    <Layouts footer={1} headerTop extarClass={"has-additional-panel"}>
      <HeroSlider />
      <ServicesSlider />
      <CallToActionSection />
      <PartnersSection />
      <EventsSlider />
      <AboutSection />
      <Divider />
      <IconBoxesSection />
      <CoursesSlider />
      <AwardsSection />
    </Layouts>
  );
};
export default Home2;
