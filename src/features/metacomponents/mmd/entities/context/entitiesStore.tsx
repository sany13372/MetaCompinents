import { create } from "zustand";

export interface IEntityStore {
  updateEntity:boolean
  setUpdateEntity:(updateEntity:boolean) => void
  entityId:number
  setEntityId:(EntityId:number) => void
  entityName: string
  setEntityName: (EntityName: string) => void
  entityDescription: string
  setEntityDescription: (entityDescription: string) => void
  creatorEntity: string
  setCreatorEntity: (creatorEntity: string) => void
}

export const useEntityStore = create<IEntityStore>(set => ({
  updateEntity:false,
  entityId:0,
  entityName: '',
  entityDescription: '',
  creatorEntity:'',
  setUpdateEntity: (value: boolean) => set({ updateEntity: value }),
  setEntityId: (value: number) => set({ entityId: value }),
  setEntityName: (value: string) => set({ entityName: value }),
  setEntityDescription: (value: string) => set({ entityDescription: value }),
  setCreatorEntity: (value: string) => set({ creatorEntity: value }),
}));