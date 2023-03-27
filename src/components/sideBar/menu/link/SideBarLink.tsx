import React, {Dispatch, FC, SetStateAction} from "react";
import cn from 'clsx'
import styles from './SideBarLink.module.scss'
interface ISideBarLink{
    img:string
    title:string
    showBlockNavigate:boolean
    handleMetaLink:() => void
}

const SideBarLink:FC<ISideBarLink> = ({img,title,handleMetaLink,showBlockNavigate}) => {
    return (
        <div className={cn(styles.item,{
            [styles.active]:showBlockNavigate
        })} onClick={() => handleMetaLink()}>
            <div className={styles.img}>
                <img src={img} alt="Лого" />
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
};

export default SideBarLink;