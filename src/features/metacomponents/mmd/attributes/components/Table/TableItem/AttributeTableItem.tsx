import { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import { formateDate } from "@utils/formateDate";
import styles from "./AttributeTableItem.module.scss";
import { IAttribute } from "types/mmd/mmd.types";
import CrossImg from "@img/Cross.png";
import EditingImg from "@img/Editing.png";
import { AttributeServices } from "@services/mmd/attribute.service";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { useAttributeStore } from "@mmd/data/context/attributeStore";

interface IEntitysTableItem {
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  attribute: IAttribute;
  refetch: boolean;
}

const AttributeTableItem: FC<IEntitysTableItem> = ({ attribute, setRefetch, refetch, setShowTable }) => {

  const {entity} = useMmdContext()
  const nav = useNavigate();
  const [showActions, setShowActions] = useState<boolean>(false);

  const setName = useAttributeStore((store) => store.setName)
  const setDescription = useAttributeStore((store) => store.setDescription);
  const setAttributeId = useAttributeStore((store) => store.setAttributeId)
  const setType = useAttributeStore((store) => store.setType)
  const setUpdateAttribute = useAttributeStore((store) => store.setAttributeUpdate)
  const setAttributeAllias = useAttributeStore((store) => store.setAttributeAlias)
  const deletedEntity = async (id: number | string) => {
    await AttributeServices.deleted(entity.entityId,id,'TestUser');
    if (refetch == true) {
      setRefetch(false);
    } else {
      setRefetch(true);
    }
  };

  const updateEntityHandle = () => {
    setShowTable(true);
    setType(attribute.dataType)
    setName(attribute.name)
    setUpdateAttribute(true);
    setAttributeAllias(attribute.attributeAlias)
    setAttributeId(attribute.attributeId);
    setDescription(attribute.description);
  };

  return (
    <div className={styles.item}
         onMouseMove={() => setShowActions(true)}
         onMouseOut={() => setShowActions(false)}
         onClick={() => {
           updateEntityHandle()
         }}
    >
      <div>
        {attribute.attributeAlias}
      </div>
      <div >{formateDate(attribute.modifiedAt)}</div>
      <div>{attribute.modifiedBy}</div>
      <div className={styles.icons}>
        {attribute.description}
        {showActions &&
          <div>
            <img src={EditingImg} alt="Картинка" onClick={() => updateEntityHandle()} />
            <img src={CrossImg} alt="Картинка" onClick={() => deletedEntity(attribute.attributeId)} />
          </div>
        }
      </div>
    </div>
  );
};

export default AttributeTableItem;