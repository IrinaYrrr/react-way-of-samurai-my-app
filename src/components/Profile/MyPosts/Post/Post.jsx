import React from 'react';
import s from './Post.module.css';
import Countlike from './Countlike'

const Post = (props) => {

  return (
    <div className={ s.item }>
      <img src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg' />
         { props.message }
      <div>
       <span>
          <Countlike likes={props.likes}/> 
       </span>
      </div>
    </div>
  );
};

export default Post;