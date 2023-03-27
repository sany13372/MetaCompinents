import { Dispatch, FC, SetStateAction, useState } from "react";

import styles from "./ProfilesCreateForm.module.scss";
import ProfilesFormItem from "@mmd/profiles/components/CreateSection/CreateForm/FormItem/ProfilesFormItem";
import Cross from "@img/Cross.png";
import { Button } from "antd";
import { ProfileServices } from "@services/mmd/profile.service";
import { useProfileStore } from "@mmd/profiles/context/profilesStore";

interface IProfilesCreateFrom{
  setShowTable: Dispatch<SetStateAction<boolean>>
  setRefetch:Dispatch<SetStateAction<boolean>>
  refetch:boolean
}
const ProfilesCreateForm: FC<IProfilesCreateFrom> = ({setShowTable,setRefetch,refetch}) => {

  const profileId = useProfileStore((store) => store.profileId)
  const setProfileId = useProfileStore((store) => store.setProfileId)
  const profileName = useProfileStore((store) => store.profileName)
  const setProfileName = useProfileStore((store) => store.setProfileName)
  const profileDescription = useProfileStore((store) => store.profileDescription)
  const setProfileDescription = useProfileStore((store) => store.setProfileDescription)
  const creatorProfile = useProfileStore((store) => store.creatorProfile)
  const setCreatorProfile = useProfileStore((store) => store.setCreatorProfile)
  const updateProfile = useProfileStore((store) => store.updateProfile)
  const setUpdateProfile = useProfileStore((store) => store.setUpdateProfile)

  const clearFields = () => {
    setProfileName('')
    setProfileDescription('')
    setCreatorProfile('')
    setProfileId(0)
  }

  const createProfileHandle = async () => {
    await ProfileServices.create(profileName,profileDescription,'TestUser')
    setRefetch(true)
    clearFields()
    if (refetch == true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  }

  const updateProfileHandle = async () => {
    await ProfileServices.update(profileId,profileName,profileDescription,'TestUser')
    setUpdateProfile(false)
    setRefetch(true)
    clearFields()
    if (refetch == true){
      setRefetch(false)
    } else {
      setRefetch(true)
    }
  }

  return (
    <div className={styles.form}>
      <div>
        <div><img onClick={() => setShowTable(false)} src={Cross} alt={"Картинка"} /></div>
        <ProfilesFormItem title={"Название"} value={profileName} setValue={setProfileName} />
        <ProfilesFormItem title={"Описание"} value={profileDescription} setValue={setProfileDescription} />
      </div>
      <Button
        onClick={() => updateProfile ? updateProfileHandle() : createProfileHandle()}>
        {updateProfile ? 'Обновить' : 'Создать'}
      </Button>
    </div>
  );
};

export default ProfilesCreateForm;