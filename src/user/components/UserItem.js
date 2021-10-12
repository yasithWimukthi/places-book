import React from 'react';
import './UserItem.css';

function UserItem({image,name}) {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <div className="user-item__image">
                    <img src={image} alt={name}/>
                </div>
            </div>
        </li>
    );
}

export default UserItem;
