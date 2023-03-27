import {FC} from 'react'
import styles from './Burger.module.scss'

interface IBurger{
    Img:string
    callBack:() => void
}

const Burger: FC<IBurger> = ({Img,callBack}) => {
    return (
        <div className={styles.burger}>
            <img src={Img} className={'pointer'} onClick={callBack} alt={Img}/>
        </div>
    )
}

export default Burger