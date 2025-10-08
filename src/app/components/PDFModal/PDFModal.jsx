"use client";
import React from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";

export default function PDFModal() {

  const context = useContext(LanguageContext);
  const dir = context?.dir || (typeof document !== 'undefined' ? document.documentElement.getAttribute('dir') || 'rtl' : 'rtl');
 

  return (
    <>
      <div className="fixed bottom-20 left-4 z-50 cursor-pointer group">
      <a  className="relative flex h-11 w-11" href="https://drive.google.com/file/d/16r0v2HODzY7ZLRVR-Ks4njjOFUzsMMta/view?usp=drive_link" target={"_blank"}>
      
          {/* Green ping circle behind */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-90"></span>

          {/* Static icon/image on top */}
          <span className="relative inline-flex rounded-full">
            <img src="/pdf.webp" alt="PDF Icon" className="w-11 h-11" />
          </span>
          </a>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {dir === "rtl" ? "الملف التعريفي" : "Profile PDF"}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
      </div>

   
    </>
  );
}
