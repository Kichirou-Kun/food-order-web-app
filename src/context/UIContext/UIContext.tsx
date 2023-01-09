import React, { PropsWithChildren } from "react";

type InitialState = {
  openSidebar: boolean;
};
type Action = { type: "OPEN_SIDEBAR" } | { type: "CLOSE_SIDEBAR" };
const initialState: InitialState = {
  openSidebar: false,
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
    []
  );

  const setCloseSidebar = React.useCallback(
    () => dispatch({ type: "CLOSE_SIDEBAR" }),
    []
  );

  const value = React.useMemo(
    () => ({
      ...state,
      setCloseSidebar,
      setOpenSidebar,
    }),
    [state, setCloseSidebar, setOpenSidebar]
  );
  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

type ContextType = InitialState & {
  setOpenSidebar: () => void;
  setCloseSidebar: () => void;
};
export const useUI = () => {
  const context = React.useContext<ContextType>(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};
