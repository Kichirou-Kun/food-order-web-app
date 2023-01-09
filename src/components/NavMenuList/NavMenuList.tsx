import NavMenu from "@components/NavMenu/NavMenu";
import { PATHS } from "@constant/paths";
import Stack from "@ui/Stack";
import clsx from "clsx";
import React from "react";

interface NavMenuType {
  direction?: "row" | "column";
}

const NavMenuList = ({ direction = "row" }: NavMenuType) => {
  return (
    <Stack
      direction={direction}
      className={clsx("", {
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
    >
      <NavMenu title="HOME" href={PATHS.HOME} />
      {direction === "column" && <span className="border-b" />}
      <NavMenu title="ABOUT" href={PATHS.ABOUT} />
      {direction === "column" && <span className="border-b" />}
      <NavMenu title="MENU" href={PATHS.MENU} />
      {direction === "column" && <span className="border-b" />}
      <NavMenu title="CONTACT US" href={PATHS.CONTACT} />
    </Stack>
  );
};

export default NavMenuList;
