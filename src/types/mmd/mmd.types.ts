import {Dispatch, SetStateAction} from "react"

export interface IEntity {
    entityId: number
    name: string
    description: string
    enabled: boolean
    views: IView[]
    attributes: IAttribute[]
    attributesId:string[]
    viewsId:string[]
    deleted: boolean
    modifiedAt: string
    modifiedBy: string
}

export interface IView {
    attributesId:string[]
    modifiedAt:string
    name:string
    activeRowsUsed: boolean
    attributes: IAttribute[]
    deleted: boolean
    deletedRowsUsed: boolean
    description: string
    entityId: number
    historized: boolean
    isDefault: boolean
    materialized: boolean
    modifiedBy: string
    viewId: string
}

export interface IFilterData {
    date: any
    query: string
}

export interface IAttribute {

    attributeAlias:string
    attributeId:string
    dataType:number
    description:string
    isKey:boolean
    modifiedAt:string
    modifiedBy:string
    name:string
}

export interface IProfile {
    schemaId: number
    name: string
    description: string
    modifiedAt: string
    modifiedBy: string
    isDeleted: boolean
    entities: IEntity[]
}

export interface IData {
    "attributeId": string,
    "value": {
        value:string
    },
    "modifiedAt": string,
    "modifiedBy": string
}

export interface IDataSection {
    columns: IData[]
    rowId: string
}

export interface IFilters {
    setLoading: Dispatch<SetStateAction<boolean>>
    setPagination?: Dispatch<SetStateAction<IPaginationState>>
    pagination?: IPaginationState
    refetch:boolean
}

export interface IPaginationState {
    limit: number
    total: number
    activePage: number
}

export interface IDataProfile {
    items: IProfile[]
    itemsPerPage: number
    page: number
    totalCount: number
}

export interface IDataEntities {
    items: IEntity[]
    itemsPerPage: number
    page: number
    totalCount: number
}

export interface IParam {
    profileId: string | undefined
    entityId: string | undefined
}

export interface IFieldData {
    name: string | null | undefined;
    value: string | null | number
    filterOperation: number | null
    sortOperation: number | null
}

export interface IDataDto {
    entityId:number
    currentPage: number
    itemsPerPage: number
  //  fields: IFieldData[] | undefined
}

export interface IDataResponse {
    currentPage: number
    elementsCount: number
    itemsPerPage: number
    items: IDataSection[]
    viewId: number
}

export interface ISelectElement {
    item: IData[]
    index: number
}

export interface IFilterDto {
    "name": string | null | undefined
    "value": string | number | null
    "filterOperation": number | null
    "sortOperation": number | null
}



