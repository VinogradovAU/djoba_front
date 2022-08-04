import React from 'react';

export const JobItem = (props) => {
    return (
        <div className="jobItem">
            <div className= "jobItem__content">
                <p ><strong>uuid: {props.jobItem.uuid}</strong></p>    
                <p ><strong>Title: </strong>{props.jobItem.title}</p>    
                {/* <p ><strong>Description: </strong>{props.jobItem.description}</p>     */}
                <p ><strong>salary_from: </strong>{props.jobItem.salary_from}</p>    
                <p ><strong>salary_to: </strong>{props.jobItem.salary_to}</p>    
                {/* <p ><strong>is_active: </strong>{props.jobItem.is_active}</p>     */}
                <p >created_at: {props.jobItem.created_at}</p>
                {/* <p >updated_at: {props.jobItem.updated_at}</p> */}
            </div>  
            <div className="btn__jobItemEdit">
                <button>Подробнее</button>
            </div>
        </div>
    );
};
