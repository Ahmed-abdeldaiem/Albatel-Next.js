import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let JobContext=  createContext()

export default function JobContextProvider(props) {



let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/'




 

  function getJobs() {
    return axios.get(`${baseUrl}jobs.json`, {
      
    })
    .then((data) => {
      
        // console.log(data);
        
       

        
        return data.data ? data.data : 'No Jobs found';
    })
    .catch((error) => {
        // console.log(error);
        return 'Error fetching Employee Data';
    });
}

    
 
   

  return (
    <JobContext.Provider value={{getJobs}} >
    {props.children}
    </JobContext.Provider>
  )
}













