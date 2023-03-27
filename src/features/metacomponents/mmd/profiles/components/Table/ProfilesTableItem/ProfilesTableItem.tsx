import { Dispatch, FC, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

import { formateDate } from "@utils/formateDate";
import styles from "./ProfilesTableItem.module.scss";
import { IProfile } from "types/mmd/mmd.types";
import CrossImg from '@img/Cross.png'
import EditingImg from '@img/Editing.png'
import { ProfileServices } from "@services/mmd/profile.service";
import { useProfileStore } from "@mmd/profiles/context/profilesStore";
import { useMmdContext } from "@context/mmd/MmdProvider";

interface IProfilesTableItem{
  setRefetch:Dispatch<SetStateAction<boolean>>
  setShowTable:Dispatch<SetStateAction<boolean>>
  profile: IProfile
  refetch:boolean
}
const ProfilesTableItem: FC<IProfilesTableItem> = ({ profile,setRefetch,refetch,setShowTable }) => {

  const nav = useNavigate();
  const [showActions, setShowActions] = useState<boolean>(false);
  const setProfileName = useProfileStore((store) => store.setProfileName)
  const setProfileDescription = useProfileStore((store) => store.setProfileDescription)
  const setCreatorProfile = useProfileStore((store) => store.setCreatorProfile)
  const setUpdateProfile = useProfileStore((store) => store.setUpdateProfile)
  const setProfileId = useProfileStore((store) => store.setProfileId)
  const { entityEditing } = useMmdContext();
  const deletedProfile = async (id:number) => {
    await ProfileServices.deleted(id)
    if (refetch == true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  }

  const updateProfileHandle = () => {
    setShowTable(true)
    setUpdateProfile(true)
    setProfileId(profile.schemaId)
    setProfileName(profile.name)
    setProfileDescription(profile.description)
    setCreatorProfile(profile.modifiedBy)
  }

  return (
    <div className={styles.item}
         onMouseMove={() => setShowActions(true)}
         onMouseOut={() => setShowActions(false)}
    >
      <div  onClick={() => nav(`${profile.schemaId}`)}>
        {profile.name}
      </div>
      <div onClick={() => nav(`${profile.schemaId}`)}>{formateDate(profile.modifiedAt)}</div>
      <div  onClick={() => nav(`${profile.schemaId}`)}>{profile.modifiedBy}</div>
      <div className={styles.icons}>
        {profile.description}
        {entityEditing && showActions &&
          <div>
            <img src={EditingImg} alt="Картинка" onClick={() => updateProfileHandle()}/>
            <img src={CrossImg} alt="Картинка" onClick={() => deletedProfile(profile.schemaId)} />
          </div>
        }
      </div>
    </div>
  );
};

export default ProfilesTableItem;