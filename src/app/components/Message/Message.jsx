"use client";
import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/langContext';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
 



export default function Message() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  return <>

{dir=='rtl'?
<>
<div className="container m-auto my-10 " data-aos="fade-up">
        
        
<h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
              رسالة الشركة
         </h2>
        <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] shadow-md bg-center overflow-hidden rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
      <div className=" w-full lg:w-1/2 overflow-hidden">
      <div className="inner flex justify-center  items-center">
  <img
    className=" transition-all duration-700 hover:scale-105  object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/message-1.jpg"
    alt="Message image"
  />
</div>

      </div>
      <div className=" w-full lg:w-1/2 py-6">
        <div className="inner flex flex-col justify-center items-center " >
<h2 className='text-green-600 text-2xl 4k:text-4xl mb-4 font-semibold text-center text-shadow-green' >رسالتنا</h2>
<p className='text-gray-800 text-lg 4k:text-3xl px-1  font-semibold text-center my-4 md:py-8  text-shadow-sm' >
انطلاقا من الشعور الراسخ بالمسؤولية تجاه وطننا ودعما لرواد الأعمال نؤمن بقدرتنا على تقديم استشارات مهنية داعمة ومتخصصة بكل شفافية وموثوقية
  </p>
<p className='text-green-600 text-2xl 4k:text-3xl font-semibold text-center text-shadow-green' >
لنكن شريك اقتصادي فعال لوطن طموح
   </p>

        </div>
      </div>


        </div>
      </div>
</>:

<div className="container m-auto my-10 " data-aos="fade-up">
        
        
        <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
                      
Our Message
                 </h2>
                <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-center shadow-md overflow-hidden rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center my-8">
              <div className=" w-full lg:w-1/2 overflow-hidden">
              <div className="inner flex justify-center  items-center">
          <img
            className=" transition-all duration-700 hover:scale-105  object-fit"
            src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/message-1.jpg"
            alt="Message image"
          />
        </div>
        
              </div>
              <div className=" w-full lg:w-1/2 py-6">
                <div className="inner flex flex-col justify-center items-center " >
        <h2 className='text-green-600 text-2xl 4k:text-4xl mb-4 font-semibold text-center text-shadow-green' >
Our Message</h2>
        <p className='text-gray-800 text-lg 4k:text-3xl px-1  font-semibold text-center my-4 md:py-8  text-shadow-sm' >
        Based on a deep sense of responsibility towards our country and in support of entrepreneurs, we believe in our ability to provide supportive and specialized professional consultations with complete transparency and reliability          </p>
        <p className='text-green-600 text-2xl 4k:text-3xl font-semibold text-center text-shadow-green' >
        Let us be an effective economic partner for an ambitious nation           </p>
        
                </div>
              </div>
        
        
                </div>
              </div>

}
  



  </>
}
