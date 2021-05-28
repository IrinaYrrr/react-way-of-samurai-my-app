import React from 'react';
import s from './Countlike.module.css';

const Countlike = (props) => {
  return (
    <div className={ s.like }>
        {/*сердце*/}
      <img src='https://media.istockphoto.com/vectors/heart-shape-vector-id936563406?k=6&m=936563406&s=612x612&w=0&h=kqOHdDoUYN9V4Dc451gXKHpSkY-KHMUekBqPTMcEJp0=' />
      { props.likes + ' like'}
    </div>
  );
};

export default Countlike;