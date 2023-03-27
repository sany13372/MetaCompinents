import { FC } from "react";
import styles from "./DataTitile.module.scss";
import BackImg from "@img/BackImg.png";
import { useNavigate, useParams } from "react-router-dom";

const DataTitile: FC = () => {

  const nav = useNavigate();
  const param = useParams<{ profileId: string }>();

  return (
    <div className={styles.title}>
          <span>
            Данные
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

export default DataTitile;