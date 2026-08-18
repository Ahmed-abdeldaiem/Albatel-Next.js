"use client";
import React, { useCallback } from 'react'
import { createContext } from "react";
import axios from 'axios';



export let PartnersContext=  createContext()

export default function PartnersContextProvider(props) {



let baseUrl='https://al-batel-team-data-default-rtdb.firebaseio.com/'




 

  const getPartners = useCallback(() => {
    return axios
      .get(`${baseUrl}partners.json`, {})
      .then((response) => {
        const payload = response?.data;
        if (!payload) return [];
        // Firebase may return an object keyed by id; normalize to array
        return Array.isArray(payload) ? payload : Object.values(payload);
      })
      .catch(() => {
        return [];
      });
  }, []);

    
 
   

  return (
    <PartnersContext.Provider value={{getPartners}} >
    {props.children}
    </PartnersContext.Provider>
  )
}













