import { axiosClassic } from "@data/axios.config";
import { getViewUrl } from "@data/const";

export const ViewServices = {

  async getAll(id:string,page:number,itemsPerPage:number) {
    return await axiosClassic.get(getViewUrl(`/GetViews?entityId=${id}&page=${page}&itemsPerPage=${itemsPerPage}`))
  },

  async getById(id: number) {
    return await axiosClassic.get(`/Data/${id}`)
  },

  async create(entityId: string | number,name:string,description:string,modifiedBy:string) {
    return await axiosClassic.put(getViewUrl(`/CreateView?entityId=${entityId}&name=${name}&description=${description}3&modifiedBy=${modifiedBy}`))
  },

  async update(entityId: string | number,viewId:string,name:string,description:string,modifiedBy:string) {
    return await axiosClassic.patch(getViewUrl(`/UpdateView?entityId=${entityId}&viewId=${viewId}&name=${name}&description=${description}&modifiedBy=${modifiedBy}`))
  },

  async deleted(entityId: string | number,viewId:string,modifiedBy:string) {
    return await axiosClassic.delete(getViewUrl(`/DeleteView?entityId=${entityId}&viewId=${viewId}&modifiedBy=${modifiedBy}`))
  },

}