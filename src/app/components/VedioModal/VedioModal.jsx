"use client";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/langContext";
import dynamic from 'next/dynamic'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })
export default function VedioModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const context = useContext(LanguageContext);
  const dir = context?.dir || (typeof document !== 'undefined' ? document.documentElement.getAttribute('dir') || 'rtl' : 'rtl');
 
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      
      <div className="fixed bottom-4 left-4 z-50 cursor-pointer group">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative flex h-11 w-11"
        >
          {/* Green ping circle behind */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-90"></span>

          {/* Static icon/image on top */}
          <span className="relative inline-flex rounded-full">
            <img
              src="/vedio2.jpg"
              alt="Vedio Icon"
              className="w-11 h-11 rounded-full"
            />
          </span>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {dir === "rtl" ? "فيديو تعريفي" : "Profile Video"}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>

      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden={!isModalOpen}
        className={`fixed top-0 right-0 left-0 z-50 w-full h-full overflow-x-hidden overflow-y-auto flex items-center justify-center transition-opacity duration-300 ease-in-out ${
          isModalOpen
            ? "bg-black bg-opacity-50"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsModalOpen(false)}
      >
        <div
          className={`relative p-4 w-full max-w-2xl max-h-full transform transition-all duration-300 ease-in-out ${
            isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-sm ">
            {/* Modal header */}
            <div className="flex items-center justify-center p-4 md:p-2 border-b rounded-t  border-gray-200">
              <div className="w-full">
                <h3 className="md:text-3xl text-lg text-center font-semibold text-blue-900 text-shadow-blue ">
                  Al-Batel CPA
                </h3>
              </div>

              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              {/* vedio albatel CPA */}
              <video className="" controls>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Modal footer */}
            <div className="flex items-center justify-evenly p-4 md:p-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <h3 className="text-blue-800 text-shadow-blue text-lg font-semibold">
                {dir == "rtl" ? "تابعونا على :" : "Follow Us on:"}
              </h3>
              {/* linked in */}
              <a
                data-aos="fade-up"
                href="https://www.linkedin.com/company/albatel-cpa/"
                className="z-20 my-3 "
                target={"_blank"}
              >
                <span className=" border-blue-500 border hover:border-blue-900 transition-all duration-500 rounded-full p-2 ">
                  <i className="fa-brands  fa-linkedin-in cursor-pointer px-1 text-lg text-blue-500  hover:text-blue-700 transition-all duration-500 text-shadow-green"></i>
                </span>
              </a>
              {/* inestgram */}
              <a
                data-aos="fade-up"
                href="https://www.instagram.com/albatelksa/"
                className="z-20 my-3"
                target={"_blank"}
              >
                <span className=" border-red-300 border hover:border-red-700 transition-all duration-500 rounded-full p-2 ">
                  <i className="fab fa-instagram cursor-pointer px-1 text-lg text-red-300  hover:text-red-600 transition-all duration-500 text-shadow-green"></i>
                </span>
              </a>
              {/* Twitter */}
              <a
                data-aos="fade-up"
                href="https://x.com/albatel_cpa"
                className="z-20 my-3"
                target={"_blank"}
              >
                <span className=" border-blue-500 border hover:border-blue-900 transition-all duration-500 rounded-full p-2 ">
                  <i className="fab fa-twitter cursor-pointer px-1 text-lg text-blue-400 hover:text-gray-500 transition-all duration-500 text-shadow-green"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
