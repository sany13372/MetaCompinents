import {FC} from 'react';
import cn from 'clsx'

import styles from './SideBarDropdownLink.module.scss'

interface ISideBarDropdownLink{
    title:string
    nav:() => void
    locationPath:boolean
}
const SideBarDropdownLink:FC<ISideBarDropdownLink> = ({nav,title,locationPath}) => {
    return (
        <div className={cn(styles.link,{
            [styles.active]:locationPath
        })} onClick={nav}>
            {title}
        </div>
    );
};

export default SideBarDropdownLink;