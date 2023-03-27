import {FC} from 'react'

import styles from './UserSettingsBlock.module.scss'
import UserSettingsBlockLine from './UserSettingsBlockLine/UserSettingsBlockLine'

import PaletteImg from '@img/Palette.png'
import LanguageImg from '@img/Language.png'

const UserSettingsBlock: FC = () => {
    return (
        <div className={styles.block} onClick={(e) => e.stopPropagation()}>
            <UserSettingsBlockLine title={'Сменить Тему'} click={() => console.log('Z')} img={PaletteImg}/>
            <UserSettingsBlockLine title={'Сменить Язык'} click={() => console.log('Z')} img={LanguageImg}/>
        </div>
    )
}

export default UserSettingsBlock