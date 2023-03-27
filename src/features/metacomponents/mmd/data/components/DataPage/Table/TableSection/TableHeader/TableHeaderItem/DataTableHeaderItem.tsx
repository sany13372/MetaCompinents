import {FC, useMemo, useState} from 'react'

import Filter from '@img/Filters.png'
import styles from './DataTableHeaderItem.module.scss'
import { IAttribute, IFilterDto } from "types/mmd/mmd.types";



const DataTableHeaderItem: FC<{ item: IAttribute }> = ({item}) => {

    //const {setAttributeName, filters} = useModalContext()
    const [show, setShow] = useState<boolean>(false)
    //const findFilter = filters.find((filter: IFilterDto) => filter.name === item.attributeName)
    //const filterConsistShow = useMemo(() => (show || (findFilter?.sortOperation || findFilter?.filterOperation !== null) && findFilter !== undefined), [findFilter, show]);

    const openModalFilters = () => {
        //setAttributeName(item.attributeName)
    }

    return (
        <td className={styles.item} onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)}>
            {item.attributeAlias}
            {show &&
                <tr className={styles.icon} onClick={() => openModalFilters()}><img src={Filter} alt={'Картинка'}/>
                </tr>}
        </td>
    )
}

export default DataTableHeaderItem
