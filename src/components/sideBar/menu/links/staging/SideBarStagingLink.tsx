import React from 'react';

import StagingLogo from '@img/Staging.png'
import SideBarLink from "@components/sideBar/menu/link/SideBarLink";
import {useNavigate} from "react-router-dom";

const SideBarStagingLink = () => {

    const nav = useNavigate()

    return (
        <div>
            <SideBarLink showBlockNavigate={false} img={StagingLogo} title={'Meta staging'} handleMetaLink={() => nav('/mmd')}/>
        </div>
    );
};

export default SideBarStagingLink;