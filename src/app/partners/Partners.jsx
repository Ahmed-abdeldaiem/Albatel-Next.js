"use client";
import React, { useContext, useEffect, useState } from 'react'
  

import { LanguageContext } from '../contexts/langContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Partners({ partners: initialPartners = [] }) {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [partners, setPartners] = useState(initialPartners);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  useEffect(() => {
    setPartners(Array.isArray(initialPartners) ? initialPartners : []);
  }, [initialPartners]);


  return <>
  

  


{dir == "rtl" ? <>
<div
      
            className={`relative overflow-hidden  w-full lg:h-[450px] 3xl:h-[500px] h-[270px] md:h-[330px]  mt-16 flex justify-center items-center`}
          >
            <img
              src="/homeSlide3.jpg"
              className="w-full h-full  z-10"
              alt="about us image "
            />
            {/* Gradient blue overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div> */}
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
              data-aos="fade-left"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
                className="w-[150px] mt-1 absolute bottom-4 start-4 hidden md:flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
                alt="logo image "
              />
         
       
         
            <div className="absolute inset-0 z-20  flex flex-col justify-center ">
              <h1 data-aos="fade-up" className="text-white  text-shadow-xl text-center text-lg lg:text-4xl 3xl:text-5xl mb-4 font-semibold">
              عملاؤنا هم جوهر نجاحنا..شراكة مبنية على الثقة والخبرة
              </h1>
              <h2 data-aos="zoom-in"  data-aos-delay="500" className="text-white text-shadow-xl text-center text-lg lg:text-4xl  font-semibold">
              معًا نحو قرارات مالية أكثر دقة ونجاح مستدام
              </h2>
            
            </div>
</div>
</> 
:<>
<div
      
      className={`relative overflow-hidden  w-full lg:h-[430px] 3xl:h-[500px] h-[270px] md:h-[330px]  mt-16 flex justify-center items-center`}
    >
      <img
        src="/homeSlide3.jpg"
        className="w-full h-full  z-10"
        alt="about us image "
      />
      {/* Gradient blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-700/80 to-slate-400/90 opacity-80 z-10"></div>
    
   
      <div
              data-aos="fade-left"
              className="absolute top-4 end-6 md:end-14 px-2 flex    items-center justify-center z-20"
            >
              <h3 className="text-white text-sm  md:text-lg  lg:text-xl font-semibold mx-1">
                Certified Public Accountants
              </h3>
            </div>
        <img
        data-aos="fade-left"
          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/2030.png"
          className="w-[150px] mt-1 absolute bottom-4 start-4 hidden md:flex bg-black bg-opacity-30 rounded-3xl p-2 items-center justify-center z-20"
          alt="logo image "
        />
   

    
      <div className="absolute top-0 bottom-0 left-0 right-0 z-20  flex flex-col justify-center ">
        <h1 data-aos="fade-up" className="text-white text-shadow-xl text-center text-lg lg:text-4xl 3xl:text-5xl mb-4 font-semibold">
        Our Clients are The Core of Our Success..Partnership Built on Trust and Experience
        </h1>
        <h2 data-aos="zoom-in"  data-aos-delay="500" className="text-white text-shadow-xl text-center text-lg lg:text-4xl  font-semibold">
        Together Towards More Accurate Financial Decisions and Sustainable Success
        </h2>
      
      </div>
</div>
</>}



  <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover bg-center">
          
  <h2 className="text-2xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
    {dir=="rtl"?' نخدم مجموعة كبيرة من الهيئات والمؤسسات في القطاع العام والخاص': "Serve a wide range of organizations and institutions in both the public and private sectors"}
              </h2>
            <div id="desc1" className="py-10 ">
              <div className="w-full flex flex-wrap justify-center">
                {partners.map((sponcer, index) => {
                  return (
                    <div data-aos="fade-up" key={index} className="  lg:w-1/6 md:w-1/3 w-1/2 px-1 lg:px-2   overflow-hidden">
                      <div className="flex  flex-col-reverse   rounded-2xl shadow-lg overflow-hidden  hover:shadow-green-100 my-9  cursor-pointer group duration-700 transition-all  w-full">
                      
                      
                        <div className=" flex h-[100px] md:h-[160px] 3xl:h-[220px] items-center shadow-md relative overflow-hidden justify-center text-center">
                          <img
                            src={`${sponcer.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="Partner image"
                          />
                          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
           
            </div>
          </div>

       {dir=='rtl'?<>
         {/* Join to Us section */}
         <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                  انضم إلى عائلة شركائنا
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                  تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك المالية
                </h3>

                <div className="flex flex-col justify-center items-center md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      تواصل معنا الآن
                    </h3>
                  </Link>
                  <Link href="/rfp">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      إطلب عرض سعر
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
       </>:<>
       
          {/* Join to Us section */}
          <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                Join our partner family
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                Contact us today and discover how we can help you achieve your financial goals
                </h3>

                <div className="flex flex-col md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                    Contact us now
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
                    +966550554262
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
                  We are honored to welcome you                  </p>
                  <p className="text-white mb-12 font-semibold tracking-widest cursor-pointer">
                  at all our branches                  </p>
                </div>
              </div>
            </div>
       </>}

  </>
}
