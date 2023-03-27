import { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { formateDate } from "@utils/formateDate";
import styles from "./EntitiesTableItem.module.scss";
import { IEntity } from "types/mmd/mmd.types";
import CrossImg from "@img/Cross.png";
import EditingImg from "@img/Editing.png";

import { useEntityStore } from "@mmd/entities/context/entitiesStore";
import { EntityServices } from "@services/mmd/entity.service";
import { useMmdContext } from "@context/mmd/MmdProvider";

interface IEntitysTableItem {
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  entity: IEntity;
  refetch: boolean;
}

const EntitiesTableItem: FC<IEntitysTableItem> = ({ entity, setRefetch, refetch, setShowTable}) => {

  const param = useParams<{profileId:string}>()
  const nav = useNavigate();
  const [showActions, setShowActions] = useState<boolean>(false);
  const setEntityName = useEntityStore((store) => store.setEntityName);
  const setEntityDescription = useEntityStore((store) => store.setEntityDescription);
  const setCreatorEntity = useEntityStore((store) => store.setCreatorEntity);
  const setUpdateEntity = useEntityStore((store) => store.setUpdateEntity);
  const setEntityId = useEntityStore((store) => store.setEntityId);
  const {entityEditing} = useMmdContext()

  const deletedEntity = async (id: number) => {
    await EntityServices.deleted(param.profileId,id);
    if (refetch == true) {
      setRefetch(false);
    } else {
      setRefetch(true);
    }
  };

  const updateEntityHandle = () => {
    setShowTable(true);
    setUpdateEntity(true);
    setEntityId(entity.entityId);
    setEntityName(entity.name);
    setEntityDescription(entity.description);
    setCreatorEntity(entity.modifiedBy);
  };

  const onClick = () => {
    if (entityEditing) {
      nav(`${entity.entityId}/attributes`)
    } else {
      nav(`${entity.entityId}`)
    }
  }

  return (
    <div className={styles.item}
         onMouseMove={() => setShowActions(true)}
         onMouseOut={() => setShowActions(false)}
    >
      <div onClick={onClick}>
        {entity.name}
      </div>
      <div onClick={onClick}>{formateDate(entity.modifiedAt)}</div>
      <div onClick={onClick}>{entity.modifiedBy}</div>
      <div className={styles.icons}>
        {entity.description}
        {showActions && entityEditing &&
          <div>
            <img src={EditingImg} alt="Картинка" onClick={() => updateEntityHandle()} />
            <img src={CrossImg} alt="Картинка" onClick={() => deletedEntity(entity.entityId)} />
          </div>
        }
      </div>
    </div>
  );
};

export default EntitiesTableItem;