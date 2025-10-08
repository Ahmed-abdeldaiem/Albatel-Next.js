"use client";
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';

import Link from "next/link";
import { LanguageContext } from '../../contexts/langContext';

import AOS from 'aos';
import 'aos/dist/aos.css';




export default function ServiceDesc() {

const [counter, setcounter] = useState(0)
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
  <div className=" m-auto mb-16 "   >
  <div data-aos="fade-up" className=" ">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
              حلول متكاملة لدفع أعمالكم نحو النجاح
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
              نجمع بين الخبرة والتميز لنقدم حلولاً عملية تحوّل التحديات إلى فرص، ورؤاكم إلى واقع ملموس
                            </p>
            </div>
    
    {/* Service Description Section */}

    <div
              data-aos="fade-up"
              className="w-full flex flex-col justify-center items-center md:flex-row "
            >
              {/* responsibility image */}
              <div className="    w-full lg:w-1/2">
                <div className="p-1 md:p-4 flex items-center justify-center">
                  <img
                    className="w-[90%] lg:w-[75%] rounded-3xl"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/mainPageService.png"
                    alt="resposcibility"
                  />
                </div>
              </div>
              {/* responsibility text */}
              <div className=" w-full lg:w-1/2">
                <div className="p-2 md:py-10 md:px-6 ">
                 
                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    نساعدك على تحسين العمليات واتخاذ قرارات استراتيجية تقود للنمو المستدام
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon1.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    نرسم معكم خارطة طريق واضحة لتحقيق رؤيتكم المستقبلية بكفاءة وجودة
                                        </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon5.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    نضمن التزام عملياتكم بأعلى معايير الجودة والكفاءة التشغيلية والسياسات المتبعة
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/employeeIcon.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    نحدد فرص النمو ونطور قدرات فريقكم لمواكبة تحديات السوق
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl font-semibold">
                    نستثمر في كوادركم البشرية من خلال برامج تدريبية متخصصة والمشاركة المستمرة
                    </p>
                  </div>
                  {/* <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center"> */}
                  <div className="z-20 flex justify-center  items-center gap-5 " >
              <span  className="animate-pulse	 z-20 text-green-800 text-xl 4k:text-3xl font-semibold text-shadow-xl">تعرف أكثر على خدماتنا من هنا<span className="mx-2"><i className="fa-solid fa-arrow-left"></i></span></span>
              <Link className="z-20" href={'services'} >
              <button  className=" my-2 px-4 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-md overflow-hidden border-2 border-blue-900 transition-all duration-700 hover:border-green-700 text-xl 4k:text-3xl font-semibold text-blue-800 hover:text-green-500 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-2xl">
                  خدماتنا
                </button>
              </Link>

              
            {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
      </div>
  </>:<>
  <div className=" m-auto mb-16 "   >
  <div data-aos="fade-up" className=" ">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
              Integrated solutions to drive your business towards success
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
              Combine expertise and excellence to provide practical solutions that transform challenges into opportunities, and turn your vision into reality
                            </p>
            </div>
    
    {/* Service Description Section */}

    <div
              data-aos="fade-up"
              className="w-full flex flex-col justify-center items-center md:flex-row "
            >
              {/* responsibility image */}
              <div className="    w-full lg:w-1/2">
                <div className="p-1 md:p-4 flex items-center justify-center">
                  <img
                    className="w-[90%] lg:w-[%] rounded-3xl"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/mainPageService.png"
                    alt="resposcibility"
                  />
                </div>
              </div>
              {/* responsibility text */}
              <div className=" w-full lg:w-1/2">
                <div className="p-2 md:py-10 md:px-6 ">
                 
                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    Help you improve your processes and make strategic decisions that lead to sustainable growth
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon1.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    Work with you to develop a clear roadmap to achieve your future vision efficiently and effectively
                                        </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon5.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    Ensure that your operations adhere to the highest standards of quality, operational efficiency, and established policies
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/employeeIcon.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl  font-semibold">
                    Identify growth opportunities and enhance your team's capabilities to keep pace with market challenges
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify text-lg 4k:text-3xl font-semibold">
                    Invest in your human resources through specialized training programs and continuous engagement
                    </p>
                  </div>
                  {/* <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center"> */}
                  <div className="z-20 flex justify-center  items-center gap-5 " >
              <span  className="animate-pulse	 z-20 text-green-800 text-xl 4k:text-3xl font-semibold text-shadow-xl">More About Our Service From Here<span className="mx-2"><i className="fa-solid fa-arrow-right"></i></span></span>
              <Link className="z-20" href={'services'} >
              <button  className=" my-2 px-4 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-md overflow-hidden border-2 border-blue-900 transition-all duration-700 hover:border-green-700 text-xl 4k:text-3xl font-semibold text-blue-800 hover:text-green-500 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-2xl">
                  Our Service
                </button>
              </Link>

              
            {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
      </div>
  
  </>}



  </>
}
