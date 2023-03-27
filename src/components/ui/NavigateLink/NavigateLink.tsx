import { FC } from "react";

import styles from './NavigateLink.module.scss'

interface INavigateLink {
    navigate:() => void
    title:string
    showSlash:boolean
}

const NavigateLink: FC<INavigateLink> = ({navigate,showSlash,title}) => {
    return (
        <div className={styles.item}>
            {showSlash && <span>/</span>}
            <div className={styles.link} onClick={navigate}>
                {`${title}`}
            </div>
        </div>
    );
};

export default NavigateLink