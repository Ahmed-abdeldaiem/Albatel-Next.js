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
import FasadDay from "./components/FasadDay/FasadDay";


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
            className="relative w-full h-[100vh]  overflow-hidden bg-slate-100"
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
             
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           
                {/* Content for Slide 1 */}
                <div className="relative z-20  flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center flex-col ">
                    <img
                      src="/BatelWhiteLogo.png"
                      alt="logo image in slide 1"
                      loading="lazy"
                      className={`w-1/2 4k:w-3/12 lg:w-3/12 mt-2 transition-all  ${
                        currentIndex === 0 ? "animate-moveIn" : ""
                      }`}
                    />

                    <div className={`flex flex-col text-center  `}>
                      <h1
                       
                        className="text-white text-sm md:text-xl lg:text-4xl 4k:text-5xl font-semibold text-shadow-xl"
                      >
                        شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                      </h1>
                      <h1
                       
                        className="text-white text-sm md:text-xl lg:text-3xl 4k:text-4xl py-2 font-semibold text-shadow-xl"
                      >
                        Batel Abdullah Al-Batel & Co. Professional Services
                    
                      </h1>
               
                      
                    
                    </div>
                  </div>
             
                  <div
                    className={`flex flex-col  lg:flex-row items-center lg:items-stretch justify-center gap-3 sm:gap-4 w-full max-w-xl sm:w-3/4 pt-9 ${
                      currentIndex === 0 ? "animate-moveIn2" : ""
                    }`}
                  >
     <Link
                      href="/contact"
                      className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border border-teal-200/50 bg-gradient-to-br from-teal-500 via-sky-500 to-blue-700 px-6 py-2.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_20px_-2px_rgba(15,118,110,0.45),0_6px_24px_-4px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/25 transition-[transform,box-shadow,filter] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-teal-100 hover:shadow-[0_8px_32px_-4px_rgba(45,212,191,0.55),0_12px_40px_-8px_rgba(14,165,233,0.35),inset_0_1px_0_0_rgba(255,255,255,0.35)] hover:ring-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-100 active:translate-y-0 active:scale-[0.98] sm:px-9 4k:px-11 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
                    >
                      <span className="relative z-10 text-center leading-snug drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                        اطلب استشارتك
                      </span>
                      <span
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-80"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-200/0 via-white/20 to-emerald-200/0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>

                    <Link
                      href="/about"
                      className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <span className="relative z-10 text-center leading-snug">
                        تعرف علينا
                      </span>
                      <span
                        className="pointer-events-none absolute inset-y-0 -start-1/4 w-[42%] -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition duration-500 ease-out group-hover:translate-x-[300%] group-hover:opacity-100 motion-reduce:group-hover:translate-x-0"
                        aria-hidden
                      />
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
               
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           
                {/* Content for Slide 2 */}

                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-4xl 4k:text-5xl font-semibold md:text-start text-shadow-xl  my-8 ${
                      currentIndex === 1 ? "animate-moveIn2" : ""
                    }`}
                  >
                    خدماتنا
                  </h2>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold"> مراجعة القوائم المالية</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات مالية ومحاسبية وضريبية</p>
                  </div>

                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات استشارية متخصصة</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">حلول شاملة لاحتياجات الشركات</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-3 4k:text-3xl text-shadow-xl  font-semibold">خدمات للافراد والشركات</p>
                  </div>

                  <Link
                    className={`${currentIndex === 1 ? "animate-moveIn2" : ""}`}
                    href={"services"}
                  >
                 <button className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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
               
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           
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
                  <button className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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
            className="relative w-full h-[100vh]  overflow-hidden bg-slate-100"
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
             
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           

                {/* Content for Slide 1 */}
                <div className="relative z-20  flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src="/BatelWhiteLogo.png"
                      alt="logo image in slide 1"
                      loading="lazy"
                     className={`w-1/2 4k:w-3/12 lg:w-3/12 mt-2 transition-all  ${
                        currentIndex === 0 ? "animate-moveIn" : ""
                      }`}
                    />

                    <div className={`flex flex-col text-center  `}>
                      <h1
                       
                        className="text-white text-sm md:text-xl lg:text-4xl 4k:text-5xl font-semibold"
                      >
                        شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                      </h1>
                      <h1
                       
                        className="text-white text-sm md:text-xl lg:text-3xl 4k:text-4xl pt-6 font-semibold"
                      >
                       Batel Abdullah Al-Batel & Co. Professional Services
                      </h1>
                    </div>
                  </div>

                  <div
                    className={`flex justify-center gap-4   w-3/4 pt-9 ${
                      currentIndex === 0 ? "animate-moveIn2" : ""
                    }`}
                  >
                    <Link href={"about"}>
                    <button className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                        About US
                      </button>
                    </Link>
                    <Link href={"contact"}>
                    <button className=" text-shadow-xl hover:text-shadow-green  px-7 py-2 4k:py-4 4k:px-9 overflow-hidden border-2 border-green-50 transition-all duration-700 hover:border-blue-800 text-sm 4k:text-3xl text-nowrap font-semibold text-white hover:text-green-800 bg-slate-100 hover:bg-opacity-70 bg-opacity-20 rounded-2xl">
                        Contact Us
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
            
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           
                {/* Content for Slide 2 */}

                <div className="relative z-20 w-full md:w-8/12  flex  flex-col items-center justify-center text-center md:items-start md:ps-32 md:ms-24 md:text-start   h-full">
                  <h2
                    className={`text-white  text-2xl lg:text-3xl 4k:text-4xl font-semibold md:text-start  my-10 ${
                      currentIndex === 1 ? "animate-moveIn2" : ""
                    }`}
                  >
                    Our Services
                  </h2>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Financial Audit</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Financial, Accounting and Tax Advisory</p>
                  </div>

                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Specialized consulting services</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Comprehensive solutions for corporate needs</p>
                  </div>
                  <div className="my-2 lg:my-4 flex items-center justify-center">
                    <span className="mx-1">
                     <img className="w-7" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arrow2.png" alt="" />
                    </span>
                   <p className="text-white text-lg lg:text-2xl pb-2 4k:text-3xl text-shadow-xl  font-semibold">Services for individuals and companies</p>
                  </div>
                  <Link
                    className={`${currentIndex === 1 ? "animate-moveIn2" : ""}`}
                    href={"services"}
                  >
               <button className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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
              
                <div className="absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(30,58,138,0.66)_0%,rgba(37,99,235,0.54)_48%,rgba(56,189,248,0.48)_100%)]"></div>
                <div className="absolute inset-0 z-10 bg-[radial-gradient(72%_56%_at_74%_16%,rgba(219,234,254,0.40)_0%,rgba(147,197,253,0.20)_30%,transparent_64%)]"></div>
                <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(30,64,175,0.38)_0%,rgba(59,130,246,0.20)_46%,transparent_100%)]"></div>
           
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
                 <button className="group relative isolate inline-flex min-h-[44px] min-w-[44px] w-auto flex-none items-center justify-center overflow-hidden rounded-2xl border-2 border-white/55 bg-white/[0.12] px-5 lg:px-6 py-2.5 text-sm font-semibold text-white shadow-md backdrop-blur-md transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-blue-900 hover:shadow-lg hover:shadow-blue-950/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.98] sm:px-8 4k:px-10 4k:py-4 4k:text-3xl motion-reduce:transition-none motion-reduce:hover:translate-y-0">
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
{/* اليوم الدولي لمكافحة الفساد */}
{/* <FasadDay /> */}

<MainPagePartners />

      {/* 4th section : company goal */}
      <Goal />
      {/* 6th section : company vision */}
      <Vision />
      {/* 8th section : company message */}
      <Message />
    

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
