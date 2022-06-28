import React, { Suspense, lazy } from 'react';

export const Page = () => {
  const Home = React.lazy(() => import('../contents/Home'));
  return (
    <div>
      <div className="profile">
        <p>
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        </p>
        <p>사진</p>
        <p>별명</p>
        <p>프로필이 없습니다.</p>
      </div>
    </div>
  );
};

export default Page;
