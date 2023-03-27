import { create } from "zustand";

export interface IEntityStore {
  updateAttribute:boolean
  setUpdateAttribute:(updateAttribute:boolean) => void
  attributeId:number
  setAttributeId:(EntityId:number) => void
  name: string
  setName: (name: string) => void
  description: string
  setDescription: (description: string) => void
}

export const useAttributeStore = create<IEntityStore>(set => ({
  updateAttribute:false,
  attributeId:0,
  name: '',
  description: '',
  setUpdateAttribute: (value: boolean) => set({ updateAttribute: value }),
  setAttributeId: (value: number) => set({ attributeId: value }),
  setName: (value: string) => set({ name: value }),
  setDescription: (value: string) => set({ description: value }),
}));