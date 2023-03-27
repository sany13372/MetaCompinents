import { Dispatch, FC, SetStateAction } from "react";
import cn from "clsx";

import styles from "./CreateSection.module.scss";
import AttributeForm from "@mmd/attributes/components/CreateSection/EditingForm/AttributeForm";


interface IDataCreateSection{
  showTable:boolean
  setShowTable:Dispatch<SetStateAction<boolean>>
  refetch: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
}
const CreateSection: FC<IDataCreateSection> = ({showTable,setShowTable,setRefetch,refetch}) => {


  return (
    <div className={cn(styles.table, {
      [styles.active]: showTable,
      [styles.disable]: !showTable
    })}>
      <AttributeForm refetch={refetch} setShowTable={setShowTable} setRefetch={setRefetch}/>
    </div>
  );
};

export default CreateSection;