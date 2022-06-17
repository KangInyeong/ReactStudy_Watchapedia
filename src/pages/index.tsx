import React from 'react';
import Layout from "../layout/Layout"
import Home from "../contents/Home"
import Score from "../pages/Score";
import Mypage from "../pages/Mypage";
import NotFound from "../pages/NotFound";

import { useRecoilValue } from "recoil";
import { menuAtom } from "../Atom";
import { PosterSet } from '../components/PosterSet';
import { Routes, Route } from 'react-router-dom';

export const Page = () => {
    
    const Menu = useRecoilValue(menuAtom);

    return (
        <>
        <Layout>
            <Home menu={Menu}/>
            <Routes>
                <Route path="/movie" element={<PosterSet/>} />
                <Route path="/score" element={<Score/>} />
                <Route path="/mypage" element={<Mypage/>} />
                <Route path="/" element={<PosterSet/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Layout>
        
        </>
    )
}


export default Page;