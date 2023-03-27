import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import styles from "./AttributesTable.module.scss";
import HeaderTable from "@mmd/profiles/components/Table/HeaderTable/HeaderTable";
import LoadingOrItems from "@components/ui/LoadingOrItems";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { IAttribute, IEntity, IParam } from "types/mmd/mmd.types";
import AttributeTableItem from "@mmd/attributes/components/Table/TableItem/AttributeTableItem";
import { EntityServices } from "@services/mmd/entity.service";
import { useParams } from "react-router-dom";
import { useDataStore } from "@mmd/data/context/dataStore";

interface IAttributesTable {
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  refetch: boolean;
}

const AttributesTable: FC<IAttributesTable> = ({ setShowTable, setRefetch, refetch }) => {

  const { entity, setEntity } = useMmdContext();
  const [loading, setLoading] = useState<boolean>(false);
  const param = useParams<Readonly<Partial<IParam>>>();

  useEffect(() => {
    EntityServices.getById(param.profileId, param.entityId)
      .then((data) => {
        setEntity(data.data);
        //setAttributes(data.data.attributes);
        //setViewId(data.data.views.filter((view) => validateView(view))[0].viewId)
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [refetch]);
  return (
    <div className={styles.table}>
      <HeaderTable />
      <LoadingOrItems loading={loading} length={entity?.attributes?.length} emptyTitle={"Атрибутов нет"}>
        {entity.attributes && entity?.attributes.map((attribute: IAttribute) =>
          <AttributeTableItem setRefetch={setRefetch} setShowTable={setShowTable} attribute={attribute}
                              refetch={refetch} />
        )}
      </LoadingOrItems>
    </div>
  );
};

export default AttributesTable;