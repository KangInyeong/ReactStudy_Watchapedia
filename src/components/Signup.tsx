import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/logo.svg'

export const Signup = () => {
    return(
        <div className={styles.modal}>
        <div className={styles.modalImg}>
        <img src={logo} width="198px" height="38.03px"></img> 
        </div>                           
        <h2>회원가입</h2>  
        <form>
        <input placeholder='이름 '/>
        <input placeholder='이메일 '/>
        <input placeholder='비밀번호 '/>
        <div className='language'>한국어 (대한민국)</div>
        <button className={styles.modalSignup}>회원가입</button>
        <div className={styles.modalAlready}>
            <p>이미 가입하셨나요? </p>
            <button>로그인</button>
        </div>
        <div className={styles.modalMore}>
            <p>--- OR ---</p>
            <button>카톡</button>
            <button>구글</button>
            <button>트위터</button>
            <button>라인</button>
        </div>
        </form>
        </div>
    )

}