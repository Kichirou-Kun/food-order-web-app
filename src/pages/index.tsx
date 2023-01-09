import React from "react";
import BaseSeo from "@components/BaseSeo";
import FrontLayout from "@common/FrontLayout";
import HeroBanner from "@components/HeroBanner";
import ServiceSection from "@components/ServiceSection";
import MenuSection from "@components/MenuSection";

export default function Home() {
  return (
    <>
      <BaseSeo />
      <HeroBanner />
      <ServiceSection />
      <MenuSection />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};
