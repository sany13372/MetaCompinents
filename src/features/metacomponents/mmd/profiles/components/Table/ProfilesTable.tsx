import { Dispatch, FC, SetStateAction } from "react";

import styles from "./ProfilesTable.module.scss";
import HeaderTable from "@mmd/profiles/components/Table/HeaderTable/HeaderTable";
import LoadingOrItems from "@components/ui/LoadingOrItems";
import { useMmdContext } from "@context/mmd/MmdProvider";
import ProfilesTableItem from "@mmd/profiles/components/Table/ProfilesTableItem/ProfilesTableItem";
import { IProfile } from "types/mmd/mmd.types";

interface IProfilesTable {
  loading: boolean;
  setRefetch: Dispatch<SetStateAction<boolean>>;
  setShowTable: Dispatch<SetStateAction<boolean>>;
  refetch: boolean;
}

const ProfilesTable: FC<IProfilesTable> = ({ loading, setRefetch,refetch,setShowTable }) => {

  const { profiles } = useMmdContext();

  return (
    <div className={styles.table}>
      <HeaderTable />
      <LoadingOrItems loading={loading} length={profiles?.length} emptyTitle={"Профилей нет"}>
        {profiles.map((profile: IProfile) =>
          <ProfilesTableItem setShowTable={setShowTable} profile={profile} key={profile.schemaId} setRefetch={setRefetch} refetch={refetch} />
        )}
      </LoadingOrItems>
    </div>
  );
};

export default ProfilesTable;