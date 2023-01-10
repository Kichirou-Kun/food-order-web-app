import Button from "@ui/Button";
import React from "react";
import Stack from "@ui/Stack";
import clsx from "clsx";
import NextLink from "next/link";
import { AUTHS } from "@constant/paths";

interface Props {
  direction?: "row" | "column";
}
const NavActionButtons = ({ direction = "row" }: Props) => {
  return (
    <Stack
      direction={direction}
      className={clsx({
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
    >
      <Button className="font-bold leading-snug text-DARK_BLUE transition-colors duration-150 ease-linear hover:text-MAIN_COLOR">
        <NextLink href={AUTHS.LOGIN}>SignIn</NextLink>
      </Button>
      <Button className="bg-DARK_BLUE font-semibold text-white transition-all duration-150 ease-linear hover:opacity-90">
        <NextLink href={AUTHS.REGISTER}>SignOut</NextLink>
      </Button>
    </Stack>
  );
};

export default NavActionButtons;
