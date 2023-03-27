import { FC, useState } from "react";

import styles from "./Entities.module.scss";
import EntitiesTitle from "@mmd/entities/components/Title/EntitiesTitle";
import Burger from "@components/ui/icons/Burger/Burger";
import BurgerImg from "@img/Burger.png";
import EntitiesTable from "@mmd/entities/components/Table/EntitiesTable";
import EntitiesFilters from "@mmd/entities/components/Filters/EntitiesFilters";
import CreateSectionEntities from "@mmd/entities/components/CreateSection/CreateSectionEntities";
import { useMmdContext } from "@context/mmd/MmdProvider";
import { Logger } from "sass";
import { useNavigate } from "react-router-dom";

const Entities: FC = () => {

  const [showTable, setShowTable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const { entityEditing } = useMmdContext();
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <EntitiesTitle />
      <EntitiesFilters setLoading={setLoading} refetch={refetch} />
      <div className={styles.line}>
        <EntitiesTable setShowTable={setShowTable} setRefetch={setRefetch} refetch={refetch} loading={loading} />
        {entityEditing &&
          <>
            {!showTable && <Burger Img={BurgerImg} callBack={() => setShowTable(true)} />}
            {showTable && <CreateSectionEntities refetch={refetch} setRefetch={setRefetch} showTable={showTable}
                                                 setShowTable={setShowTable} />}
          </>
        }
      </div>
    </div>
  );
};

export default Entities;