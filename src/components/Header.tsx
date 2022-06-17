import React from 'react';
import styles from '../styles/Header.module.css';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Score from "../pages/Score";
import { useSetRecoilState } from "recoil";
import { menuAtom } from "../Atom";

const Header = () => {

    const setMenu = useSetRecoilState(menuAtom);
  
    const onOrderChange = (e: React.FormEvent<HTMLInputElement>) => {
      setMenu(e.currentTarget.value);       
    }; 

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <h2>WATCHAPEDIA</h2>
                <nav className={styles.navigation}>
                    {/* <BrowserRouter> */}
                    <div>
                        <ul>
                        <Link to='movie'><li>영화</li></Link>
                        <Link to='tv'><li>TV</li></Link>
                        <Link to='book'><li>책</li></Link>
                        <Link to='webtoon'><li>웹툰</li></Link>
                        </ul>
                        <div className={styles.right}>
                        <input type="string" onChange={onOrderChange} placeholder='콘텐츠, 인물, 컬렉션, 유저를 검색해보세요. '></input>
                        <Link to="score"><p>평가하기</p></Link>
                        <Link to="mypage"><button>마이페이지</button></Link>
                        </div>
                    </div>
                    {/* </BrowserRouter> */}
                </nav>                
            </div>     
        </header>
    )
    
}

export default Header;