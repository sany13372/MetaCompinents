import { axiosClassic } from "@data/axios.config";
import { getEntityFilterUrl, getEntityUrl } from "@data/const";
import { IDataEntities, IEntity } from "types/mmd/mmd.types";


export const EntityServices = {

  async getAll(profileId: string | undefined, name: string, dateFrom: string, dateTo: string, limit: number = 10, page: number = 1, sortNameDesc: boolean, sortDateDesc: boolean) {
    return await axiosClassic.get<IDataEntities>(getEntityUrl(getEntityFilterUrl(profileId, name, dateFrom, dateTo, limit, page, sortNameDesc, sortDateDesc)));
  },

  async getById(profileId: string | undefined, entityId: string | undefined) {
    return await axiosClassic.get<IEntity>(getEntityUrl(`/GetEntity?profileID=${profileId}&entityID=${entityId}`));
  },

  async create(id: string | undefined, name: string, description: string, modifiedBy: string) {
    return await axiosClassic.put(getEntityUrl(`/CreateEntity?profileId=${id}&entityName=${name}&description=${description}&modifiedBy=${modifiedBy}`));
  },

  async update(idEntity: number | string, name: string, description: string, modifiedBy: string) {
    return await axiosClassic.patch(getEntityUrl(`/UpdateEntity?entityId=${idEntity}&entityName=${name}&description=${description}&modifiedBy=${modifiedBy}`));
  },

  async deleted(idProfile: string | undefined, idEntity: number) {
    return await axiosClassic.delete(getEntityUrl(`/DeleteEntity?profileId=${idProfile}&entityId=${idEntity}`));
  }

};