import { FC, useEffect, useState } from "react";

import styles from './DataTableHeader.module.scss'

import DataTableHeaderItem from "./TableHeaderItem/DataTableHeaderItem";
import { useDataStore } from "@mmd/data/context/dataStore";
import { IAttribute } from "types/mmd/mmd.types";



const DataTableHeader: FC<{loadingData:boolean}> = ({loadingData}) => {

    const attributes = useDataStore((store) => store.attributes)

    return (
        <thead className={styles.header}>
        <tr>
            <td></td>
            {!loadingData && attributes && attributes.map((item: IAttribute) =>
                <DataTableHeaderItem item={item} key={item.attributeAlias}/>
            )}
            {attributes && attributes?.length == 0 && <td>Атрибутов нет</td>}
        </tr>
        </thead>
    )
}

export default DataTableHeader