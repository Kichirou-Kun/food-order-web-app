import Logo from "@components/Logo";
import NavActionButtons from "@components/NavActionButtons";
import NavMenuList from "@components/NavMenuList";
import { WINDOW_SCROLL_NUMBER } from "@constant/app";
import { useUI } from "@context/UIContext/UIContext";
import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Container from "@ui/Container";
import IconButton from "@ui/IconButton";
import clsx from "clsx";
import React from "react";
import { useWindowScroll } from "react-use";

interface Props {
  transparent?: boolean;
}
const Navbar = ({ transparent = false }: Props) => {
  const { setOpenSidebar, setOpenCartSidebar } = useUI();
  const { y } = useWindowScroll();

  const [isShadow, setIsShadow] = React.useState(false);
  const [isBg, setIsBg] = React.useState(false);

  React.useEffect(() => {
    const shadowActive = y > WINDOW_SCROLL_NUMBER;
    const bgActive = y > WINDOW_SCROLL_NUMBER || !transparent;
    setIsBg(bgActive);
    setIsShadow(shadowActive);
  }, [transparent, y]);

  return (
    <div
      className={clsx(
        "z-40 py-10",
        isShadow && "shadow-lg",
        isBg
          ? "bg-BODY_BG transition-all duration-300 ease-linear"
          : "bg-BODY_BG"
      )}
    >
      <Container>
        <div className="flex flex-row items-center justify-between">
          <Logo />

          <div className="hidden flex-row items-center space-x-6 lg:flex">
            <NavMenuList />
            <IconButton
              className="relative text-DARK_BLUE"
              onClick={() => setOpenCartSidebar()}
            >
              <ShoppingBagIcon className="h-6 w-6 " />
              <span className="absolute -top-1 -right-1 text-sm font-semibold">
                10
              </span>
            </IconButton>
          </div>
          <div className="hidden flex-row items-center space-x-6 lg:flex">
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
