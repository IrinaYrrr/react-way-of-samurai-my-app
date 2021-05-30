import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    console.log(props);
    return (
        <div className={s.dialog}>
            <div className={s.positionmessage}>
                {props.message}
            </div>
            <div className={s.item}>
                <img src={ props.user.ava } />
            </div>
        </div>
    )
}

export default Message;