import React, {FC} from 'react'

import styles from './UserActions.module.scss'
import UserSettings from "@components/header/UserActions/UserSettings/UserSettings";
import MenuUser from "@components/header/UserActions/MenuUser/MenuUser";

const UserActions: FC = () => {

    return (
        <div className={styles.actions}>
            <UserSettings/>
            <MenuUser/>
        </div>
    )
}

export default UserActions