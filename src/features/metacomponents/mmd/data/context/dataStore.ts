import {create} from "zustand";
import { IAttribute, IData, IDataSection } from "types/mmd/mmd.types";

export interface IDataStore {
    refetch:boolean
    setRefetch:(refetch:boolean) => void
    viewId:string
    setViewId:(viewId:string) => void
    data: IDataSection[]
    setData: (data: IDataSection[]) => void
    attributes: any
    setAttributes: (attributes: any) => void
    showTable: boolean
    setShowTable: (showTable: boolean) => void
    rows: IDataSection
    setRows: (rows: IDataSection) => void
    isSelect: boolean
    setIsSelect: (isSelect: boolean) => void
    fieldsHighLight: string[]
    setFieldsHighLight: (fieldsHighLight: string[]) => void
    selectElement: null | any
    setSelectElement: (selectElement: null | any) => void
    isSelectLines: boolean
    setIsSelectLines: (isSelectLines: boolean) => void
}

export const useDataStore = create<IDataStore>(set => ({
    refetch:false,
    viewId:'',
    data: [],
    attributes:[],
    showTable:false,
    rows:{rowId:'',columns:[]},
    isSelect:true,
    fieldsHighLight:[],
    selectElement:null,
    isSelectLines:false,
    setRefetch:(value:boolean) => set({refetch:value}),
    setViewId:(value:string) => set({viewId:value}),
    setData:(value:IDataSection[]) => set({data:value}),
    setAttributes:(value:IAttribute[]) => set({attributes:value}),
    setShowTable:(value:boolean) => set({showTable:value}),
    setRows:(value:IDataSection) => set({rows:value}),
    setIsSelect:(value:boolean) => set({isSelect:value}),
    setFieldsHighLight:(value:string[]) => set({fieldsHighLight:value}),
    setSelectElement:(value:null | any) => set({selectElement:value}),
    setIsSelectLines:(value:boolean) => set({isSelectLines:value})
}))