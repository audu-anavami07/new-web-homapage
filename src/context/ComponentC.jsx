import React from "react";
import { useContext } from "react";
import ComponentD from './ComponentD'
import {EmailContext, profileContext, UsersContext} from '../App'
const ComponentC = () =>{

    const users = useContext(UsersContext);
    const email = useContext(EmailContext);
    const profile = useContext(profileContext);
    console.log(users);
    return(
        <div>
            <div><h1>{email}</h1></div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>{user.id} - {user.name}</h1>
                    </div>
                ))}
            {/* <ComponentD Email = {props.Email}/> */}

            <h1>Yo i'm {profile.firstName}</h1>
        </div>
    );
};

export default ComponentC;