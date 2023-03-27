import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

import { Input } from "antd";
import { useDataStore } from "@mmd/data/context/dataStore";
import { IAttribute, IData } from "types/mmd/mmd.types";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { DataServices } from "@services/mmd/data.service";


interface IAttributeFormItem {
  attribute: any,
  update: any,
}

const AttributeFormItem: FC<IAttributeFormItem> = ({
                                                     attribute,
                                                     update,
                                                   }) => {

  const [valueData, setValueData] = useState<string | number>("");

  const rows = useDataStore((store) => store.rows);
  const setSelectElement = useDataStore((store) => store.setSelectElement);
  const setRows = useDataStore((store) => store.setRows);
  const findItem = rows.columns.find((row: IData) => row.attributeId === attribute.attributeId)?.value?.value;
  const refetch = useDataStore((store) => store.refetch);
  const setRefetch = useDataStore((store) => store.setRefetch);
  const { entity } = useMmdContext();

  useEffect(() => {
    if (findItem) {
      setValueData(findItem);
    }
  }, [attribute, rows]);

  return (
    <>
      <h4>{attribute.attributeAlias}</h4>
      <Input placeholder={attribute.attributeAlias}
        // disabled={!!consist && true}
             onChange={(e: ChangeEvent<HTMLInputElement>) => update(attribute.attributeAlias, e.target.value)}
             value={attribute?.value} />
    </>
  );
};

export default AttributeFormItem;