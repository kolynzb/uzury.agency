"use client";
import React from "react";
import Layout from "../../layouts";
import dynamic from "next/dynamic";

// import { getSortedPostsData } from "../../lib/posts";
// import { getSortedProjectsData } from "../../lib/projects";

import PartnersSection from "../../components/sections/partners";
import ServicesSection from "../../components/sections/services";
import HowItWorksSection from "../../components/sections/how-it-works";
import SkillsSection from "../../components/sections/skills";
import ContactSection from "../../components/sections/contact";
import Divider from "../../components/sections/divider";
import {getFeaturedCaseStudies, getFeaturedPosts} from "@/sanity/lib/api";

const LatestProjectsSlider = dynamic(() => import("../../components/sliders/latest-projects"), { ssr: false });
const LatestPostsSlider = dynamic(() => import("../../components/sliders/latest-posts"), { ssr: false });
const HeroSlideshowSlider = dynamic(() => import("../../components/sliders/hero-slideshow"), { ssr: false });
const TestimonialSlider = dynamic(() => import("../../components/sliders/testimonial"), { ssr: false });

const Home1 =  () => {
  // const posts = await getFeaturedPosts();
  // const caseStudies = getFeaturedCaseStudies();
  return (
    <Layout transparent>
      <HeroSlideshowSlider />
      <PartnersSection />
      <Divider />
      <ServicesSection />
      <Divider />
       {/*<LatestProjectsSlider projects={caseStudies} /> */}
      <HowItWorksSection />
      <SkillsSection />
      <Divider />
       {/*<LatestPostsSlider posts={posts} /> */}
      <TestimonialSlider />
      <ContactSection />
    </Layout>
  );
};
export default Home1;

