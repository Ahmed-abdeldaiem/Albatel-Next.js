"use client";
import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../../contexts/langContext';

import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Goal() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);



  return <>

{dir=='rtl'?<>
<div className="container m-auto my-10  " data-aos="fade-up">
        
        <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
              هدف الشركة
         </h2>
        <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-center shadow-md overflow-hidden rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 overflow-hidden ">
      <div className="inner flex justify-center  items-center">
  <img
    className=" transition-all duration-700 hover:scale-105   object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/King.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-8">
        <div className="inner flex flex-col justify-center items-center " >
<h2 className='text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center text-shadow-green' >هدفنا</h2>
<p className='text-gray-800 text-lg 4k:text-3xl my-2 font-semibold text-center  text-shadow-sm' >نتيجة لما يشهده قطاع الأعمال من ازدهار ملحوظ بفضل رؤية 2030</p>
<p className='text-gray-800 text-lg 4k:text-3xl font-semibold text-center  text-shadow-sm' > نسعى ونطمح أن نكون الخيار الأول للعميل عن طريق</p>
<div className='py-4 flex flex-col justify-start items-start'>
<h3 className="text-gray-800 text-lg 4k:text-3xl text-shadow-sm my-4">
                <span className="text-green-600 mx-3 text-center lg:text-start">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                إمداد العميل باحتياجاته كافة
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl my-4 text-center  text-shadow-sm" >
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
تحري الدقة والاحترافية
               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl  my-4 text-center  text-shadow-sm" >
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
الامتثال الكامل لكل مستجدات ومتطلبات المنهة
               </h3>
</div>

        </div>
      </div>


        </div>
      </div>
</>:<>
<div className="container m-auto my-10 " data-aos="fade-up">
        
        <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
        Company Goal
         </h2>
        <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-center overflow-hidden shadow-md rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 overflow-hidden ">
      <div className="inner flex justify-center  items-center">
  <img
    className=" transition-all duration-700 hover:scale-105   object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/King.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-8">
        <div className="inner flex flex-col justify-center items-center " >
<h2 className='text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center text-shadow-green' >
Our Goal</h2>
<p className='text-gray-800 text-lg 4k:text-3xl my-2 font-semibold text-center px-2 text-shadow-sm' >As a result of the remarkable prosperity witnessed by the business sector thanks to Vision 2030</p>
<p className='text-gray-800 text-lg 4k:text-3xl font-semibold text-center lg:text-start text-shadow-sm' >We strive and aspire to be the first choice for the customer by</p>
<div className='py-4'>
<h3 className="text-gray-800 text-lg 4k:text-3xl text-shadow-sm my-4">
                <span className="text-green-600 mx-3 text-center lg:text-start">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                Providing the customer with all his needs               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl my-4 text-center lg:text-start text-shadow-sm" >
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                With precision and professionalism               </h3>
<h3 className="text-gray-800 text-lg 4k:text-3xl  my-4 text-center lg:text-start text-shadow-sm" >
                <span className="text-green-600 mx-3">
                  <i className="fa-solid fa-circle-dot"></i>
                </span>
                Full compliance with all developments and requirements of the institution
               </h3>
</div>

        </div>
      </div>


        </div>
      </div>

</>}
  
 
  </>
}
