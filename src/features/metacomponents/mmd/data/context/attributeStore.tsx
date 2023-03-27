import { create } from "zustand";

export interface IAttributeStore {
  creator: string;
  setCreator: (creator: string) => void;
  attributeAlias:string
  setAttributeAlias:(attributeAlias:string) => void
  attributeId: string;
  setAttributeId: (attributeId: string) => void;
  type: string | number | null;
  setType: (viewId: string | number | null) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
  attributeUpdate: boolean;
  setAttributeUpdate: (attributeUpdate: boolean) => void;
}

export const useAttributeStore = create<IAttributeStore>(set => ({
  attributeAlias:'',
  attributeId: "",
  creator: "",
  attributeUpdate: false,
  type: null,
  name: "",
  description: "",
  setAttributeAlias: (value: string) => set({ attributeAlias: value }),
  setAttributeId: (value: string) => set({ attributeId: value }),
  setCreator: (value: string) => set({ creator: value }),
  setAttributeUpdate: (value: boolean) => set({ attributeUpdate: value }),
  setType: (value: string | number | null) => set({ type: value }),
  setName: (value: string) => set({ name: value }),
  setDescription: (value: string) => set({ description: value })
}));