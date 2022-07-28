import React from "react";

export const User = (props) => {
    return (
        <div className="User">
            <div className= "user__content">
                <p ><strong>id: {props.id}</strong></p>    
                <p ><strong>Name:</strong>{props.name}</p>    
                <p ><strong>email:</strong>{props.email}</p>    
                <p ><strong>is_company:</strong>{props.is_company}</p>    
                <p >created_at: {props.created_at}</p>
                <p >updated_at: {props.updated_at}</p>
            </div>  
            <div className="btn__useredit">
                <button>Edit</button>
            </div>
        </div>
    );
};