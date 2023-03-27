import { Dispatch, FC, SetStateAction } from "react";

import styles from './AttributeForm.module.scss'
import CreateAttribute
  from "@mmd/attributes/components/CreateSection/EditingForm/CreateAttribute/CreateAttribute";
import Cross from "@img/Cross.png";

interface IAttributeForm {
  refetch: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
}

const AttributeForm: FC<IAttributeForm> = ({refetch,setRefetch,setShowTable}) => {

  return (
    <form className={styles.form}>
      <div><img onClick={() => setShowTable(false)} src={Cross} alt={"Картинка"} /></div>
      <CreateAttribute setRefetch={setRefetch} refetch={refetch}/>
    </form>
  );
};

export default AttributeForm;