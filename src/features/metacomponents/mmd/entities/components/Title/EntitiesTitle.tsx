import {FC} from 'react'

import styles from './EntitiesTitle.module.scss'
import BackImg from '@img/BackImg.png'
import { useNavigate } from "react-router-dom";
const EntitiesTitle: FC = () => {
  const nav = useNavigate()
    return (
        <div className={styles.title}>
          <span>
            Сущности
          </span>
          <div onClick={() => nav('/mmd')}>
            <img src={BackImg} alt="Картинка" />
            <span>
              Назад
            </span>
          </div>
        </div>
    )
}

export default EntitiesTitle