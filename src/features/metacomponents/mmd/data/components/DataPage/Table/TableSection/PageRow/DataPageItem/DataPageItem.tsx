import {FC, useEffect, useState, KeyboardEvent} from 'react'
import styles from './DataPageItem.module.scss'
import cn from "classnames";
import { IAttribute, IData } from "types/mmd/mmd.types";


interface IDataPageItem {
    items: IData[]
    attribute: IAttribute
    itemCondition: string | true | undefined
}


const DataPageItem: FC<IDataPageItem> = ({items, attribute, itemCondition}) => {

    const [item, setItem] = useState<string | number | undefined | null>(null)
    const [readOnly, setReadOnly] = useState<boolean>(true)

    const findItem = items.find((itemData: IData) => itemData.attributeId === attribute.attributeId)?.value

    useEffect(() => {
        setItem(findItem)
    }, [items])

    const renameItem = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setReadOnly(true)
        }
    }

    return (
        <td className={cn([styles.item])}>
            <input className={cn({
                [styles.active]: itemCondition
            })} onChange={(e) => setItem(e.target.value)} readOnly={readOnly} onKeyDown={(e) => renameItem(e)}
                   onDoubleClick={() => setReadOnly(false)}
                   value={item ? item : ''}/>
        </td>
    )
}

export default DataPageItem



