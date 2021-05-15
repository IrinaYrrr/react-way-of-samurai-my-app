import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
      <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <DialogItem name='Irina' id='1'/>
                    <DialogItem name='Sofia' id='2'/>
                    <DialogItem name='Alisa' id='3'/>
                    <DialogItem name='Andrey' id='4'/>
                    <DialogItem name='Nika' id='5'/>
                    <DialogItem name='Dima' id='6'/>
                </div>
                <div className={s.messages}>
                   <Message message='Hi' />
                   <Message message='What are you doing?' />
                   <Message message='Yo-ho-ho!!!' />
                   <Message message='Yo-ho-ho!!!' />   
                   <Message message='Yo-ho-ho!!!' />   
                   <Message message='Yo-ho-ho!!!' />       
                </div>
            </div>
    )
}

export default Dialogs;