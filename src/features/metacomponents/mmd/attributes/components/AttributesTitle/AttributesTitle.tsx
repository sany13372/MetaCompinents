import { FC } from "react";
import styles from "./AttributesTitle.module.scss";
import BackImg from "@img/BackImg.png";
import { useNavigate, useParams } from "react-router-dom";

const AttributesTitle: FC = () => {

  const nav = useNavigate();
  const param = useParams<{ profileId: string, entityId: string }>();

  return (
    <div className={styles.title}>
          <span>
            Аттрибуты
          </span>
      <div onClick={() => nav(`/mmd/data-editor/profiles/${param.profileId}`)}>
        <img src={BackImg} alt="Картинка" />
        <span>
          Назад
        </span>
      </div>
    </div>
  );
};

export default AttributesTitle;