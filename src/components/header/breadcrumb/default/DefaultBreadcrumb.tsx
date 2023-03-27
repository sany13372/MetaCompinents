import React from 'react';
import styles from './DefaultBreadcrumb.module.scss'
import NavigateLink from "@components/ui/NavigateLink/NavigateLink";
import {useNavigate} from "react-router-dom";
import Logo from '@img/LogoBiqube.png'

const DefaultBreadcrumb = () => {

    const nav = useNavigate()

    return (
        <div className={styles.item}>
            <div>
                <img src={Logo} alt="Лого"/>
            </div>
            <NavigateLink navigate={() => nav('/')} title={'Biqube'} showSlash={false}/>
        </div>
    );
};

export default DefaultBreadcrumb;