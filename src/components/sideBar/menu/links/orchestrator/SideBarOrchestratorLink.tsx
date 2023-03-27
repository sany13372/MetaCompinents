import React from 'react';
import SideBarLink from "@components/sideBar/menu/link/SideBarLink";
import OrchestratorLogo from "@img/Orchestrator.png";
import {useNavigate} from "react-router-dom";

const SideBarOrchestratorLink = () => {

    const nav = useNavigate()

    return (
        <div>
            <SideBarLink showBlockNavigate={false} img={OrchestratorLogo} title={'Meta orchestrator'} handleMetaLink={() => nav('/mmd')}/>
        </div>
    );
};

export default SideBarOrchestratorLink;