import { FC, useEffect, useState } from "react";
import cn from "clsx";

import styles from "./DataPageColumn.module.scss";
import Arrow from "@img/DownArrow.png";
import { useDataStore } from "../../../../../context/dataStore";
import DataPageItem from "./DataPageItem/DataPageItem";
import { IAttribute, IData, IDataSection } from "types/mmd/mmd.types";
import CrossImg from "@img/Cross.png";
import { DataServices } from "@services/mmd/data.service";
import { useMmdContext } from "@context/mmd/MmdProvider";

interface IDataPageColumn {
  item: IDataSection;
  index: number;
}

const DataPageRow: FC<IDataPageColumn> = ({ item, index }) => {

  const [dataRows, setDataRows] = useState<IData[]>([]);
  const [showIcon,setShowIcon] = useState<boolean>(false)
  const {entity} = useMmdContext()

  const refetch = useDataStore((store) => store.refetch)
  const setRefetch = useDataStore((store) => store.setRefetch)
  const attributes = useDataStore((store) => store.attributes);
  const setRows = useDataStore((store) => store.setRows);
  const isSelectLine = useDataStore((store) => store.isSelect);
  const setFieldsHighLight = useDataStore((store) => store.setFieldsHighLight);
  const fieldsHighLight = useDataStore((store) => store.fieldsHighLight);
  const setSelectElement = useDataStore((store) => store.setSelectElement);
  const selectElement = useDataStore((store) => store.selectElement);
  const isSelectLines = useDataStore((store) => store.isSelectLines);
  const data = useDataStore((store) => store.data);
  const setShowTable = useDataStore((store) => store.setShowTable);

  const findField = fieldsHighLight.find((field: string) => field === item.rowId);
  const consistHighLightRow = fieldsHighLight.find((field: string) => field !== item.rowId) || fieldsHighLight.length === 0;

  useEffect(() => {
    setDataRows(item.columns);
  }, [item]);

  const selectItem = () => {
    if (isSelectLine) {
      setFieldsHighLight([]);
      setRows(item);
      setShowTable(true);
      setSelectElement({ item, index });
    } else {

      if (selectElement && selectElement?.item?.rowGuid === item.rowId) {
        setSelectElement(null);
      }

      if (selectElement && consistHighLightRow && item.rowId !== selectElement.item.rowGuid) {
        setFieldsHighLight([...fieldsHighLight, item.rowId]);
      }

      if (selectElement === null) {
        setFieldsHighLight([...fieldsHighLight, item.rowId]);
      }

      if (findField) {
        setFieldsHighLight(fieldsHighLight.filter((prevItem: string) => prevItem !== item.rowId));
      }

    }

    if (isSelectLines) {
      setSelectElement({ item, index });
      const consistElement = selectElement ? selectElement.index : 0;
      let highLightLines: any = [...data.filter((item, itemIndex) => {
        if (selectElement === null) return itemIndex < index;
        if (selectElement.index < index) return itemIndex > consistElement && itemIndex < index;
        if (selectElement.index > index) return itemIndex < consistElement && itemIndex > index;
      })];

      for (let index = 0; index < highLightLines.length; index++) {
        highLightLines[index] = highLightLines[index].rowId;
      }

      if (selectElement) {
        highLightLines.unshift(selectElement.item?.rowId);
      }

      setFieldsHighLight(highLightLines);
    }
  };

  const deletedData = async (id: string) => {
    await DataServices.deleted(entity.entityId,id)
    if (refetch === true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  };

  return (
    <tr
      className={cn(styles.column, {
      [styles.active]: (selectElement?.item?.rowId === item.rowId) || (findField)
    })}
      onClick={() => selectItem()}
      onMouseMove={() => setShowIcon(true)}
      onMouseOut={() => setShowIcon(false)}
    >
      <td key={"0"} className={styles.validate}><img className={styles.icon} src={Arrow} alt={"Картинка"} /></td>
      {dataRows && attributes.map((attribute: IAttribute) =>
        <DataPageItem
          items={dataRows}
          key={attribute.attributeId}
          attribute={attribute}
          itemCondition={(selectElement?.item?.rowGuid === item.rowId) || (findField)} />
      )}
      {showIcon &&
        <img src={CrossImg} alt="Картинка" onClick={() => deletedData(item.rowId)} />
      }
    </tr>
  );
};

export default DataPageRow;

