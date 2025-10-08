"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Vision() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="container m-auto my-10  " data-aos="fade-up">
          
          <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
              رؤية الشركة
         </h2>
            <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-center shadow-md rounded-lg w-full lg:flex lg:flex-row flex-col justify-center overflow-hidden items-center py-10 my-8">
              <div className=" w-full lg:w-1/2  overflow-hidden">
                <div className="inner flex px-1 lg:px-4 flex-col justify-center items-center ">
                  <h2 className="text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center mx-3 text-shadow-sm">
                    رؤيتنا
                  </h2>

<div className="">

<h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                      الاستمرار في كوننا شركة رائدة في تقديم خدمات المحاسبة
                      والمراجعة والاستشارات المالية والإدارية ونموذجا متميزا
                      للمهنية
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                    أن نسعى جاهدين بخبراتنا ومعرفتنا العميقة في مجالنا لخدمة
                    العميل                    </span>
                  </h3>
                 
                 
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                      الالتزام بجعل أخلاقيات المهنة أساساً لنا في جميع جوانب
                      عملنا من خلال تقديم خدماتنا بكل أمانة وشفافية وصدق
                    </span>
                  </h3>
</div>
                </div>
              </div>

              <div className=" w-full lg:w-1/2 overflow-hidden ">
      <div className="inner flex justify-center  items-center">
  <img
    className=" transition-all duration-700 hover:scale-105 w-[70%]  object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/2030.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
            </div>
          </div>
        </>
      ) : (
        <>
         <div className="container m-auto my-10  " data-aos="fade-up">
          
          <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
          Company Vision
         </h2>
            <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-center overflow-hidden shadow-md rounded-lg w-full lg:flex lg:flex-row flex-col justify-center items-center py-10 my-8">
              <div className=" w-full lg:w-1/2 overflow-hidden">
                <div className="inner flex px-1 lg:px-4 flex-col justify-center items-center ">
                  <h2 className="text-green-600 text-2xl 4k:text-4xl my-4 font-semibold text-center mx-3 text-shadow-sm">
                  Our Vision
                  </h2>

<div className="">

<h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                    To continue to be a leading company in providing accounting, auditing, financial and administrative consulting services and a distinguished model of professionalism
                    </span>
                  </h3>
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>
                    
                    To strive with our deep experience and knowledge in our field to serve the client
                                      </span>
                  </h3>
                 
                 
                  <h3 className="text-gray-800 text-lg 4k:text-3xl flex  my-4 text-justify text-shadow-sm" >
                    <span className="text-blue-600 mx-3">
                      <i className="fa-solid fa-circle-dot"></i>
                    </span>
                    <span>

                    Commitment to making professional ethics a foundation for us in all aspects of our work by providing our services with complete honesty, transparency and sincerity
                    </span>
                  </h3>
</div>
                </div>
              </div>

              <div className=" w-full lg:w-1/2 overflow-hidden ">
      <div className="inner flex justify-center  items-center">
  <img
    className=" transition-all duration-700 hover:scale-105 w-[70%]  object-fit"
    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/NationalDay95/2030.png"
    alt="mohamed ben salman image"
  />
</div>

      </div>
            </div>
          </div>
        
        </>
      )}
    </>
  );
}
