export const urlVerification = (query:string,value?:string | boolean) => {
  if (value){
    return `${query}=${value}&`
  } else{
    return ''
  }
}