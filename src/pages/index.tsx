import React from "react";
import BaseSeo from "@components/BaseSeo";
import FrontLayout from "@common/FrontLayout";
import HeroBanner from "@components/HeroBanner";
import ServiceSection from "@components/ServiceSection";
import MenuSection from "@components/MenuSection";
import AboutSection from "@components/AboutSection";
import FaqSection from "@components/FaqSection";
import ContactSection from "@components/ContactSection";

export default function HomePage() {
  return (
    <>
      <BaseSeo />
      <HeroBanner />
      <ServiceSection />
      <AboutSection />
      <MenuSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

HomePage.getLayout = function getLayout(page: React.ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};
