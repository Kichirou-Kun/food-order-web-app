import Logo from "@components/Logo";
import NavActionButtons from "@components/NavActionButtons";
import NavMenuList from "@components/NavMenuList";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import clsx from "clsx";
import React from "react";

interface Props {
  transparent?: boolean;
}
const Navbar = ({ transparent = false }: Props) => {
  const { setOpenSidebar } = useUI();

  return (
    <div className={clsx("z-40")}>
      <Container>
        <div className="flex flex-row items-center justify-between">
          <Logo />

          <div className="hidden flex-row items-center space-x-6 lg:flex">
            <NavMenuList />
            <NavActionButtons />
          </div>

          <div className="flex lg:hidden">
            <IconButton onClick={() => setOpenSidebar()}>
              <Bars3Icon className="h-6 w-6 text-DARK_BLUE" />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
