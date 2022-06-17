import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.first}>
                <p>서비스 이용약관</p>
                <p>개인정보 처리방침</p>
                <p>회사 안내</p>
            </div>
            
            <div className='second'>
                <p>고객센터</p>
                <p>광고 문의</p>
                <p>제휴 및 대외 협력</p>
            </div>

            <div className='third'>
                <p>주식회사 왓챠 | 대표 박태훈 | 서울특별시 서초구 강남대로 343 신덕빌딩 3층</p>
                <p>사업자 등록 번호 211-88-66013</p>
                <p>WATCHAPEDIA © 2021 by WATCHA, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
    
}

export default Footer;