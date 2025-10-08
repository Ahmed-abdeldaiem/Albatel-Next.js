"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "../contexts/langContext";

export default function Vedio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  

  return (
    <>
  
 
                
            
   
<div className="w-full flex flex-col justify-center items-center bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover">
<h3 className="md:text-3xl text-lg text-center font-semibold text-blue-900 text-shadow-blue pt-28 pb-4 ">
                  {dir == "rtl" ? "فيديو تعريفي عن شركة الباتل وشركاؤه للاستشارات المهنية" : "Introductory video about Al-Batel & Partners Professional Consulting"}
                </h3>
<div className="p-4 md:p-5 rounded-lg shadow-sm ">
              {/* vedio albatel CPA */}
              <video className="max-h-[80vh]" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
</div>
         
       
   
    </>
  );
}
