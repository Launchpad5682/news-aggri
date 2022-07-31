import { Outlet, useLocation } from "react-router-dom";
import { DrawerProvider } from "../../context/drawer-context";
import { Drawer } from "../Drawer";
import { Header } from "../Header";
import { SourcesList } from "../SourcesList";
import styles from "./index.module.css";

export const Layout = () => {
  const location = useLocation();
  return (
    <div className={styles.layout}>
      <DrawerProvider>
        <Header>
          News Aggregator
          {location.pathname === "/" && <Drawer.Toggle />}
        </Header>
        <Drawer>
          <SourcesList />
        </Drawer>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </DrawerProvider>
    </div>
  );
};
