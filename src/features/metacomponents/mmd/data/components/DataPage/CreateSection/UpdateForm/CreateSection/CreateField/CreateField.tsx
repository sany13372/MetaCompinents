import { ChangeEvent, FC } from "react";
import { Input } from "antd";

interface ICreateField{
  value:any
  setValue:any
  title:string
}
const CreateField: FC<ICreateField> = ({setValue,value,title}) => {
  return (
    <>
      <h4>{title}</h4>
      <Input placeholder={title}
             onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
             value={value ? value : ""} />
    </>
  );
};

export default CreateField;