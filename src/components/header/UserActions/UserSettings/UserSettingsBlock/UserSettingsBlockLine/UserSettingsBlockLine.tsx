import {FC} from 'react'

import styles from './UserSettingsBlockLine.module.scss'

interface IUserSettingsBlockLine {
    title: string
    click: () => void
    img: string
}

const UserSettingsBlockLine: FC<IUserSettingsBlockLine> = ({click, title, img}) => {
    return (
        <div className={styles.line} onClick={click}>
            <img src={img} alt="Лого"/>
            <span>
                {title}
            </span>
        </div>
    )
}

export default UserSettingsBlockLine