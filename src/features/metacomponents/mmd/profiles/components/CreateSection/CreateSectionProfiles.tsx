import { Dispatch, FC, SetStateAction } from "react";
import ProfilesCreateForm from "@mmd/profiles/components/CreateSection/CreateForm/ProfilesCreateForm";
import cn from "clsx";

import styles from './CreateSectionProfiles.module.scss'

interface ICreateSectionProfiles{
  refetch:boolean
  showTable:boolean
  setShowTable:Dispatch<SetStateAction<boolean>>
  setRefetch:Dispatch<SetStateAction<boolean>>
}
const CreateSectionProfiles: FC<ICreateSectionProfiles> = ({showTable,setShowTable,setRefetch,refetch}) => {

  return (
    <div className={cn(styles.table,{
        [styles.active]:showTable,
        [styles.disable]:!showTable
      }) }>
      <ProfilesCreateForm setShowTable={setShowTable} setRefetch={setRefetch} refetch={refetch}/>
    </div>
  );
};

export default CreateSectionProfiles