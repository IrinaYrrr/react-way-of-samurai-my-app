import React from 'react';
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <img src={ props.user.ava } />
            <div> {props.user.name} </div>
        </div>
    )
}
export default FriendItem;
