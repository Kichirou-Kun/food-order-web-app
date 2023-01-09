import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import clsx from "clsx";
import React, { FC, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import s from "./Drawer.module.css";

interface DrawerProps {
  onClose: () => void;
}

const Drawer: FC<React.PropsWithChildren<DrawerProps>> = ({
  children,
  onClose,
}) => {
  const styles = useSpring({
    from: {
      x: -500,
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
            "absolute inset-y-0 left-0 flex w-full max-w-full outline-none md:w-auto md:pr-10"
          )}
        >
          <animated.div
            style={styles}
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
