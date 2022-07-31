import { render } from "@testing-library/react";
import { AppProvider } from "../context/app-context";
import { DrawerProvider } from "../context/drawer-context";

const AllTheProviders = ({ children }) => {
  return (
    <AppProvider>
      <DrawerProvider>{children}</DrawerProvider>
    </AppProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });


export {customRender}