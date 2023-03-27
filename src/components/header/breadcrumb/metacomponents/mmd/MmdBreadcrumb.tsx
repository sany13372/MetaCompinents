import React, { FC } from "react";

import styles from './MmdBreadcrumb.module.scss'

import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavigateLink from "@components/ui/NavigateLink/NavigateLink";
import { useMmdContext } from "@context/mmd/MmdProvider";

interface IMdmBreadcrumb {
  profileName: string
}

const MdmBreadcrumb: FC<IMdmBreadcrumb> = ({profileName}) => {

  const {entity} = useMmdContext()
  const location = useLocation()
  const param = useParams<{ profileId: string, entityId: string }>()
  const nav = useNavigate()
  const entityPath = (location.pathname === `/mmd/data-editor/profiles/${param.profileId}` || `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`) && location.pathname !== '/mmd/data-editor/profiles'
  const dataPath = (location.pathname === `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`)

  return (
    <div className={styles.header} >
      {entityPath &&
        <NavigateLink showSlash={true} navigate={() => nav(`/mmd/data-editor/profiles/${param.profileId}`)} title={profileName}/>
      }
      {dataPath &&
        <NavigateLink showSlash={true} navigate={() => nav(`/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`)} title={entity ? ` ${entity?.name}` : ''}/>
      }
      {location.pathname === `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}/attributes` &&
        <NavigateLink showSlash={true} navigate={() => nav(`/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`)} title={entity ? ` ${entity?.name}` : ''}/>
      }
    </div>
  )
}

export default MdmBreadcrumb