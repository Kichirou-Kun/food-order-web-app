import Button from "@ui/Button";
import React from "react";
import Stack from "@ui/Stack";
import clsx from "clsx";
import NextLink from "next/link";
import { AUTHS } from "@constant/paths";
import { useUI } from "@context/UIContext/UIContext";

interface Props {
  direction?: "row" | "column";
  size?: "small" | "medium" | "large";
}
const NavActionButtons = ({ direction = "row", size = "medium" }: Props) => {
  const { setCloseSidebar } = useUI();
  return (
    <Stack
      direction={direction}
      className={clsx({
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
    >
      <Button
        onClick={() => setCloseSidebar()}
        size={size}
        className={`font-bold leading-snug text-DARK_BLUE transition-colors duration-150 ease-linear hover:text-MAIN_COLOR ${
          size === "large" ? "mt-6 border border-MAIN_COLOR " : null
        }`}
      >
        <NextLink href={AUTHS.LOGIN}>SignIn</NextLink>
      </Button>
      <Button
        onClick={() => setCloseSidebar()}
        size={size}
        className="bg-DARK_BLUE font-semibold text-white transition-all duration-150 ease-linear hover:opacity-90"
      >
        <NextLink href={AUTHS.REGISTER}>SignUp</NextLink>
      </Button>
    </Stack>
  );
};

export default NavActionButtons;
