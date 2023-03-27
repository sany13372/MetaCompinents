import React, {PropsWithChildren, createContext, useContext, useState, useMemo} from 'react'
import {IEntity, IProfile} from "types/mmd/mmd.types";

export interface IMmdContext {
    entityEditing:boolean
    setEntityEditing:(entityEditing:boolean) => void
    entity: IEntity
    setEntity: (entity: IEntity) => void
    entities: IEntity[]
    setEntities: (entities: IEntity[]) => void
    sortNameDesc: boolean
    setSortNameDesc: (sortNameDesc: boolean) => void
    sortDateDesc: boolean
    setSortDateDesc: (sortDateDesc: boolean) => void
    profiles: IProfile[]
    setProfiles: (profiles: IProfile[]) => void
}

const MmdContext = createContext<IMmdContext>({} as IMmdContext)

export function MmdProvider({children}: PropsWithChildren) {

    const [entityEditing,setEntityEditing] = useState<boolean>(localStorage.getItem('entityEditing') === 'true')
    const [entity, setEntity] = useState<IEntity>({} as IEntity)
    const [entities, setEntities] = useState<IEntity[]>([] as IEntity[])
    const [sortNameDesc, setSortNameDesc] = useState(false)
    const [sortDateDesc, setSortDateDesc] = useState(false)
    const [profiles, setProfiles] = useState<IProfile[]>([] as IProfile[])

    const value = useMemo(() => ({
        entityEditing,
        setEntityEditing,
        entities,
        setEntities,
        setEntity,
        entity,
        sortNameDesc,
        setSortNameDesc,
        sortDateDesc,
        setSortDateDesc,
        profiles,
        setProfiles
    }), [entities, entity, sortNameDesc, sortDateDesc, profiles,entityEditing])

    return <MmdContext.Provider value={value}>{children}</MmdContext.Provider>
}

export const useMmdContext = () => useContext(MmdContext)
