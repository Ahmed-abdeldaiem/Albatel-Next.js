"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "./contexts/langContext";

import Branches from "./components/Branches/Branches";
import Goal from "./components/Goal/Goal";
import MainPagePartners from "./components/MainPagePartners/MainPagePartners";
import Manager from "./components/Manager/Manager";
import Message from "./components/Message/Message";




import ServiceDesc from "./components/ServiceDesc/ServiceDesc";
import Vision from "./components/Vision/Vision";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);
  const totalSlides = 3; // Number of slides
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    autoPlayRef.current = goToNextSlide;
  });

 
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 8000); // Adjust the interval for auto-moving
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* First Section Caresoul */}

      {dir == "rtl" ? (
        <>
          <div
            id="default-carousel"
            // bg-slate-100
            // className="relative w-full h-[85vh] mt-16 overflow-hidden  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover"
            className="relative w-full h-[95vh]  overflow-hidden bg-slate-100"
            data-carousel="slide"
          >
       
                
            {/* Carousel wrapper */}
            <div className="relative  w-full h-full flex items-center justify-center">
              {/* Slide 1 */}
         
              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentIndex === 0 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide1.jpeg')] bg-cover bg-center bg-no-repeat`}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
             
                <div className="absolute inset-0 bg-gradient-to-l from-blue-800/80 to-blue-600/50 opacity-90 z-10"></div>
           
                {/* Content for Slide 1 */}
                <div className="relative z-20  flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center flex-col md:flex-row-reverse">
                    <img
                      src="/BatelWhiteLogo.png"
                      alt="logo image in slide 1"
                      loading="lazy"
                      className={`w-1/3 4k:w-3/12 md:w-2/12 mt-2 transition-all  ${
                        currentIndex === 0 ? "animate-moveIn" : ""
                      }`}
                    />

                    <div className={`flex flex-col text-center  `}>
                      <h1
                       
                        className="text-white text-xl lg:text-3xl 4k:text-5xl font-semibold text-shadow-xl"
                      >
                        شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                      </h1>
                      <h1
                       
                        className="text-white text-xl lg:text-2xl 4k:text-4xl py-2 font-semibold text-shadow-xl"
                      >
                        Batel Abdullah Al-Batel & Partners for Professional
                        Consultations
                      </h1>
               
                      
                    
                    </div>
                  </div>
             
                  <div
                    className={`flex justify-center lg:justify-start  w-3/4 pt-9 ${
                      currentIndex === 0 ? "animate-moveIn2" : ""
                    }`}
                  >
                    <Link className="flex justify-center items-center" href={"about"}>
                    <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                        تعرف علينا
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentIndex === 1 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide2.jpg')] bg-cover bg-center bg-no-repeat `}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
                {/* Content for Slide 2 */}

                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-4xl 4k:text-5xl font-semibold md:text-start text-shadow-xl  my-8 ${
                      currentIndex === 1 ? "animate-moveIn2" : ""
                    }`}
                  >
                    خدماتنا
                  </h2>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold"> مراجعة القوائم المالية</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات مالية ومحاسبية وضريبية</p>
                  </div>

                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات استشارية متخصصة</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">حلول شاملة لاحتياجات الشركات</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات للافراد والشركات</p>
                  </div>

                  <Link
                    className={`${currentIndex === 1 ? "animate-moveIn2" : ""}`}
                    href={"services"}
                  >
                 <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                      تعرف على خدماتنا
                    </button>
                  </Link>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentIndex === 2 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide3.jpg')] bg-cover bg-center bg-no-repeat`}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
                {/* Content for Slide 3 */}
                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-4xl 4k:text-5xl font-semibold md:text-start text-shadow-xl my-10 ${
                      currentIndex === 2 ? "animate-moveIn2" : ""
                    }`}
                  >
                    فريق العمل
                  </h2>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">مراجعون ومحاسبون قانونيون</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خبراء استشارات ضريبية وزكوية</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold"> خبراء استشارات إدارية واقتصادية وترجمة</p>
                  </div>

                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خبراء استشارات قانونية</p>
                  </div>
                  <Link
                    className={`${currentIndex === 2 ? "animate-moveIn2" : ""}`}
                    href={"/ourTeam"}
                  >
                  <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                      تعرف على فريقنا
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 0 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 0}
                aria-label="Slide 1"
                onClick={() => setCurrentIndex(0)}
              />
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 1 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 1}
                aria-label="Slide 2"
                onClick={() => setCurrentIndex(1)}
              />
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 2 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 2}
                aria-label="Slide 3"
                onClick={() => setCurrentIndex(2)}
              />
            </div>

            {/* Slider controls */}

            <button
              type="button"
              className="absolute top-0 left-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
              data-carousel-prev
              onClick={goToNextSlide}
            >
              <span className="inline-flex   items-center justify-center w-10 h-10 transition-all duration-500 rounded-full    ">
                <svg
                  className="w-4 h-6 text-blue-900 group-hover:text-gray-100 transition-all duration-500  rtl:rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 5 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1L1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
              data-carousel-next
              onClick={goToPrevSlide}
            >
         <span className="inline-flex   items-center justify-center w-10 h-10 transition-all duration-500 rounded-full    ">
                <svg
                  className="w-4 h-6 text-blue-900 group-hover:text-gray-100 transition-all duration-500 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1L1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            id="default-carousel"
            className="relative w-full h-[95vh]  overflow-hidden bg-slate-100"
            data-carousel="slide"
          >
         
            {/* Carousel wrapper */}
            <div className="relative  w-full h-full flex items-center justify-center">
              {/* Slide 1 */}

              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  currentIndex === 0 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide1.jpeg')] bg-cover bg-center bg-no-repeat`}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>

                {/* Content for Slide 1 */}
                <div className="relative z-20  flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center flex-col md:flex-row-reverse">
                    <img
                      src="/BatelWhiteLogo.png"
                      alt="logo image in slide 1"
                      loading="lazy"
                      className={`w-1/3 4k:w-3/12 md:w-2/12 mt-2 transition-all  ${
                        currentIndex === 0 ? "animate-moveIn" : ""
                      }`}
                    />

                    <div className={`flex flex-col text-center  `}>
                      <h1
                       
                        className="text-white text-xl lg:text-3xl 4k:text-5xl font-semibold"
                      >
                        شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                      </h1>
                      <h1
                       
                        className="text-white text-xl lg:text-2xl 4k:text-4xl font-semibold"
                      >
                        Batel Abdullah Al-Batel & Partners for Professional
                        Consultations
                      </h1>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center lg:justify-start  w-3/4 pt-9 ${
                      currentIndex === 0 ? "animate-moveIn2" : ""
                    }`}
                  >
                    <Link href={"about"}>
                    <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                        About US
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentIndex === 1 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide2.jpg')] bg-cover bg-center bg-no-repeat`}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
                {/* Content for Slide 2 */}

                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-3xl 4k:text-4xl font-semibold md:text-start  my-10 ${
                      currentIndex === 1 ? "animate-moveIn2" : ""
                    }`}
                  >
                    Our Services
                  </h2>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Financial Audit</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Financial, Accounting and Tax Advisory</p>
                  </div>

                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Specialized consulting services</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Comprehensive solutions for corporate needs</p>
                  </div>
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Services for individuals and companies</p>
                  </div>
                  <Link
                    className={`${currentIndex === 1 ? "animate-moveIn2" : ""}`}
                    href={"services"}
                  >
               <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                      Our Services
                    </button>
                  </Link>
                </div>
              </div>

              {/* Slide 3 */}
              <div
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  currentIndex === 2 ? "opacity-100" : "opacity-0"
                } bg-[url('/homeSlide3.jpg')] bg-cover bg-center bg-no-repeat `}
                data-carousel-item
              >
                {/* Gradient blue overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-blue-900  to-blue-600/50 opacity-80 z-10"></div>
                {/* Content for Slide 3 */}
                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-3xl 4k:text-4xl font-semibold md:text-start  my-10 ${
                      currentIndex === 2 ? "animate-moveIn2" : ""
                    }`}
                  >
                    Team Work
                  </h2>
              
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold"> Certified Public Accountants</p>
                  </div>
                 
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Tax and Zakat Consultants</p>
                  </div>
                
                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Management and economic consultants</p>
                  </div>

                  <div className="my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold"> Legal Consultants</p>
                  </div>
                  <Link
                    className={`${currentIndex === 2 ? "animate-moveIn2" : ""}`}
                    href={"/ourTeam"}
                  >
                 <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-xl 4k:text-3xl font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                      Our Team
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Slider indicators */}
            <div className="absolute  z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 0 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 0}
                aria-label="Slide 1"
                onClick={() => setCurrentIndex(0)}
              />
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 1 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 1}
                aria-label="Slide 2"
                onClick={() => setCurrentIndex(1)}
              />
              <button
                type="button"
                className={`w-5 h-2 rounded-full ${
                  currentIndex === 2 ? "bg-white" : "bg-blue-800"
                }`}
                aria-current={currentIndex === 2}
                aria-label="Slide 3"
                onClick={() => setCurrentIndex(2)}
              />
            </div>

            {/* Slider controls */}

            <button
              type="button"
              className="absolute top-0 left-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
              data-carousel-prev
              onClick={goToNextSlide}
            >
             <span className="inline-flex   items-center justify-center w-10 h-10 transition-all duration-500 rounded-full    ">
                <svg
                  className="w-4 h-5 text-blue-900 group-hover:text-gray-100 transition-all duration-500  rtl:rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1L1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30  items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden md:flex"
              data-carousel-next
              onClick={goToPrevSlide}
            >
            <span className="inline-flex   items-center justify-center w-10 h-10 transition-all duration-500 rounded-full    ">
                <svg
                  className="w-4 h-5 text-blue-900 group-hover:text-gray-100 transition-all duration-500  rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1L1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          </div>
        </>
      )}

      {/* 4th section : company goal */}
      <Goal />
      {/* 6th section : company vision */}
      <Vision />
      {/* 8th section : company message */}
      <Message />
      <MainPagePartners />

      {/* second Section : Branches */}
      <Branches />
      {/* 3th Section : our parteners */}

      {/* 5th section : team  */}
      <Manager />

      {/* 7th section : services  */}
      <ServiceDesc />
    </>
  );
}
