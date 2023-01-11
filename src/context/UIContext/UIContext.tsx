import React, { PropsWithChildren } from "react";

type InitialState = {
  openSidebar: boolean;
  openCartSidebar: boolean;
};
type Action =
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" }
  | { type: "OPEN_CARTSIDEBAR" }
  | { type: "CLOSE_CARTSIDEBAR" };
const initialState: InitialState = {
  openSidebar: false,
  openCartSidebar: false,
};

const reducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return {
        ...state,
        openSidebar: true,
      };
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        openSidebar: false,
      };
    case "OPEN_CARTSIDEBAR":
      return {
        ...state,
        openCartSidebar: true,
      };
    case "CLOSE_CARTSIDEBAR":
      return {
        ...state,
        openCartSidebar: false,
      };
    default:
      return state;
  }
};
export const UIContext = React.createContext<InitialState | any>(initialState);

export const UIContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const setOpenSidebar = React.useCallback(
    () => dispatch({ type: "OPEN_SIDEBAR" }),
    [dispatch]
  );

  const setCloseSidebar = React.useCallback(
    () => dispatch({ type: "CLOSE_SIDEBAR" }),
    [dispatch]
  );
  const setOpenCartSidebar = React.useCallback(
    () => dispatch({ type: "OPEN_CARTSIDEBAR" }),
    [dispatch]
  );

  const setCloseCartSidebar = React.useCallback(
    () => dispatch({ type: "CLOSE_CARTSIDEBAR" }),
    [dispatch]
  );

  const value = React.useMemo(
    () => ({
      ...state,
      setCloseSidebar,
      setOpenSidebar,
      setOpenCartSidebar,
      setCloseCartSidebar,
    }),
    [
      state,
      setCloseSidebar,
      setOpenSidebar,
      setOpenCartSidebar,
      setCloseCartSidebar,
    ]
  );
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

type ContextType = InitialState & {
  setOpenSidebar: () => void;
  setCloseSidebar: () => void;
  setOpenCartSidebar: () => void;
  setCloseCartSidebar: () => void;
};
export const useUI = () => {
  const context = React.useContext<ContextType>(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
