import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
          <img src='https://99px.ru/sstorage/53/2014/12/tmb_116784_4339.jpg' />
      </div>
      <div className={s.descriptionBlock}>
          ava + description
       </div>
    </div>
  )
}

export default ProfileInfo;