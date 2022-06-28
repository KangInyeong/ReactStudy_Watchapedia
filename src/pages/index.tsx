import React from 'react';
import Layout from '../layout/Layout';
import Score from '../pages/Score';
import Mypage from '../pages/Mypage';
import NotFound from '../pages/NotFound';
import Home from '../contents/Home';
import Specific from '../layout/Specific';
import { PosterSet } from '../components/PosterSet';
import { Routes, Route } from 'react-router-dom';

export const Page = () => {
  return (
    <>
      <Layout>
        <p>
          <Home />
        </p>
        <Routes>
          <Route path="/movie" element={<PosterSet />} />
          <Route path="/movie/*" element={<Specific />} />
          <Route path="/score" element={<Score />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<PosterSet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default Page;
