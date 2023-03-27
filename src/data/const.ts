import {urlVerification} from "@utils/urlVerification";

export const API_URL = 'http://192.168.72.57/mmd_vgk'

export const getSchemaUrl = (url: string) => `/Schema${url}`
export const getEntityUrl = (url: string) => `/Entity${url}`
export const getDataUrl = (url: string) => `/Data${url}`

export const getAttributeUrl = (url:string) => `/Attribute${url}`

export const getViewUrl = (url:string) => `/View${url}`
export const getSchemaFilterUrl = (name: string,dateFrom: string, dateTo: string, limit: number = 10, page: number = 1, sortNameDesc: boolean, sortDateDesc: boolean) => {
  return `/GetProfiles?${urlVerification('name', name)}${urlVerification('dateFrom', dateFrom)}${urlVerification('dateTo', dateTo)}${urlVerification('sortNameDesc', sortNameDesc)}${urlVerification('sortDateDesc', sortDateDesc)}page=${page}&itemsPerPage=${limit}`
}
export const getEntityFilterUrl = (profileId: string | undefined, name: string, dateFrom: string, dateTo: string, limit: number = 10, page: number = 1, sortNameDesc: boolean, sortDateDesc: boolean) => {
  return `/GetEntities?profileID=${profileId}&${urlVerification('name', name)}${urlVerification('dateFrom', dateFrom)}${urlVerification('dateTo', dateTo)}${urlVerification('sortNameDesc', sortNameDesc)}${urlVerification('sortDateDesc', sortDateDesc)}page=${page}&itemsPerPage=${limit}`
}