import React from 'react';
import { JobItem } from './jobitem';

export const JobList = (props) => {
   if (props.jobs.length==0){
    return (
        <h3>Список пуст</h3>
    )
   }
    return (
        <div>
             <h3>{props.title}</h3>
      
            {props.jobs.map(job=>
            <JobItem jobItem={job} key={job.uuid}/>
            )}
        </div>
    );
};
    
