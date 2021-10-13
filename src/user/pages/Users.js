import React from 'react';
import UsersList from "../components/UsersList";

function Users(props) {
    const USERS = [{id:'u1',name:'yasith',image:'https://iheartcraftythings.com/wp-content/uploads/2021/04/Man-DRAWING-%E2%80%93-STEP-10.jpg',places:3}]
    return (
        <UsersList items={USERS}/>
    );
}

export default Users;
