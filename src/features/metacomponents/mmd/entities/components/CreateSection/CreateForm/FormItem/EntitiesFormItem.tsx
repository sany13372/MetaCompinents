import { ChangeEvent, FC } from "react";

import { Input } from "antd";


interface IProfilesFormItem{
  title:string
  value:any
  setValue:any
}
const EntitiesFormItem: FC<IProfilesFormItem> = ({title,setValue,value}) => {


  return (
    <>
      <h4>{title}</h4>
      <Input placeholder={title}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} value={value ? value : ''}/>
    </>
  )
}

export default EntitiesFormItem