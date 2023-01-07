import React from "react";
import BaseSeo from "@components/BaseSeo";
import FrontLayout from "@common/FrontLayout";

export default function Home() {
  return (
    <>
      <BaseSeo />
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};
