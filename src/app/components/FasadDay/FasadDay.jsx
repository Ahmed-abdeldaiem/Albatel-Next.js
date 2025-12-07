"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";


import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FasadDay() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  const slides = [
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/1.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/11.png',
      },
     },

    {
     image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/2.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/12.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/3.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/13.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/4.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/14.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/5.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/15.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/6.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/16.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/7.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/17.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/8.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/18.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/9.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/19.png',
      },
    },
    {
      image: {
        ar: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/ArLogo/10.png',
        en: 'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/AlfasadDay/EnLogo/20.png',
      },
    },
  ];



  const totalSlides = slides.length ; 

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
      <h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-5" data-aos="fade-up">
      {dir=='rtl'?<>      اليوم الدولي لمكافحة الفساد
        </>:<>International Anti-Corruption Day</>}
    
         </h2>

         <h2  className="text-xl lg:text-2xl font-semibold 4k:text-4xl mt-4 mb-1 text-black text-center  pt-5" data-aos="fade-up">
      {dir=='rtl'?<>     نجدد العهد في اليوم الدولي لمكافحة الفساد بأن نكون شركاء فاعلين في بناء وطن تسوده النزاهة والشفافية
        </>:<>We renew our commitment on the International Anti-Corruption Day to be active partners in building a country that is governed by transparency and integrity</>}
    
         </h2>

         <div
            id="default-carousel"
            // bg-slate-100
            // className="relative w-full h-[85vh] mt-16 overflow-hidden  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover"
            className="relative w-full h-[70vh] mt-8 overflow-hidden bg-slate-100"
            data-carousel="slide"
          >
       
                
            {/* Carousel wrapper */}
            <div className="relative  w-full h-full flex items-center justify-center">
              {/* Slide 1 */}
         
{/* Slides Images */}
            {slides.map((slide, index) => {
              const slideIndex = index ;
           
              return (
                <div
                  key={slideIndex}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                    currentIndex === slideIndex ? "opacity-100" : "opacity-0"
                  } bg-contain bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url('${dir=='rtl'?slide.image.ar:slide.image.en}')` }}
                  data-carousel-item
                >
                  {/* <div className="absolute inset-0 opacity-80 z-10 overlay-gradient"></div> */}
                
                </div>
              );
            })}

            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-3 rtl:space-x-reverse">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`w-5 h-1 rounded-full ${
                    currentIndex === index ? "bg-white" : "bg-blue-800"
                  }`}
                  aria-current={currentIndex === index}
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
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
                  className="w-4 h-6 text-blue-900 group-hover:text-gray-950 transition-all duration-500  rtl:rotate-0"
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
                  className="w-4 h-6 text-blue-900 group-hover:text-gray-950 transition-all duration-500 rtl:rotate-180"
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
  );
}