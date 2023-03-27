import { FC } from "react";
import styles from "./DataForm.module.scss";
import UpdateSection from "@mmd/data/components/DataPage/CreateSection/UpdateForm/UpdateSection/UpdateSection";
import { useMmdContext } from "@context/mmd/MmdProvider";
import EditingForm from "@mmd/data/components/DataPage/CreateSection/EditingForm/EditingForm";
import Cross from "@img/Cross.png";
import { useDataStore } from "@mmd/data/context/dataStore";

interface IDataCreateForm {

}

const DataForm: FC<IDataCreateForm> = () => {

  const { entityEditing,entity } = useMmdContext();
  const setShowTable = useDataStore((store) => store.setShowTable)
  return (
    <form className={styles.form}>
      <div><img onClick={() => setShowTable(false)} src={Cross} alt={"Картинка"} /></div>
      {!entityEditing && entity.attributes?.length == 0 && <h4>Атрибутов нет</h4>}
      {!entityEditing && entity.attributes?.length > 0 && <UpdateSection />}
      {entityEditing && <EditingForm />}
    </form>
  );

};

export default DataForm;