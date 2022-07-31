import React from "react";
import { User } from './user';

export const UserList = (props) => {
    return (
        <div>
             <h3>{props.title}</h3>
      
            {props.users.map(user=>
            <User userItem={user} key={user.id}/>
            )}
        </div>
    );
};