import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import styles from "./CreateAttribute.module.scss";

import CreateField from "@mmd/data/components/DataPage/CreateSection/UpdateForm/CreateSection/CreateField/CreateField";
import { Button, Select } from "antd";
import { AttributeServices } from "@services/mmd/attribute.service";
import { useMmdContext } from "@context/mmd/MmdProvider";

import { IAttribute } from "types/mmd/mmd.types";
import { useAttributeStore } from "@mmd/data/context/attributeStore";


interface ICreateAttribute {
  refetch: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
}

const CreateAttribute: FC<ICreateAttribute> = ({ refetch, setRefetch }) => {

  const { entity } = useMmdContext();
  const attributeAlias = useAttributeStore((store) => store.attributeAlias);
  const setAttributeAlias = useAttributeStore((store) => store.setAttributeAlias);
  const name = useAttributeStore((store) => store.name);
  const setName = useAttributeStore((store) => store.setName);
  const description = useAttributeStore((store) => store.description);
  const setDescription = useAttributeStore((store) => store.setDescription);
  const type = useAttributeStore((store) => store.type);
  const setType = useAttributeStore((store) => store.setType);
  const attributeUpdate = useAttributeStore((store) => store.attributeUpdate);
  const setAttributeUpdate = useAttributeStore((store) => store.setAttributeUpdate);
  const attributeId = useAttributeStore((store) => store.attributeId)
  const setAttributeId = useAttributeStore((store) => store.setAttributeId)

  // useEffect(() => {
  //   const findAttribute = attributesEntity.find((att: IAttribute) => att.attributeId === attributeId);
  //   if (findAttribute) {
  //     setAttributeAlias(findAttribute.attributeAlias);
  //     setDescription(findAttribute.description);
  //     setName(findAttribute.name);
  //   }
  // }, [attributeId]);

  const clearFields = () => {
    setAttributeAlias("");
    setName("");
    setDescription("");
    setType(null);
    setAttributeId("");
    setAttributeUpdate(false)
  };

  const attributeHandle = async () => {

    if (!attributeUpdate) {
      await AttributeServices.create(entity.entityId, name, attributeAlias, type, description, "TestUser");
    } else {
      await AttributeServices.update(entity.entityId, attributeId, name, attributeAlias, description, "TestUser");
    }

    if (refetch === true) {
      setRefetch(false);
    } else {
      setRefetch(true);
    }

    setAttributeUpdate(false)
  };

  useEffect(() => {
    clearFields();
    setAttributeUpdate(false)
  }, [refetch])

  const types = [
    { label: "Текст", value: 0 },
    { label: "Число", value: 1 },
    { label: "Время", value: 2 },
    { label: "Координата", value: 3 },
    { label: "Ссылка", value: 4 }
  ];

  return (
    <>
      <div className={styles.create}>
        {!attributeUpdate &&
          <>
            <h4>Тип атрибута</h4>
            <Select
              className={styles.select}
              onChange={(value: any) => setType(value)}
              value={type}
              allowClear={true}
              options={types}
              placeholder={"Тип атрибута"}
            />
            <CreateField value={name} setValue={(value: any) => {
              if (!attributeAlias || attributeAlias === name) {
                setAttributeAlias(value)
              }
              setName(value)
            }
            } title={"Название"} />
          </>
        }
        <CreateField value={attributeAlias} setValue={setAttributeAlias} title={"Псевданим атрибута"} />
        <CreateField value={description} setValue={setDescription} title={"Описание"} />
      </div>
      <h5 onClick={() => clearFields()}>Очистить поля</h5>
      <Button
        disabled={type === null || name === '' || attributeAlias === ''}
        onClick={() => attributeHandle()}
      >
        {attributeUpdate ? 'Обновить' : "Создать"}
      </Button>
    </>
  );
};

export default CreateAttribute;