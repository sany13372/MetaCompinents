import {FC, useState} from 'react'
import cn from 'clsx'
import styles from './UserSettings.module.scss'

import UserSettingsLogo from '@img/UserSetting.svg'
import UserSettingsBlock from "@components/header/UserActions/UserSettings/UserSettingsBlock/UserSettingsBlock";

const UserSettings: FC = () => {

    const [showUserSetting, setShowUserSetting] = useState(false)

    return (
        <div
            onClick={() => setShowUserSetting(!showUserSetting)}
             className={cn(styles.userSettings,{
                 [styles.active] : showUserSetting
        })}>
            <div ><img src={UserSettingsLogo} alt="Картинка"/></div>
            {showUserSetting && <UserSettingsBlock/>}
        </div>
    )
}

export default UserSettings