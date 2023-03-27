import { Dispatch, FC, SetStateAction } from "react";

import styles from "./EntitiesCreateForm.module.scss";

import Cross from "@img/Cross.png";
import { Button } from "antd";

import { useEntityStore } from "@mmd/entities/context/entitiesStore";
import { useParams } from "react-router-dom";
import EntitiesFormItem from "@mmd/entities/components/CreateSection/CreateForm/FormItem/EntitiesFormItem";
import { EntityServices } from "@services/mmd/entity.service";

interface IEntitiesCreateFrom{
  setShowTable: Dispatch<SetStateAction<boolean>>
  setRefetch:Dispatch<SetStateAction<boolean>>
  refetch:boolean
}
const EntitiesCreateForm: FC<IEntitiesCreateFrom> = ({setShowTable,setRefetch,refetch}) => {

  const param = useParams<{profileId:string}>()

  const entityId = useEntityStore((store) => store.entityId)
  const setEntityId = useEntityStore((store) => store.setEntityId)
  const entityName = useEntityStore((store) => store.entityName)
  const setEntityName = useEntityStore((store) => store.setEntityName)
  const entityDescription = useEntityStore((store) => store.entityDescription)
  const setEntityDescription = useEntityStore((store) => store.setEntityDescription)
  const creatorEntity = useEntityStore((store) => store.creatorEntity)
  const setCreatorEntity = useEntityStore((store) => store.setCreatorEntity)
  const updateEntity = useEntityStore((store) => store.updateEntity)
  const setUpdateEntity = useEntityStore((store) => store.setUpdateEntity)

  const clearFields = () => {
    setEntityName('')
    setEntityDescription('')
    setCreatorEntity('')
    setEntityId(0)
  }
  const createEntityHandle = async () => {
    await EntityServices.create(param.profileId,entityName,entityDescription,'TestUser')
    setRefetch(true)
    clearFields()
    if (refetch == true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  }

  const updateEntityHandle = async () => {
    await EntityServices.update(entityId,entityName,entityDescription,'TestUser')
    setUpdateEntity(false)
    setRefetch(true)
    clearFields()
    if (refetch == true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  }

  return (
    <div className={styles.form}>
      <div>
        <div><img onClick={() => setShowTable(false)} src={Cross} alt={"Картинка"} /></div>
        <EntitiesFormItem title={"Название"} value={entityName} setValue={setEntityName} />
        <EntitiesFormItem title={"Описание"} value={entityDescription} setValue={setEntityDescription} />
      </div>
      <Button
        onClick={() => updateEntity ? updateEntityHandle() : createEntityHandle()}>
        {updateEntity ? 'Обновить' : 'Создать'}
      </Button>
    </div>
  );
};

export default EntitiesCreateForm;