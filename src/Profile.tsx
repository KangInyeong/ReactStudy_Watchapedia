import React from 'react';

type ProfileProps = {
  username: string;
  userimg: string;
};

const Profile: React.FC<ProfileProps> = ({ username, userimg }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <img src={userimg}></img>
    </div>
  );
};

export default Profile;
