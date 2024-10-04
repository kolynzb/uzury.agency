import React from "react";
import Layouts from "../../layouts/Layouts";
import dynamic from "next/dynamic";

// import { getSortedPostsData } from "../../lib/posts";
// import { getSortedProjectsData } from "../../lib/projects";

import PartnersSection from "../../components/sections/Partners";
import ServicesSection from "../../components/sections/Services";
import HowItWorksSection from "../../components/sections/HowItWorks";
import SkillsSection from "../../components/sections/Skills";
import ContactSection from "../../components/sections/Contact";
import Divider from "../../components/sections/Divider";

const LatestProjectsSlider = dynamic(() => import("../../components/sliders/LatestProjects"), { ssr: false });
const LatestPostsSlider = dynamic(() => import("../../components/sliders/LatestPosts"), { ssr: false });
const HeroSlideshowSlider = dynamic(() => import("../../components/sliders/HeroSlideshow"), { ssr: false });
const TestimonialSlider = dynamic(() => import("../../components/sliders/Testimonial"), { ssr: false });

const Home1 = () => {
  // const posts = getSortedPostsData();
  // const projects = getSortedProjectsData();
  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
      <PartnersSection />
      <Divider />
      <ServicesSection />
      <Divider />
      {/* <LatestProjectsSlider projects={projects} /> */}
      <HowItWorksSection />
      <SkillsSection />
      <Divider />
      {/* <LatestPostsSlider posts={posts} /> */}
      <TestimonialSlider />
      <ContactSection />
    </Layouts>
  );
};
export default Home1;

