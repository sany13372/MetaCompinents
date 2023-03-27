import { Dispatch, FC, SetStateAction } from "react";
import cn from "clsx";

import styles from "./CreateSectionEntities.module.scss";
import EntitiesCreateForm from "@mmd/entities/components/CreateSection/CreateForm/EntitiesCreateForm";

interface ICreateSection{
  refetch:boolean
  showTable:boolean
  setShowTable:Dispatch<SetStateAction<boolean>>
  setRefetch:Dispatch<SetStateAction<boolean>>
}
const CreateSectionEntities: FC<ICreateSection> = ({showTable,setShowTable,setRefetch,refetch}) => {

  return (
    <div className={cn(styles.table,{
        [styles.active]:showTable,
        [styles.disable]:!showTable
      }) }>
      <EntitiesCreateForm setShowTable={setShowTable} setRefetch={setRefetch} refetch={refetch}/>
    </div>
  );
};

export default CreateSectionEntities