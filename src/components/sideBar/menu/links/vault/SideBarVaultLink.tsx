import React from 'react';
import SideBarLink from "@components/sideBar/menu/link/SideBarLink";
import VaultLogo from "@img/Vault.png";
import {useNavigate} from "react-router-dom";

const SideBarVaultLink = () => {

    const nav = useNavigate()

    return (
        <div>
            <SideBarLink showBlockNavigate={false} img={VaultLogo} title={'Meta vault'} handleMetaLink={() => nav('/mmd')}/>
        </div>
    );
};

export default SideBarVaultLink;