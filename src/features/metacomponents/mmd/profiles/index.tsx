import { FC, useState } from "react";

import styles from "./Profiles.module.scss";

import Filters from "@mmd/profiles/components/Filters/Filters";
import ProfilesTitle from "@mmd/profiles/components/Title/ProfilesTitle";
import ProfilesTable from "@mmd/profiles/components/Table/ProfilesTable";
import Burger from "@components/ui/icons/Burger/Burger";
import BurgerImg from "@img/Burger.png";
import CreateSectionProfiles from "@mmd/profiles/components/CreateSection/CreateSectionProfiles";
import { useMmdContext } from "@context/mmd/MmdProvider";

const Profiles: FC = () => {

  const [showTable, setShowTable] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [refetch, setRefetch] = useState<boolean>(false);
  const { entityEditing } = useMmdContext();

  return (
    <div className={styles.main}>
      <ProfilesTitle />
      <Filters setLoading={setLoading} refetch={refetch} />
      <div className={styles.line}>
        <ProfilesTable setShowTable={setShowTable} setRefetch={setRefetch} refetch={refetch} loading={loading} />
        {entityEditing &&
          <>
            {!showTable && <Burger Img={BurgerImg} callBack={() => setShowTable(true)} />}
            {showTable && <CreateSectionProfiles refetch={refetch} setRefetch={setRefetch} showTable={showTable}
                                                 setShowTable={setShowTable} />}
          </>
        }
      </div>
    </div>
  );
};

export default Profiles;