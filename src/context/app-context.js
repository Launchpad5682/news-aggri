import { createContext, useContext } from "react";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ value: 0 }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, useAppContext };
