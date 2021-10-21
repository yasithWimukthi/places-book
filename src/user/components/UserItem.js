import React from 'react';
import './UserItem.css';
import Avatar from "../../shared/components/UIElements/Avatar";
import {Link} from 'react-router-dom';

function UserItem({image,name,placeCount,id}) {
    return (
        <li className="user-item">
            <div className="user-item__content">
                <Link to={`/${id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={image} alt={name}/>
                        {/*<img src={image} alt={name}/>*/}
                    </div>
                    <div className="user-item__info">
                        <h2>{name}</h2>
                        <h3>{placeCount} {placeCount === 1 ? "Place" : "Places" }</h3>
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default UserItem;
