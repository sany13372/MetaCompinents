import { FC, useEffect, useState } from "react";
import styles from "./EntityEditingSection.module.scss";
import CreateField from "@mmd/data/components/DataPage/CreateSection/UpdateForm/CreateSection/CreateField/CreateField";
import { Button } from "antd";
import { EntityServices } from "@services/mmd/entity.service";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { useDataStore } from "@mmd/data/context/dataStore";

const EntityEditingSection: FC = () => {

  const { entity } = useMmdContext();
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [creator, setCreator] = useState<string>("TestUser");

  const refetch = useDataStore((store) => store.refetch)
  const setRefetch = useDataStore((store) => store.setRefetch)

  useEffect(() => {
    setName(entity.name);
    setDescription(entity.description);
  }, [entity]);
  const entityEditing = async () => {
    await EntityServices.update(entity.entityId,name,description,creator);
    if (refetch === true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  };

  return (
    <>
      <div className={styles.create}>
        <CreateField value={name} setValue={setName} title={"Имя сущности"} />
        <CreateField value={description} setValue={setDescription} title={"Описание"} />
      </div>
      <Button onClick={() => entityEditing()}>{"Обновить"}</Button>
    </>
  );
};

export default EntityEditingSection;