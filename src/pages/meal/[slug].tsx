import FrontLayout from "@common/FrontLayout";
import Container from "@ui/Container";
import React, { ReactElement } from "react";

const MealDetail = () => {
  return (
    <section>
      <Container>Detail</Container>
    </section>
  );
};

export default MealDetail;

MealDetail.getLayout = function getLayout(page: ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};
