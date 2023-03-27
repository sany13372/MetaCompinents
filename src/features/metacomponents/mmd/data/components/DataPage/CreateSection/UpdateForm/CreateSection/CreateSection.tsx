import { FC, useEffect, useMemo, useState } from "react";

import styles from "./CreateSection.module.scss";
import CreateField from "@mmd/data/components/DataPage/CreateSection/UpdateForm/CreateSection/CreateField/CreateField";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { Button, Select } from "antd";
import { IAttribute } from "types/mmd/mmd.types";
import { DataServices } from "@services/mmd/data.service";
import { useDataStore } from "@mmd/data/context/dataStore";

const CreateSection: FC = () => {
  const [value, setValue] = useState<any>(null);
  const [creator, setCreator] = useState<string>("");
  const viewId = useDataStore((store) => store.viewId);
  const { entity } = useMmdContext();
  const [attributesEntity, setAttributesEntity] = useState<IAttribute[]>([]);

  const [attributeId, setAttributeId] = useState<string | null>("");

  useEffect(() => {
    setAttributesEntity(entity.attributes);
  }, [entity]);

  const clearFields = () => {
    setValue("");
    setAttributeId("");
    setCreator("");
  };

  const filtersValue = attributesEntity.map((attribute) => (
    { label: attribute.attributeAlias, value: attribute.attributeId }
  ));

  const createData = async () => {
    await DataServices.create(entity.entityId, attributeId, value,creator);
    clearFields();
  };

  return (
    <>
      <div className={styles.create}>
        <h4>Аттрибут</h4>
        <Select
          onChange={(value: string | null) => setAttributeId(value)}
          allowClear={true}
          options={filtersValue}
          placeholder={"Фильтр"}
        />
        <CreateField value={value} setValue={setValue} title={"Значение"} />
        <CreateField value={creator} setValue={setCreator} title={"Имя Создателя"} />
      </div>
      <Button onClick={() => createData()}>{"Сохранить"}</Button>
    </>
  );
};

export default CreateSection;