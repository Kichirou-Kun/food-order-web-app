import Logo from "@components/Logo";
import NavMenuList from "@components/NavMenuList";
import Container from "@ui/Container";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row items-center justify-between">
          <Logo />

          <div className="hidden lg:flex ">
            <NavMenuList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
