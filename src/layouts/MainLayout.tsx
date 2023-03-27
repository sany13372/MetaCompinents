import React from "react";
import styles from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import LayoutNavigate from "./LayoutNavigate/LayoutNavigate";
import { MmdProvider } from "@context/mmd/MmdProvider";

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <MmdProvider>
        <LayoutNavigate>
          <Outlet />
        </LayoutNavigate>
      </MmdProvider>
    </div>
  );
};

export default MainLayout;