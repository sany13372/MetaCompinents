import { FC, useEffect, useState } from "react";
import styles from "./UpdateSection.module.scss";

import { IAttribute, IData } from "types/mmd/mmd.types";
import AttributeFormItem
  from "@mmd/data/components/DataPage/CreateSection/UpdateForm/AttributeFormItem/AttributeFormItem";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { Button } from "antd";
import { useDataStore } from "@mmd/data/context/dataStore";
import { DataServices } from "@services/mmd/data.service";

const UpdateSection: FC = () => {
  const [attributesEntity, setAttributesEntity] = useState<IAttribute[]>([]);
  const [creator, setCreator] = useState<string>("TestUser");
  const { entity } = useMmdContext();
  const [localEntity, setLocalEntity] = useState(null)

  const fieldsHighLight = useDataStore((store) => store.fieldsHighLight);
  const selectElement = useDataStore((store) => store.selectElement);
  const setSelectElement = useDataStore((store) => store.setSelectElement);
  const refetch = useDataStore((store) => store.refetch);
  const setRefetch = useDataStore((store) => store.setRefetch);

  useEffect(() => {
    if (localEntity?.entityId === entity.entityId)
      return
    setAttributesEntity(entity.attributes);
    setLocalEntity(entity)
  }, [entity.attributes, selectElement]);

  const consist = ((fieldsHighLight.length > 1 || fieldsHighLight.length === 0) && !selectElement) || ((fieldsHighLight.length > 1 || fieldsHighLight.length === 1) && selectElement);

  const [values, setValues] = useState<any>(null)
  const rows = useDataStore((store) => store.rows);

  useEffect(() => {
    if (!attributesEntity)
      return

    const values = attributesEntity.map(i => ({
      ...i,
      value: selectElement ? rows.columns.find((row: IData) => row.attributeId === i.attributeId)?.value : ''
    }))

    setValues(values)
  }, [attributesEntity, rows])

  const updateHandler = async () => {
    await DataServices.createOrUpdate(entity.entityId, rows.rowId, values.map(i => ({item1: i.attributeId, item2: i.value})), creator);
    clear()
    setSelectElement(null)
    setRefetch(!refetch)
  }

  const create = async () => {
    await DataServices.createOrUpdate(entity.entityId, null, values.map(i => ({item1: i.attributeId, item2: i.value})), creator);
    clear()
    setSelectElement(null)
    setRefetch(!refetch)
  }

  const clear = () => {
    setValues(values.map(i => ({...i, value: ''})))
  }

  const updateValue = (guid: any, value: any) => {
    const newValues = [...values]
    const item = newValues.find(v => v.attributeAlias === guid)
    item.value = value
    setValues(newValues)
  }

  const deleteHandler = async () => {
    await DataServices.deleted(entity.entityId, rows.rowId);
    clear()
    setRefetch(!refetch)
  }

  return (
    <>
      <div className={styles.update}>
        {values?.map((attribute: any) =>
          <AttributeFormItem update={updateValue}
                             key={attribute.attributeAlias} attribute={attribute} />)}
      </div>
      <h5 onClick={clear}>Очистить поля</h5>
      <div className={styles.line}>
        <Button disabled={consist} onClick={updateHandler}>{"Обновить"}</Button>
        <Button onClick={create}>{"Создать"}</Button>
        <Button onClick={deleteHandler}>{"Удалить"}</Button>
      </div>
    </>
  );
};

export default UpdateSection;