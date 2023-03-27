import { Dispatch, FC, SetStateAction } from "react";

import styles from "./EntitiesTable.module.scss";
import HeaderTable from "@mmd/profiles/components/Table/HeaderTable/HeaderTable";
import LoadingOrItems from "@components/ui/LoadingOrItems";
import {useMmdContext} from "@context/mmd/MmdProvider";
import { IEntity } from "types/mmd/mmd.types";
import EntitiesTableItem from "@mmd/entities/components/Table/TableItem/EntitiesTableItem";

interface IEntitiesTable {
  loading: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  refetch: boolean;
}
const EntitiesTable: FC<IEntitiesTable> = ({loading,setShowTable,setRefetch,refetch}) => {

    const {entities} = useMmdContext()

    return (
        <div className={styles.table}>
            <HeaderTable/>
            <LoadingOrItems loading={loading} length={entities?.length} emptyTitle={'Сущностей нет'}>
              {entities.map((entity:IEntity) =>
                <EntitiesTableItem setRefetch={setRefetch} setShowTable={setShowTable} entity={entity} refetch={refetch} />
              )}
            </LoadingOrItems>
        </div>
    )
}

export default EntitiesTable