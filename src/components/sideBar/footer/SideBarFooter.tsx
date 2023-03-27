import React from "react";
import styles from "./SideBarFooter.module.scss";
import SideBarSettingsButton from "@components/sideBar/footer/settingsButton/SideBarSettingsButton";
import SideBarCollapseButton from "@components/sideBar/footer/collapseButton/SideBarCollapseButton";

const SideBarFooter = () => {
    return (
        <div className={styles.sideBarFooter}>
            <SideBarSettingsButton />
            <span>Настройки ресурсов</span>
            <SideBarCollapseButton />
        </div>
    );
};

export default SideBarFooter;