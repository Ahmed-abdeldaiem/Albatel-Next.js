"use client";

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceDetail({ service }) {
  const { dir } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const handleScroll = () => {
    const section = document.getElementById("service-detail");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {dir === "rtl" ? (

<> 
{/* service header */}
<div
            className={`relative overflow-hidden  w-full  lg:h-[450px] 3xl:h-[500px] h-[180px] md:h-[250px]   mt-16 flex justify-center items-center`}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
              alt="about image header"
            />


            <div className="absolute inset-0 bg-gradient-to-l from-blue-800/70 to-green-200/50 opacity-90 z-10"></div>
            <div
              data-aos="fade-left"
              className="absolute top-4 start-6 md:start-14 px-2 flex    items-center justify-center z-20"
            >
              <h3 className="text-white text-sm  md:text-lg  lg:text-xl font-semibold mx-1">
                محاسبون ومراجعون قانونيون
              </h3>
            </div>

            <img
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
              className="w-[150px] mt-1 absolute bottom-4 end-4  hidden md:flex bg-black bg-opacity-50 rounded-3xl p-2 items-center justify-center z-20"
              alt="logo image "
            />

            <div className="absolute inset-0 z-20  flex flex-col justify-center ">
              <div className="w-full flex justify-center">
                <div
                  data-aos="fade-up"
                  className="w-full md:w-10/12 flex flex-col justify-center items-center md:items-start"
                >
                  <h1 className="text-white text-center text-3xl lg:text-6xl 3xl:text-6xl mb-4 font-semibold text-shadow-xl">
                  {service?.title?.ar}
                  </h1>
              
                  <h3 className="hidden py-4 mb-4 md:block text-lg lg:text-2xl font-semibold   text-white ">
                  {service?.subtitle?.ar}
                  </h3>
               
                  <div data-aos="fade-up">
                    <button onClick={handleScroll}>
                      <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                         تفاصيل الخدمة
                        <span className="mx-1">
                          <i className="fa-solid fa-arrow-down"></i>
                        </span>
                      </h3>
                    </button>
                    <Link
                  
                      href="/rfp"
                    >
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                         اطلب عرض سعر
                      </h3>
                    </Link>
                
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="service-detail">
{/* service details */}
<div className="container m-auto my-16">
<div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center items-center md:flex-row py-8 "
          >
            {/*  team and saauada  text */}
            <div className=" w-full lg:w-1/2">
              <div className="p-2 md:py-10 md:px-4 ">
                <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                    عن الخدمة
                </h2>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  {/* <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/saudiLogo.png"
                    alt="location icon"
                  /> */}
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  {service?.overview?.intro?.ar}
                  </p>

                </div>

                {service?.infoCards?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.infoCards.map((card, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1"
                        >
                         
                          <div className="flex items-center">
                          <img className="w-6 mx-2" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen.png" alt="arrow icon" />
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {card?.title?.ar}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {card?.value?.ar}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            
              </div>
            </div>

            {/*  team and saauada  image */}
            <div className=" hidden lg:flex lg:w-1/2 ">
              <div className="p-1 md:p-3 flex items-center justify-center">
                <img
                  className="w-[99%] rounded-3xl"
                  src={service?.heroImage}
                  alt="resposcibility"
                />
              </div>
            </div>
          </div>
</div>

            
          </div>
{/* محاور العمل */}
    
            <div className="container m-auto my-4" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                أبرز محاور العمل والتطوير
                </h2>

                
                {service?.overview?.keyHighlights?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.overview.keyHighlights.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.ar}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.description?.ar}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
      
          
     
            {/* الاستشارات المقدمة */}
            <div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
الخدمات الاستشارية
                </h2>

                
                {service?.servicesList?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.servicesList.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.ar}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.description?.ar}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
        

       
            {/* ابرز المراحل */}
            <div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
 أبرز مراحل العمل
                </h2>

                
                {service?.steps?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.steps.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.ar}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.content?.ar}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>

{/* لماذا تختار الباتل */}

<div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                    {service?.valueProposition?.title?.ar}
                </h2>

                
                {service?.valueProposition?.points.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.valueProposition.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                          <img className="w-6 mx-2" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen.png" alt="arrow icon" />

                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {point?.ar}
                            </h4>
                        
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>

{/* تواصل معنا */}
         
<div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                {service?.cta?.headline?.ar}
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                {service?.cta?.description?.ar}
                                </h3>

                <div className="flex flex-col justify-center items-center md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      اطلب استشارتك الآن
                    </h3>
                  </Link>
                  <Link href="/rfp">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      اطلب عرض سعر
                    </h3>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col md:flex-row w-full justify-between py-8  px-2 md:px-8 z-20 ">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center ">
                <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                 <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/callIcon2.png"
              alt="call icon"
            />
            </span>

                  <p className="text-white py-2 font-semibold cursor-pointer">
                    اتصل بنا
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-wider cursor-pointer">
                    966550554262+
                  </p>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                       <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/emailIcon2.png"
                    alt="email icon"
                  />
                  </span>

                  <p className="text-white py-2 font-semibold cursor-pointer">
                    راسلنا
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-wide cursor-pointer">
                  albatelcpa@albatelcpa.com
                  </p>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                  <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                       <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/locationIcon.png"
                    alt="location icon"
                  />
                  </span>
                  
                  <p className="text-white py-2 font-semibold cursor-pointer">
                    نتشرف بزيارتكم
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-widest cursor-pointer">
                    في جميع فروعنا
                  </p>
                </div>
              </div>
            </div>
</>



      ) : (

        <> 
{/* service header */}
<div
            className={`relative overflow-hidden  w-full  lg:h-[450px] 3xl:h-[500px] h-[180px] md:h-[250px]   mt-16 flex justify-center items-center`}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
              alt="about image header"
            />


            <div className="absolute inset-0 bg-gradient-to-l from-blue-800/70 to-green-200/50 opacity-90 z-10"></div>
            <div
              data-aos="fade-left"
              className="absolute top-4 start-6 md:start-14 px-2 flex    items-center justify-center z-20"
            >
              <h3 className="text-white text-sm  md:text-lg  lg:text-xl font-semibold mx-1">
              Certified Public Accountants
              </h3>
            </div>

            <img
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
              className="w-[150px] mt-1 absolute bottom-4 end-4  hidden md:flex bg-black bg-opacity-50 rounded-3xl p-2 items-center justify-center z-20"
              alt="logo image "
            />

            <div className="absolute inset-0 z-20  flex flex-col justify-center ">
              <div className="w-full flex justify-center">
                <div
                  data-aos="fade-up"
                  className="w-full md:w-10/12 flex flex-col justify-center items-center md:items-start"
                >
                  <h1 className="text-white text-center text-3xl lg:text-6xl 3xl:text-6xl mb-4 font-semibold text-shadow-xl">
                  {service?.title?.en}
                  </h1>
              
                  <h3 className="hidden py-4 mb-4 md:block text-lg lg:text-2xl font-semibold   text-white ">
                  {service?.subtitle?.en}
                  </h3>
               
                  <div data-aos="fade-up">
                    <button onClick={handleScroll}>
                      <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                      Service Details
                        <span className="mx-1">
                          <i className="fa-solid fa-arrow-down"></i>
                        </span>
                      </h3>
                    </button>
                    <Link
                  
                      href="/rfp"
                    >
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                      Request RFP
                      </h3>
                    </Link>
                
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="service-detail">
{/* service details */}
<div className="container m-auto my-16">
<div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center items-center md:flex-row py-8 "
          >
            {/*  team and saauada  text */}
            <div className=" w-full lg:w-1/2">
              <div className="p-2 md:py-10 md:px-4 ">
                <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                   About the Service
                </h2>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  {/* <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/saudiLogo.png"
                    alt="location icon"
                  /> */}
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  {service?.overview?.intro?.en}
                  </p>

                </div>

                {service?.infoCards?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.infoCards.map((card, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1"
                        >
                         
                          <div className="flex items-center">
                          <img className="w-6 mx-2" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen2.png" alt="arrow icon" />                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {card?.title?.en}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {card?.value?.en}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            
              </div>
            </div>

            {/*  team and saauada  image */}
            <div className=" hidden lg:flex lg:w-1/2 ">
              <div className="p-1 md:p-3 flex items-center justify-center">
                <img
                  className="w-[99%] rounded-3xl"
                  src={service?.heroImage}
                  alt="resposcibility"
                />
              </div>
            </div>
          </div>
</div>

            
          </div>
{/* محاور العمل */}
    
            <div className="container m-auto my-4" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                Key areas of work and development
                </h2>

                
                {service?.overview?.keyHighlights?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.overview.keyHighlights.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.en}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.description?.en}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
      
          
     
            {/* الاستشارات المقدمة */}
            <div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
Consulting services
                </h2>

                
                {service?.servicesList?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.servicesList.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.en}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.description?.en}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>
        

       
            {/* ابرز المراحل */}
            <div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
 Key stages of the work
                </h2>

                
                {service?.steps?.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.steps.map((work, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {work?.title?.en}: 
                            </h4>
                            <p className="text-gray-800  text-base leading-7 px-2">
                              {work?.content?.en}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>

{/* لماذا تختار الباتل */}

<div className="container m-auto my-8" data-aos="fade-up">
            <h2
                  data-aos="fade-up"
                  className="text-xl   lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                    {service?.valueProposition?.title?.en}
                </h2>

                
                {service?.valueProposition?.points.length > 0 && (
                    <div className="mt-1  w-full flex flex-col">
                      {service.valueProposition.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-1 my-2"
                        >
                         
                          <div className="flex items-center">
                          <img className="w-6 mx-2" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen2.png" alt="arrow icon" />

                            <h4 className="md:text-xl text-lg font-semibold text-blue-900">
                              {point?.en}
                            </h4>
                        
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
            </div>

{/* تواصل معنا */}
         
<div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                {service?.cta?.headline?.en}
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                {service?.cta?.description?.en}
                                </h3>

                <div className="flex flex-col justify-center items-center md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                    Request consultation 
                    </h3>
                  </Link>
                  <Link href="/rfp">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      Request RFP
                    </h3>
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col md:flex-row w-full justify-between py-8  px-2 md:px-8 z-20 ">
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center ">
                <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                 <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/callIcon2.png"
              alt="call icon"
            />
            </span>

                  <p className="text-white py-2 font-semibold cursor-pointer">
                    Call Us
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-wider cursor-pointer">
                    966550554262+
                  </p>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                       <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/emailIcon2.png"
                    alt="email icon"
                  />
                  </span>

                  <p className="text-white py-2 font-semibold cursor-pointer">
                  Email us
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-wide cursor-pointer">
                  albatelcpa@albatelcpa.com
                  </p>
                </div>

                <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
                  <span className="bg-blue-50 rounded-full cursor-pointer w-12 h-12 flex items-center justify-center bg-opacity-80">
                 
                       <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/locationIcon.png"
                    alt="location icon"
                  />
                  </span>
                  
                  <p className="text-white py-2 font-semibold cursor-pointer">
                  We are honored to welcome you
                  </p>
                  <p className="text-white mb-12 font-semibold tracking-widest cursor-pointer">
                  at all our branches
                  </p>
                </div>
              </div>
            </div>
</>
       
      )}
    </>
  );
}
