import Navbar from "@common/Navbar";
import Footer from "@common/Footer";
import React, { PropsWithChildren } from "react";
import Drawer from "@ui/Drawer";
import Sidebar from "@components/Sidebar";
import { useUI } from "@context/UIContext/UIContext";
interface NavbarProps {
  transparent: boolean;
}
interface Props {
  NavbarProps?: NavbarProps;
}

const SidebarUI = () => {
  const { openSidebar, setCloseSidebar } = useUI();
  return openSidebar ? (
    <Drawer onClose={() => setCloseSidebar()}>
      <Sidebar onClose={() => setCloseSidebar()} />
    </Drawer>
  ) : null;
};

const FrontLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  NavbarProps,
}) => {
  return (
    <div className="bg-BODY_BG">
      <header className="bg-BODY_BG py-10">
        <Navbar {...NavbarProps} />
      </header>
      <main>{children}</main>
      <Footer />
      <SidebarUI />
    </div>
  );
};

export default FrontLayout;
