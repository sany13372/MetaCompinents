import {ChangeEvent, FC, useEffect, useState} from 'react'

import {Input} from "antd";
import { useDataStore } from "@mmd/data/context/dataStore";
import { IAttribute, IData } from "types/mmd/mmd.types";


interface IProfilesFormItem{
  title:string
  value:any
  setValue:any
}
const ProfilesFormItem: FC<IProfilesFormItem> = ({title,setValue,value}) => {


  return (
    <>
      <h4>{title}</h4>
      <Input placeholder={title}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value ? value : ''}/>
    </>
  )
}

export default ProfilesFormItem