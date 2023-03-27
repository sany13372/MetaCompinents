import {FC} from 'react'
import styles from './HeaderTable.module.scss'
import {useMmdContext} from "@context/mmd/MmdProvider";


const HeaderTable: FC = () => {

    const {setSortNameDesc, setSortDateDesc, sortNameDesc, sortDateDesc} = useMmdContext()

    return (
        <div className={styles.head}>
            <div onClick={() => setSortNameDesc(!sortNameDesc)}>Название</div>
            <div onClick={() => setSortDateDesc(!sortDateDesc)}>Дата создания</div>
            <div>Создатель</div>
            <div>Описание</div>
        </div>
    )
}

export default HeaderTable