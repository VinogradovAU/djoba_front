import React from "react";

export const User = (props) => {
    console.log("это пропсы: ", props.userItem)
    return (
        <div className="User">
            <div className= "user__content">
                <p ><strong>id: {props.userItem.id}</strong></p>    
                <p ><strong>Name: </strong>{props.userItem.name}</p>    
                <p ><strong>email: </strong>{props.userItem.email}</p>    
                <p ><strong>is_company: </strong>{props.userItem.is_company}</p>    
                <p >created_at: {props.userItem.created_at}</p>
                <p >updated_at: {props.userItem.updated_at}</p>
            </div>  
            <div className="btn__useredit">
                <button>Edit</button>
            </div>
        </div>
    );
};