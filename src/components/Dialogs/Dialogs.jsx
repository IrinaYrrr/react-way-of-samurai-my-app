import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const getUser = (name, users) => {
    return users.find(u => u.name === name);
};

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(
        d => <DialogItem
            key={d.id}
            user={getUser(d.name, props.users)}
            name={d.name}
            id={d.id} />
    );

    let messagesElements = props.state.messages.map(
        m => <Message
            key={m.id}
            message={m.message}
            id={m.id}
            user={getUser(m.name, props.users)}/>
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;