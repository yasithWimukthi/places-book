import React from 'react';
import UsersList from "../components/UsersList";

function Users(props) {
    const USERS = [{id:'u1',name:'yasith',image:'https://www.google.lk/imgres?imgurl=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F512x512%2F2016%2F07%2F26%2F802043_man_512x512.png&imgrefurl=https%3A%2F%2Fwww.shareicon.net%2Fman-user-profile-avatar-social-802043&tbnid=VBmf97FIESNqhM&vet=12ahUKEwij8IaNs6nyAhWElUsFHR4YCHsQMygJegUIARDLAQ..i&docid=q_eu3yMzNxIQCM&w=512&h=512&q=user&hl=en&ved=2ahUKEwij8IaNs6nyAhWElUsFHR4YCHsQMygJegUIARDLAQ',places:3}]
    return (
        <UsersList items={USERS}/>
    );
}

export default Users;
