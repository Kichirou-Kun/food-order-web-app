import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import s from "./Drawer.module.css";

interface DrawerProps {
  onClose: () => void;
  position?: "left" | "right";
}

const Drawer: FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  onClose,
  position = "left",
}) => {
  const styleLeft = useSpring({
    from: {
      x: -500,
    },
    to: {
      x: 1,
    },
  });
  const styleRight = useSpring({
    from: {
      x: 500,
    },
    to: {
      x: 1,
    },
  });
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const onKeyDownSidebar = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.focus();
    }

    const contentElement = contentRef.current;

    if (contentElement) {
      disableBodyScroll(contentElement, { reserveScrollBarGap: true });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      className={clsx(s.root)}
      ref={sidebarRef}
      onKeyDown={onKeyDownSidebar}
      tabIndex={1}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className={s.backdrop} onClick={onClose} />

        <section
          className={clsx(
            "absolute inset-y-0 flex w-full max-w-full outline-none md:w-auto ",
            {
              ["left-0 md:pr-10"]: position === "left",
              ["right-0 md:pl-10"]: position === "right",
            }
          )}
        >
          <animated.div
            style={position === "left" ? styleLeft : styleRight}
            className="h-full w-full md:w-screen md:max-w-md"
          >
            <div className={s.sidebar} ref={contentRef}>
              {children}
            </div>
          </animated.div>
        </section>
      </div>
    </div>
  );
};

export default Drawer;
