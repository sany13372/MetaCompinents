import {axiosClassic} from "@data/axios.config"
import {getDataUrl} from "@data/const";
import { IDataDto, IDataResponse } from "types/mmd/mmd.types";


export const DataServices = {

  async getAll(data:IDataDto) {
    //return await axiosClassic.post<IDataResponse>(getDataUrl('/GetData'),data)
   // return await axiosClassic.get<IDataResponse>(getDataUrl(`/GetData?entityId=${data.entityId}&viewId=${data.viewId}&page=${data.currentPage}&itemsPerPage=${data.itemsPerPage}`))
    return await axiosClassic.get<IDataResponse>(getDataUrl(`/GetData?entityId=${data.entityId}&page=${data.currentPage}&itemsPerPage=${data.itemsPerPage}`))
  },

  async getById(id: number) {
    return await axiosClassic.get(`/Data/${id}`)
  },

  async create(entityId: string | number,attributeId:string | null,value:any,modifiedBy:string,rowId?:string) {
    //console.log('JSON',json)
    return await axiosClassic.post(getDataUrl(`/SetData?entityId=${entityId}${rowId ? `&rowId=${rowId}` : ''}&attributeId=${attributeId}&modifiedBy=${modifiedBy}`),{value})
  },

  async createOrUpdate(
    entityId: string | number,
    rowId: string | null,
    value: any,
    modifiedBy:string,
  ) {
    return await axiosClassic.post(getDataUrl(`/SetMultipleData?entityId=${entityId}${rowId ? `&rowId=${rowId}` : ''}&modifiedBy=${modifiedBy}`),value)
  },

  async update(id: number) {
    return await axiosClassic.put(`/Data/${id}`)
  },

  async deleted(entityId: number | string,rowId:string) {
    return await axiosClassic.delete(`/Row/DeleteRow?entityId=${entityId}&rowId=${rowId}`)
  },



}