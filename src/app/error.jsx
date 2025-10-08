"use client";
import React from 'react'
import Link from 'next/link'






export default function Error() {



  return <>
<div className="min-h-[450px] bg-center bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg')]">
<div className="w-full min-h-[450px] flex justify-center  bg-blue-100/80">
<div className='lg:w-5/12  py-24 flex flex-col justify-center items-center'>
  
<img src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/error.webp" className='rounded-3xl shadow-xl shadow-red-200' alt="error message"  />


  <h1 className='text-5xl text-red-600 shadow-inner font-semibold rounded-full shadow-red-300'>
Error 404
  </h1>
  <h1 className='text-3xl text-red-600  font-semibold   py-4 '>
Page not found
  </h1>
  <span className='text-red-500 font-semibold px-3 animate-pulse'>back to home </span>  
  <Link href={"/"}>
    
                      <button className="  px-7 py-2 overflow-hidden border-2 border-green-800 transition-all duration-500 hover:border-blue-400 text-xl font-semibold text-blue-800 hover:text-green-800 bg-slate-100 hover:bg-opacity-80 bg-opacity-10 rounded-full">
الصفحة الرئيسية
                      </button>
                   
                    </Link>

</div>

</div>

</div>
  </>
}
