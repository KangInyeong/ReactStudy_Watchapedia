import React from 'react';
import styles from '../styles/Poster.module.css';
import { BrowserRouter, Link } from 'react-router-dom';

export const Poster = (props:any) => {
    return (
        <div className={styles.poster}>
            <Link to ={props.title}>
            <img src={props.img}></img>
            </Link>
            <div>{props.title}</div>
            <div>{props.star}</div>
        </div>
    )
    
}

Poster.defaultProps = {
    title: '브로커',
    img: 'https://an2-img.amz.wtchn.net/image/v2/VWM0WHvsyKmJiKlsZB2a7Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URXhNREUyTmpFek1EWTVPVE0yTkRJaWZRLlU4ak0zZldVeGo2bE85a3BPVWFiR2RpMnRJUG90YmFhdTF5ZFc4ZGoxVE0',
    star: '평균⭐3.1'
}
