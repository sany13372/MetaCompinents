import {FC, PropsWithChildren} from 'react'
import Skeleton from "react-loading-skeleton";

interface ILoadingOrItemsProps extends PropsWithChildren {
    loading: boolean
    length: number
    emptyTitle: string
}

const LoadingOrItems: FC<ILoadingOrItemsProps> = ({loading, length, emptyTitle, children}) => {
    if (loading) return <Skeleton count={length ? length : 20}/>
    if (!length) return <h3>{emptyTitle}</h3>
    return (
        <>
            {children}
        </>
    )
}

export default LoadingOrItems