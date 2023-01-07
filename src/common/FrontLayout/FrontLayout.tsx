import Navbar from "@common/Navbar";
import Footer from "@common/Footer";
import React, { PropsWithChildren } from "react";

const FrontLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header className="bg-white py-10">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default FrontLayout;
