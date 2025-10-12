"use client";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

import { LanguageContext } from "../../contexts/langContext";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
export default function Footer() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      {dir == "rtl" ? (
        <>
          <footer className="relative bg-[url('/footer.jpg')] bg-no-repeat bg-center bg-cover shadow z-30 ">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl 4k:max-w-screen-3xl mx-auto p-4 md:pt-8 md:pb-4  ">
              {/* الباتل وتواصل معنا  */}
              <div
                className="sm:flex sm:items-center sm:justify-between"
                data-aos="fade-up"
              >
                <Link
                  href="/"
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/logo-1.png"
                    className="h-8 cursor-pointer "
                    alt="Albatel Logo"
                  />
                  <span className="self-center  text-sm lg:text-xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap text-shadow-xl hover:text-shadow-blue ">
                    الباتل محاسبون ومراجعون قانونيون
                  </span>
                </Link>
              </div>

              <div className="w-full flex flex-col justify-center items-center md:justify-around md:flex-row ">
                {/* important links */}
                <div className="w-full md:w-1/3">
                  <div data-aos="fade-up" className="flex flex-col justify-center md:justify-start md:items-start items-center p-3">
                    <h3
                      
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      روابط مهمة
                    </h3>
                    <Link
                      href="/contact"
                      className="block text-blue-100 text-lg tracking-widest px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all  text-shadow-xl hover:text-shadow-green"
                    >
                      تواصل
                    </Link>
                    <Link
                      href="/rfp"
                      className="block text-blue-100 text-lg   px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      طلب عرض سعر
                    </Link>
                    <Link
                      href="/careers"
                      className="block text-blue-100 text-lg   px-4 text-nowrap py-2  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      وظائف
                    </Link>
                    <Link
                      href="/services"
                      className="block text-blue-100 text-lg   px-4 text-nowrap pt-2  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      خدماتنا
                    </Link>
                  </div>
                </div>

                {/* media */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col p-3 justify-center items-center">
                    <h3
                      data-aos="fade-up"
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      تابعنا على
                    </h3>
                    <div   data-aos="fade-up" className="flex gap-1 ">
                      {/* linked in */}
                      <a
                        href="https://www.linkedin.com/company/albatel-cpa/posts/?feedView=all"
                      
                        className="z-20 my-3  group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%209.png" alt="linkedin" />
                      </a>
                      {/* inestgram */}
                      <a
                        href="https://www.instagram.com/albatel_cpa/"
                        className="z-20 my-3 group "
                      
                        target={"_blank"}
                      >
                       
                       <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%205.png" alt="instagram" />
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/albatel_cpa"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%202.png" alt="twitter" />
                      </a>
                      {/* facebook */}
                      <a
                        href="https://www.facebook.com/profile.php?id=61582443590665"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%204.png" alt="facebook" />
                      </a>
                      {/* youtube */}
                      <a
                        href="https://www.youtube.com/@Albatel_CPA"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%207.png" alt="youtube" />
                      </a>
                      {/* tiktok */}
                      <a
                        href="https://www.tiktok.com/@albatel_cpa?_t=ZS-90UGIjq7hMf&_r=1"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png" alt="tiktok" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* contact */}
                <div className="w-full md:w-1/3">
                  <div  data-aos="fade-up" className="flex flex-col justify-center items-center p-3">
                    <h3
                     
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      تواصل معنا
                    </h3>

                    {/* email */}
                    <a 
              
                      href="mailto:albatelcpa@albatelcpa.com?subject=I Contact From Your Website&body=Hello%20team,"
                      className="flex items-center justify-center group gap-2 text-green-600 text-lg z-20 my-3 cursor-pointer hover:text-blue-300 duration-500 transition-all text-shadow-xl"
                    >
                    <img className="w-[8%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/email.png" alt="email" />
                      <span className="text-blue-100 hover:text-blue-300 duration-500 transition-all">
                        albatelcpa@albatelcpa.com
                      </span>
                    </a>

                    {/* الهاتف */}
                
                <div className="flex items-center justify-center group gap-2">
                <img className="w-[18%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%2010.png" alt="whatap" />
                      <span className="text-blue-100  hover:text-blue-300 duration-500 transition-all ">
                        966550554262+{" "}
                      </span>
                </div>
                    
                   
                   
                  </div>
                </div>
              </div>

              <hr className="my-4 border-green-500 sm:mx-auto  lg:my-3" />
              <div className="text-center">
                <span className="block text-sm text-gray-400 text-shadow-xl sm:text-center z-20 ">
                  © 2025 All Rights Reserved @ Al-Batel
                </span>

                <span className="block text-xs z-40 cursor-pointer text-gray-400 sm:text-center text-shadow-xl ">
                <Link href="/TeamMember/42" className="px-1" target="_blank">
                    <img
                      src="/BatelLogo1.png"
                      className="w-5 inline-block hover:rotate-[180deg] transition-all duration-700"
                      alt="Albatel Logo"
                      style={{ pointerEvents: 'auto' }}
                    />
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                    className=" px-1 text-shadow-xl"
                    target={"_blank"}
                  >
                    <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                    className="px-2 text-shadow-xl"
                    target="_blank"
                  >
                    <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                  </a>
                  by Ahmed Abdeldaiem
                </span>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <>
          <footer className="relative bg-[url('/footer.jpg')] bg-no-repeat bg-center bg-cover shadow z-30 ">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/50 to-blue-800/40 opacity-80 z-10"></div>

            <div className="w-full relative z-20 max-w-screen-xl 4k:max-w-screen-3xl mx-auto p-4 md:pt-8 md:pb-4 ">
              {/* الباتل وتواصل معنا  */}
              <div
                className="sm:flex sm:items-center sm:justify-between"
                data-aos="fade-up"
              >
                <Link
                  href="/"
                  className="flex bg-green-50 p-2 bg-opacity-30 group hover:bg-opacity-40 duration-700 transition-all rounded-full z-20 items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/home%20images/logo-1.png"
                    className="h-8 cursor-pointer "
                    alt="Albatel Logo"
                  />
                  <span className="self-center text-sm lg:text-xl group-hover:text-blue-950 duration-700 transition-all  text-green-50  whitespace-nowrap text-shadow-xl hover:text-shadow-blue">
                    Al-Batel Certified Public Accountants
                  </span>
                </Link>
              </div>

              <div className="w-full flex flex-col justify-center items-center  md:justify-between md:flex-row ">
                {/* important links */}
                <div className="w-full md:w-1/3 ">
                  <div    data-aos="fade-up" className="flex flex-col justify-center md:justify-start md:items-start items-center p-3">
                    <h3
                   
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      Important Links
                    </h3>
                    <Link
                      href="/contact"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      {" "}
                      Contact{" "}
                    </Link>
                    <Link
                      href="/rfp"
                      className="block text-blue-100 text-lg  tracking-widest2 px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      {" "}
                      rfp{" "}
                    </Link>
                    <Link
                      href="/careers"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      Jobs
                    </Link>
                    <Link
                      href="/services"
                      className="block text-blue-100 text-lg  tracking-widest px-4 text-nowrap py-1  hover:text-blue-300 duration-500 transition-all text-shadow-xl hover:text-shadow-green"
                    >
                      {" "}
                      Services{" "}
                    </Link>
                  </div>
                </div>

                {/* media */}
                <div className="w-full md:w-1/3">
                  <div className="flex flex-col justify-center items-center p-3">
                    <h3
                      data-aos="fade-up"
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      Follow Us
                    </h3>
                    <div   data-aos="fade-up" className="flex gap-2 ">
                      {/* linked in */}
                      <a
                        href="https://www.linkedin.com/company/albatel-cpa/posts/?feedView=all"
                      
                        className="z-20 my-3  group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%209.png" alt="linkedin" />
                      </a>
                      {/* inestgram */}
                      <a
                        href="https://www.instagram.com/albatel_cpa/"
                        className="z-20 my-3 group "
                      
                        target={"_blank"}
                      >
                       
                       <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%205.png" alt="instagram" />
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://x.com/albatel_cpa"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%202.png" alt="twitter" />
                      </a>
                      {/* facebook */}
                      <a
                        href="https://www.facebook.com/profile.php?id=61582443590665"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%204.png" alt="facebook" />
                      </a>
                      {/* youtube */}
                      <a
                        href="https://www.youtube.com/@Albatel_CPA"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%207.png" alt="youtube" />
                      </a>
                      {/* tiktok */}
                      <a
                        href="https://www.tiktok.com/@albatel_cpa?_t=ZS-90UGIjq7hMf&_r=1"
                        
                        className="z-20 my-3 group "
                        target={"_blank"}
                      >
                      
                      <img className="w-[60%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png" alt="tiktok" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* contact */}
                <div className="w-full md:w-1/3">
                  <div data-aos="fade-up" className="flex flex-col justify-center items-center p-3">
                    <h3
                      
                      className="text-green-50 text-lg pb-3 hover:text-green-300 duration-500 transition-all cursor-pointer lg:text-xl text-shadow-xl hover:text-shadow-green"
                    >
                      Contact On
                    </h3>

                 
                    {/* email */}
                    <a 
              
                      href="mailto:albatelcpa@albatelcpa.com?subject=I Contact From Your Website&body=Hello%20team,"
                      className="flex items-center justify-center group gap-2 text-green-600 text-lg z-20 my-3 cursor-pointer hover:text-blue-300 duration-500 transition-all text-shadow-xl"
                    >
                    <img className="w-[8%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/email.png" alt="email" />
                      <span className="text-blue-100 hover:text-blue-300 duration-500 transition-all">
                        albatelcpa@albatelcpa.com
                      </span>
                    </a>

                    {/* الهاتف */}
                
                <div className="flex items-center justify-center group gap-2">
                <img className="w-[18%] group-hover:scale-110 transition-all duration-500 " src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%2010.png" alt="whatap" />
                      <span className="text-blue-100  hover:text-blue-300 duration-500 transition-all ">
                        966550554262+{" "}
                      </span>
                </div>
                    
                  </div>
                </div>
              </div>
              <div className="text-center">
                <hr className="my-4 border-green-500 sm:mx-auto  lg:my-3" />
                <span className="block text-sm text-gray-400 sm:text-center z-20 ">
                  © 2025 All Rights Reserved @ Al-Batel
                </span>

                <span className="block text-sm z-40 cursor-pointer text-gray-400 sm:text-center ">
                  by Ahmed Abdeldaiem
                  <a
                    href="https://www.linkedin.com/in/ahmed-abdeldaiem-a26079227/"
                    className=" px-2"
                    target={"_blank"}
                  >
                    <i className="fa-brands  fa-linkedin-in cursor-pointer  hover:text-blue-500 transition-all duration-500"></i>
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=ahmadabdeldaiem18@gmail.com"
                    className="px-2"
                    target="_blank"
                  >
                    <i className="fa-brands fa-google cursor-pointer hover:text-red-500 transition-all duration-500"></i>
                  </a>
                  <Link href="/TeamMember/42" className="px-1" target="_blank">
                    <img
                      src="/BatelLogo1.png"
                      className="w-5 inline-block hover:rotate-[180deg] transition-all duration-700"
                      alt="Albatel Logo"
                      style={{ pointerEvents: 'auto' }}
                    />
                  </Link>
                </span>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
