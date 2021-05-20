import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Irina'},
        {id: 2, name: 'Sofia'},
        {id: 3, name: 'Alisa'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Nika'},
        {id: 6, name: 'Roma'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are you doing?'},
        {id: 3, message: 'Yo-ho-ho!!!'},
        {id: 4, message: 'Yo-ho-ho!!!'},
        {id: 5, message: 'Yo-ho-ho!!!'},
        {id: 6, message: 'Yo-ho-ho!!!'},
    ];


    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

    let messagesElement = messages.map( m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs;