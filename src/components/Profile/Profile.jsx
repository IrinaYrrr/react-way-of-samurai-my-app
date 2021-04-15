import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://i.pinimg.com/originals/5a/df/1b/5adf1b97742a65d0a3c98299c545570b.jpg' />
      </div>
      <div>
        ava + description
       </div>
      <MyPosts />
    </div>
  );
};

export default Profile;