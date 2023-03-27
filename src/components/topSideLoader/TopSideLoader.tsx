import React from 'react';
import styles from './TopSideLoader.module.scss'
import SideBarTitle from "@components/sideBar/title/SideBarTitle";
import SideBarFooter from "@components/sideBar/footer/SideBarFooter";
import SideBarMenu from "@components/sideBar/menu/SideBarMenu";

const TopSideLoader = () => {
    return (
        <aside className={styles.sideBar}>
            <SideBarTitle />
            <SideBarMenu />
            <SideBarFooter />
        </aside>
    );
};

export default TopSideLoader;