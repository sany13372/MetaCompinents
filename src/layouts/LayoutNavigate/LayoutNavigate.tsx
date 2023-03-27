import {FC, PropsWithChildren} from "react";
import Header from "@components/header/Header";
import styles from "./LayoutNavigate.module.scss";
import SideBar from "@components/sideBar/SideBar";

type ILayoutNavigate = PropsWithChildren
const LayoutNavigate: FC<ILayoutNavigate> = ({children}) => {
    return (
        <>
            <Header/>
            <div className={styles.layout}>
                <SideBar/>
                {children}
            </div>
        </>
    );
};

export default LayoutNavigate;