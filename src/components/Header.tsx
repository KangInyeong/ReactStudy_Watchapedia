import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import Score from "../pages/Score";
import { useSetRecoilState } from "recoil";
import { menuAtom } from "../Atom";
import Modal from 'react-modal';
import logo from '../assets/logo.svg'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


const Header = () => {

    const setMenu = useSetRecoilState(menuAtom);
  
    const onOrderChange = (e: React.FormEvent<HTMLInputElement>) => {
      setMenu(e.currentTarget.value);       
    }; 

    const [modal, setModal] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <img src={logo} width="198px" height="38.03px"></img>
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
                        <button onClick={() => setModal(true)}>회원가입</button>
                        
                        <Modal isOpen={modal} onRequestClose={() => setModal(false)} style={customStyles}>
                            <img src={logo} width="198px" height="38.03px"></img>                            
                            <h2>회원가입</h2>  
                            <form>
                            <input placeholder='이름 '/>
                            <input placeholder='이메일 '/>
                            <input placeholder='비밀번호 '/>
                            <div>한국어 (대한민국)</div>
                            <button>회원가입</button>
                            <div>
                                <p>이미 가입하셨나요? </p>
                                <button>로그인</button>
                            </div>
                            <div>
                                <p>--- OR ---</p>
                                <button>카톡</button>
                                <button>구글</button>
                                <button>트위터</button>
                                <button>라인</button>
                            </div>
                            </form>
                        </Modal>
                        
                        <Link to="mypage"><button>마이페이지</button></Link>
                        </div>
                    </div>
                    {/* </BrowserRouter> */}
                </nav>                
            </div>     
        </header>
    )
    
}

Modal.setAppElement('#root')

export default Header;