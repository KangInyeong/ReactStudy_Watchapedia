import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Score from "../pages/Score";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <h2>WATCHAPEDIA</h2>
                <nav className={styles.navigation}>
                    <BrowserRouter>
                    <div>
                        <ul>
                        <li>영화</li>
                        <li>TV</li>
                        <li>책</li>
                        <li>웹툰</li>
                        </ul>
                        <div className={styles.right}>
                        <input type="text" placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. '></input>
                        <Link to="/score">평가하기</Link>
                        <button>마이페이지</button>
                        <Routes>
                            <Route path="/score" element={<Score/>} />
                        </Routes>
                        </div>
                    </div>
                    </BrowserRouter>
                </nav>                
            </div>     
        </header>
    )
    
}

export default Header;