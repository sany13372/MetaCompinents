import React from 'react';

import SideBarMmdLink from "@components/sideBar/menu/links/mmd/SideBarMmdLink";
import SideBarVaultLink from "@components/sideBar/menu/links/vault/SideBarVaultLink";
import SideBarStagingLink from "@components/sideBar/menu/links/staging/SideBarStagingLink";
import SideBarControlLink from "@components/sideBar/menu/links/control/SideBarControlLink";
import SideBarOrchestratorLink from "@components/sideBar/menu/links/orchestrator/SideBarOrchestratorLink";

const SideBarMenu = () => {
    return (
        <div>
            <SideBarMmdLink />
            <SideBarVaultLink />
            <SideBarStagingLink />
            <SideBarControlLink />
            <SideBarOrchestratorLink />
        </div>
    );
};

export default SideBarMenu;