'use client'


import React, { useEffect } from 'react'
import { createContext, useState } from "react";
import axios from 'axios';



export let LanguageContext=  createContext()


export default function LanguageContextProvider(props) {


    const [dir, setDir] = useState('rtl')
   
    function rightToLeft(){
      setDir('rtl')

    }
    function leftToRight(){
      setDir('ltr')
    }
    
  
  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);  
  }, [dir]);  



  return (
    <LanguageContext.Provider value={{rightToLeft,leftToRight,dir}} >
    {props.children}
    </LanguageContext.Provider>
  )
}














