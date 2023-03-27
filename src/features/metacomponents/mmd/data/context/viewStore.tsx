import { create } from "zustand";

export interface IViewStore {
  creator:string
  setCreator:(creator:string) => void
  viewId:string
  setViewId:(viewId:string) => void
  name:string
  setName:(name:string) => void
  description:string
  setDescription:(description:string) => void
  viewUpdate:boolean
  setViewUpdate:(viewUpdate:boolean) => void
}

export const useViewStore = create<IViewStore>(set => ({
  creator:'',
  viewUpdate:false,
  viewId:'',
  name:'',
  description:'',
  setCreator:(value:string) => set({creator:value}),
  setViewUpdate:(value:boolean) => set({viewUpdate:value}),
  setViewId:(value:string) => set({viewId:value}),
  setName:(value:string) => set({name:value}),
  setDescription:(value:string) => set({description:value}),
}))