export const calculationCountsPage = (limit:number,countData:number) => {
    return Math.ceil(countData/limit)
}