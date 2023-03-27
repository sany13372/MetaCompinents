import { axiosClassic } from "@data/axios.config";
import { IDataProfile, IProfile } from "types/mmd/mmd.types";
import { getSchemaFilterUrl, getSchemaUrl } from "@data/const";

export const ProfileServices = {

  async getAll(name: string, dateFrom: string, dateTo: string, limit: number = 10, page: number = 1, sortNameDesc: boolean, sortDateDesc: boolean) {
    return await axiosClassic.get<IDataProfile>(getSchemaUrl(getSchemaFilterUrl(name, dateFrom, dateTo, limit, page, sortNameDesc, sortDateDesc)));
  },

  async getById(id: number | string) {
    return await axiosClassic.get<IProfile>(getSchemaUrl(`/GetProfile?profileId=${id}`));
  },

  async create(name: string, description: string, modifiedBy: string) {
    return await axiosClassic.put(getSchemaUrl(`/CreateProfile?schemaName=${name}&description=${description}&modifiedBy=${modifiedBy}`));
  },

  async update(id: number, name: string, description: string, modifiedBy: string) {
    return await axiosClassic.patch(getSchemaUrl(`/UpdateProfile?profileId=${id}&schemaName=${name}&description=${description}&modifiedBy=${modifiedBy}`));
  },

  async deleted(id: number) {
    return await axiosClassic.delete(getSchemaUrl(`/DeleteProfile?profileId=${id}`));
  }

};