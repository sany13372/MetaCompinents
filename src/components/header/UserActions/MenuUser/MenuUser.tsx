import {FC} from 'react'

import styles from './MenuUser.module.scss'
import LogoUser from '@img/UserIcon.png'

const MenuUser: FC = () => {
    return (
        <div className={styles.menu}>
            <div><img src={LogoUser} alt="Пользователь"/></div>
        </div>
    )
}

export default MenuUser