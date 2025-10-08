"use client";
import React from 'react'
import { createContext, useState } from "react";
import axios from 'axios';
import NotFound from '../error';



export let TeamContext=  createContext()

export default function TeamContextProvider(props) {

let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/team/'

let baseUrl2='https://al-batel-team-data-default-rtdb.firebaseio.com/'




function getPersonById(id) {
  return axios.get(`${baseUrl}.json`)
    .then((res) => {
      const allTeam = res.data;
      // console.log(id);
      if (!Array.isArray(allTeam)) return  null;

      const person = allTeam.find((p) => p && String(p.id) === String(id));
      return person || null ;
    })
    .catch((err) => {
      // console.error(err);
      return  null ;
    });
}

  
  function getTeamMembers() {
    return axios.get(`${baseUrl2}TeamMember.json`, {
      
    })
    .then((data) => {
      
      
        
       

        
        return data.data ? data.data : 'TeamMembers not found';
    })
    .catch((error) => {
        // console.log(error);
        return 'Error fetching Employee Data';
    });
}

    
 
   

  return (
    <TeamContext.Provider value={{getPersonById,getTeamMembers}} >
    {props.children}
    </TeamContext.Provider>
  )
}














