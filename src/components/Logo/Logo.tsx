import clsx from "clsx";
import NextLink from "next/link";
import React from "react";

interface LogoType {
  size?: "sm" | "md" | "lg";
}
const Logo = ({ size = "md" }: LogoType) => {
  return (
    <NextLink href={"/"} legacyBehavior>
      <a
        className={clsx("font-semibold text-DARK_BLUE ", {
          ["text-4xl"]: size === "lg",
          ["text-3xl"]: size === "md",
          ["text-2xl"]: size === "sm",
        })}
      >
        Foo<span className="text-MAIN_COLOR">die</span>
      </a>
    </NextLink>
  );
};

export default Logo;
