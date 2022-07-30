import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

const useDrawerContext = () => useContext(DrawerContext);

const DrawerProvider = ({ children }) => {
  const [drawerToggle, setDrawerToggle] = useState(false);

  return (
    <DrawerContext.Provider value={{ drawerToggle, setDrawerToggle }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerProvider, useDrawerContext };
