import NavMenu from "@components/NavMenu/NavMenu";
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
      <NavMenu />
      <NavMenu />
      <NavMenu />
      <NavMenu />
      <NavMenu />
    </Stack>
  );
};

export default NavMenuList;
