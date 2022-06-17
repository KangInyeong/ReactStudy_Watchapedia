import React from 'react';

type ProfileProps = {
    username: string;
    name: string;
  };

const Profile: React.FC<ProfileProps> = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default Profile;