import { useUI } from "@context/UIContext/UIContext";
import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

interface Props {
  title: string;
  href: string;
  subMenus?: () => React.ReactNode;
  variant?: "destop" | "mobile" | string;
}

const NavMenu: React.FC<Props> = ({ title, href, subMenus, variant }) => {
  const router = useRouter();
  const [isActive, setIsActive] = React.useState(false);
  const { setCloseSidebar } = useUI();
  React.useEffect(() => {
    const path = href === "/" ? "/" : `/${href}`;
    const isActive = router.asPath === path;
    setIsActive(isActive);
  }, [href, router.asPath]);

  if (variant === "destop" && subMenus) {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="font-bold uppercase leading-snug">
            {title}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2">{subMenus()}</div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
  return (
    <NextLink href={href} legacyBehavior>
      <a
        onClick={() => setCloseSidebar()}
        className={clsx(
          "font-bold uppercase leading-snug text-DARK_BLUE ",
          isActive
            ? "text-MAIN_COLOR"
            : "transition-colors duration-150 ease-linear hover:text-MAIN_COLOR"
        )}
      >
        {title}
      </a>
    </NextLink>
  );
};

export default NavMenu;
