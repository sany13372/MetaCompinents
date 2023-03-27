import { FC, useState } from "react";
import AttributesTable from "@mmd/attributes/components/Table/AttributesTable";
import styles from "./Attributes.module.scss";

import CreateSection from "@mmd/attributes/components/CreateSection/CreateSection";
import Burger from "@components/ui/icons/Burger/Burger";
import BurgerImg from "@img/Burger.png";
import AttributesTitle from "@mmd/attributes/components/AttributesTitle/AttributesTitle";


const Attributes: FC = () => {
  const [refetch, setRefetch] = useState<boolean>(false);
  const [showTable, setShowTable] = useState<boolean>(false);

  return (
    <div>
      <AttributesTitle />
      <div className={styles.line}>
        <AttributesTable setRefetch={setRefetch} setShowTable={setShowTable} refetch={refetch} />
        {!showTable && <Burger Img={BurgerImg} callBack={() => setShowTable(true)} />}
        {showTable &&
          <CreateSection showTable={showTable} setShowTable={setShowTable} refetch={refetch} setRefetch={setRefetch} />}
      </div>
    </div>
  );
};

export default Attributes;