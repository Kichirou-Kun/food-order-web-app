import Button from "@ui/Button";
import React from "react";
import Stack from "@ui/Stack";
import clsx from "clsx";
import NextLink from "next/link";
import { AUTHS } from "@constant/paths";
import { useUI } from "@context/UIContext/UIContext";
import Avatar from "@ui/Avatar";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

interface Props {
  direction?: "row" | "column";
  size?: "small" | "medium" | "large";
}
const NavActionButtons = ({ direction = "row", size = "medium" }: Props) => {
  const { setCloseSidebar } = useUI();
  const [toggle, setToggle] = React.useState(false);

  const logoutHandler = () => {
    setToggle(false);
  };
  return (
    <Stack
      direction={direction}
      className={clsx({
        ["space-x-6"]: direction === "row",
        ["space-y-6"]: direction === "column",
      })}
    >
      {true ? (
        <>
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
        </>
      ) : (
        <div className="relative">
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="flex cursor-pointer select-none flex-row items-center space-x-2"
          >
            <Avatar>G</Avatar>
            <span className="font-semibold text-gray-600">aungnyeinhtet</span>
            {toggle ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-600" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-600" />
            )}
          </div>
          {toggle && (
            <ul className="absolute right-0 flex flex-col gap-3 bg-white p-2">
              <li onClick={() => setToggle(false)}>
                <NextLink
                  href={"/add-meal"}
                  className="flex cursor-pointer flex-row items-center space-x-2 py-2 px-4 font-semibold text-gray-600"
                >
                  <PlusIcon className="h-5 w-5" />{" "}
                  <span className="hover:text-opacity-90"> New Items</span>
                </NextLink>
              </li>
              <div className="flex flex-row items-center justify-center">
                <Button
                  onClick={logoutHandler}
                  size="small"
                  className="bg-DARK_BLUE font-semibold text-white transition-all duration-150 ease-linear hover:bg-opacity-90"
                >
                  Logout
                </Button>
              </div>
            </ul>
          )}
        </div>
      )}
    </Stack>
  );
};

export default NavActionButtons;
