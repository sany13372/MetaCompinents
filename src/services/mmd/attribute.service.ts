import { axiosClassic } from "@data/axios.config";
import { getAttributeUrl } from "@data/const";
import { IDataDto } from "types/mmd/mmd.types";


export const AttributeServices = {

  async getAll(data:IDataDto) {
    //return await axiosClassic.post<IDataResponse>(getDataUrl('/GetData'),data)
  },

  async getById(id: string) {
    return await axiosClassic.get(getAttributeUrl(`/GetAttribute?attributeId=${id}`))
  },

  async create(entityId: string | number,attributeName:string,attributeAlias:string,type:string | number | null,description:string,modifiedBy:string) {
    return await axiosClassic.put(getAttributeUrl(`/CreateAttribute?entityId=${entityId}&attributeName=${attributeName}&attributeAlias=${attributeAlias}&type=${type}&description=${description}&modifiedBy=${modifiedBy}`))
  },

  async update(entityId: string | number,attributeId:string,attributeName:string,attributeAlias:string,description:string,modifiedBy:string) {
    return await axiosClassic.patch(getAttributeUrl(`/UpdateAttribute?entityId=${entityId}&attributeId=${attributeId}&attributeName=${attributeName}&attributeAlias=${attributeAlias}&description=${description}&modifiedBy=${modifiedBy}`))
  },

  async deleted(entityId: string | number,attributeId:string | number,modifiedBy:string) {
    return await axiosClassic.delete(getAttributeUrl(`/DeleteAttribute?entityId=${entityId}&attributeId=${attributeId}&modifiedBy=${modifiedBy}`))
  },

  async addInView(viewId: string,attributeId:string,modifiedBy:string) {
    return await axiosClassic.delete(getAttributeUrl(`/IncludeAttributeToView?viewId=${viewId}&attributeId=${attributeId}&modifiedBy=${modifiedBy}`))
  },
  // todo:Добавить удаление аттрибута у вьюхи
  async deletedInView(entityId:string,viewId: string,attributeId:string,modifiedBy:string) {
    return await axiosClassic.delete(getAttributeUrl(`/DeleteAttribute?entityId=${entityId}&attributeId=${attributeId}&modifiedBy=${modifiedBy}`))
  },


}