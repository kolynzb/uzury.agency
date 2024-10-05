"use client"
import Layout from "../../../layouts";
import dynamic from "next/dynamic";
import Link from "next/link";

import CallToActionSection from "../../../components/sections/cta";
import PartnersSection from "../../../components/sections/partners";
import AboutSection from "../../../components/sections/about";
import Divider from "../../../components/sections/divider";
import IconBoxesSection from "../../../components/sections/icon-boxes"
import AwardsSection from "../../../components/sections/awards"

const HeroSlider = dynamic( () => import("../../../components/sliders/hero"), { ssr: false } );
const EventsSlider = dynamic( () => import("../../../components/sliders/events"), { ssr: false } );
const CoursesSlider = dynamic( () => import("../../../components/sliders/courses"), { ssr: false } );
const ServicesSlider = dynamic( () => import("../../../components/sliders/services"), { ssr: false } );

const Home2 = () => {
  return (
    <Layout footer={1} headerTop extraClass={"has-additional-panel"}>
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
    </Layout>
  );
};
export default Home2;
