import React, { useState } from "react";
import SideBarLink from "@components/sideBar/menu/link/SideBarLink";
import MmdLogo from "@img/Mmd.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SideBarDropdownLink from "@components/sideBar/menu/link/sideBarLink/SideBarDropdownLink";
import { useMmdContext } from "@context/mmd/MmdProvider";

const SideBarMmdLink = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { setEntityEditing, entityEditing } = useMmdContext();
  const [showBlockNavigate, setShowBlockNavigate] = useState<boolean>(false);
  const param = useParams<{ profileId: string, entityId: string }>();
  const mainPath = location.pathname === "/mmd/data-editor/profiles";
  const entitiesPath = location.pathname === `/mmd/data-editor/profiles/${param.profileId}`;
  const dataPath = location.pathname === `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`;
  const attributesPath = location.pathname === `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}/attributes`;

  const handleMetaLink = () => {
    setShowBlockNavigate(true);
    nav("/mmd/data-editor/profiles");
  };

  const goToEntityData = () => {
    localStorage.setItem('entityEditing', 'false')
    nav(`/mmd/data-editor/profiles`);
    setEntityEditing(false)
  };
  const goToEntityEditing = () => {
    localStorage.setItem('entityEditing', 'true')
    nav(`/mmd/data-editor/profiles`);
    setEntityEditing(true)
  };

  return (
    <div>
      <SideBarLink img={MmdLogo} title={"Meta master data"}
                   handleMetaLink={handleMetaLink}
                   showBlockNavigate={true}
      />
        <div>
            <>
              <SideBarDropdownLink
                locationPath={!entityEditing}
                title={"Данные"}
                nav={() => goToEntityData()}
              />
              <SideBarDropdownLink
                locationPath={entityEditing}
                title={"Администрирование"}
                nav={() => goToEntityEditing()}
              />
            </>
        </div>
    </div>
  );
};

export default SideBarMmdLink;