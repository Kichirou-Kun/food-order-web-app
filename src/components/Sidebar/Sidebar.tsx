import Logo from "@components/Logo";
import NavMenuList from "@components/NavMenuList";
import { XMarkIcon } from "@heroicons/react/24/solid";
import IconButton from "@ui/IconButton";
import React from "react";

interface Props {
  onClose: () => void;
}
const Sidebar = ({ onClose }: Props) => {
  return (
    <aside>
      <header className="flex flex-row items-center justify-between py-8 px-4">
        <Logo size="sm" />

        <IconButton onClick={onClose}>
          <XMarkIcon className="h-6 w-6" />
        </IconButton>
      </header>
      <div className="px-4">
        <NavMenuList direction="column" />
      </div>
    </aside>
  );
};

export default Sidebar;
