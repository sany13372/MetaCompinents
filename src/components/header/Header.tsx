import { useEffect, useState } from "react";
import DefaultBreadcrumb from "@components/header/breadcrumb/default/DefaultBreadcrumb";
import styles from "./Header.module.scss";
import UserActions from "@components/header/UserActions/UserActions";
import MmdBreadcrumb from "@components/header/breadcrumb/metacomponents/mmd/MmdBreadcrumb";
import { ProfileServices } from "@services/mmd/profile.service";
import { useLocation, useParams } from "react-router-dom";

const Header = () => {
  const [loadingMdmHeader, setLoadingMdmHeader] = useState<boolean>(false);
  const param = useParams<{ profileId: string, entityId: string }>();
  const location = useLocation();
  const [profileName, setProfileName] = useState<string>("");
  const mmdPath = (location.pathname === "/mmd/data-editor/profiles" || `/mmd/data-editor/profiles/${param.profileId}` || `/mmd/data-editor/profiles/${param.profileId}/${param.entityId}`);
  useEffect(() => {
    if (param.profileId) {
      setLoadingMdmHeader(true);
      ProfileServices.getById(param.profileId)
        .then((data) => setProfileName(data.data.name))
        .finally(() => setLoadingMdmHeader(false));
    }
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      <div>
        <DefaultBreadcrumb />
        {mmdPath && location.pathname !== "/" && <MmdBreadcrumb profileName={profileName} />}
      </div>
      <UserActions />
    </header>
  );
};

export default Header;