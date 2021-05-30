import React from 'react';
import s from './Friends.module.css';
import FriendItem from "./FriendItem";


const Friends = (props) => {
    console.log('props ',props);
    let friendsItem = props.user.map( d => <FriendItem key={d.id} user={d} /> );
    friendsItem = friendsItem.slice(0, 3);

    return (
        <div>
            <div className={s.item}>
                Friends
            </div>
            <div className={s.gridContainer}>
                {friendsItem}
                {/*<div className="grid-child purple">*/}
                {/*    Grid Column 1*/}
                {/*</div>*/}
                {/*<div className="grid-child green">*/}
                {/*    Grid Column 2*/}
                {/*</div>*/}
                {/*<div className="grid-child green">*/}
                {/*    Grid Column 3*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Friends;