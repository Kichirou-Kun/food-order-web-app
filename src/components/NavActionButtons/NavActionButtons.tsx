import Button from "@ui/Button";
import React from "react";
import Stack from "@ui/Stack";

interface Props {
  direction?: "row" | "column";
}
const NavActionButtons = ({ direction = "row" }: Props) => {
  return (
    <Stack direction={direction}>
      <Button className="font-bold leading-snug text-DARK_BLUE transition-colors duration-150 ease-linear hover:text-MAIN_COLOR">
        SignIn
      </Button>
      <Button className="bg-DARK_BLUE font-semibold text-white transition-all duration-150 ease-linear hover:opacity-90">
        SignOut
      </Button>
    </Stack>
  );
};

export default NavActionButtons;
