import Stack from "@ui/Stack";
import clsx from "clsx";
import React from "react";

interface Props {
  direction?: "row" | "column";
}
const MenuFilterButton = ({ direction = "column" }: Props) => {
  const [active, setActive] = React.useState(true);
  return (
    <Stack
      direction={direction}
      className={clsx({
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
    >
      <div
        className={`cursor-pointer rounded-full  p-4 font-semibold capitalize text-DARK_BLUE transition-all duration-75 ease-linear hover:bg-YELLOW ${
          active ? "bg-YELLOW" : "bg-transparent"
        }`}
      >
        Breackfast
      </div>
      <div
        className={`cursor-pointer rounded-full p-4 font-semibold capitalize text-DARK_BLUE transition-all duration-75 ease-linear hover:bg-YELLOW`}
      >
        Lunch
      </div>
      <div
        className={`cursor-pointer rounded-full p-4 font-semibold capitalize text-DARK_BLUE transition-all duration-75 ease-linear hover:bg-YELLOW`}
      >
        Dinner
      </div>
      <div
        className={`cursor-pointer rounded-full p-4 font-semibold capitalize text-DARK_BLUE transition-all duration-75 ease-linear hover:bg-YELLOW`}
      >
        Snack
      </div>
    </Stack>
  );
};

export default MenuFilterButton;
