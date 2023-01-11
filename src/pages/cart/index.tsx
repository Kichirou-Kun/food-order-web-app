import FrontLayout from "@common/FrontLayout";
import Container from "@ui/Container";
import React from "react";

const CartPage = () => {
  return (
    <section className="flex h-screen flex-col justify-center">
      <Container></Container>
    </section>
  );
};

export default CartPage;

CartPage.getLayout = function getLayout(page: React.ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
