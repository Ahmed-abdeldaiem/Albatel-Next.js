"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "../contexts/langContext";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Services({ services = [] }) {
  const [counter, setCounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
    });
  }, []);
  useEffect(() => {
    setMounted(true);
    // Scroll to top when component mounts (when navigating from other pages)
    window.scrollTo(0, 0);
  }, []);
  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      // Scroll to the section with offset to account for navbar
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - 100; // 100px offset for navbar
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    // no-op; services are server-provided
  }, [services]);

  if (!mounted) return null;

  return (
    <>
      {dir == "rtl" ? (
        <>
          <div className="bg-white">
            {/* service Header */}
            <div
              className={`relative overflow-hidden  w-full  lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/Riyad.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="absolute inset-0 bg-gradient-to-l to-green-900/40  from-blue-950/70 opacity-70 z-10"></div>
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
                      تقدم شركة باتل عبدالله الباتل وشركاؤه
                    </h1>
                    <h2 className="text-white text-center text-xl lg:text-5xl mb-8 font-semibold text-shadow-xl">
                      العديد من الخدمات
                    </h2>
                    <h3 className="hidden md:block text-lg lg:text-xl   text-white ">
                      نقدم خدمات استشارية مهنية مخصصة لتمكن العملاء من اتخاذ
                      قرارات مالية مدروسة وفعالة
                    </h3>
                    <h3 className="hidden md:block text-lg lg:text-xl  mb-8 text-white ">
                      ونسعى لتوفير حلول شاملة لاحتياجات الشركات والمؤسسات
                      والأفراد
                    </h3>
                    <div data-aos="fade-up">
                      <button onClick={handleScroll}>
                        <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                          تعرف على خدماتنا
                          <span className="mx-1">
                            <i className="fa-solid fa-arrow-down"></i>
                          </span>
                        </h3>
                      </button>
                      <Link href="/contact">
                        <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                          تواصل معنا
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="desc1" className="scroll-mt-20"></div>
            <div data-aos="fade-up" className="pt-16 md:px-28">
              <h2 className="text-xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4">
                نقدم مجموعة شاملة من الخدمات المالية والمحاسبية
              </h2>
              <h3 className="md:hidden text-sm md:text-lg lg:text-xl  text-center  text-gray-950 ">
                نقدم خدمات استشارية مهنية مخصصة لتمكن العملاء من اتخاذ قرارات
                مالية مدروسة وفعالة ونسعى لتوفير حلول شاملة لاحتياجات الشركات
                والمؤسسات والأفراد
              </h3>
            </div>
            <div className="md:py-10 m-auto container ">
              <div className="w-full flex flex-wrap justify-center">
                {services?.map((service, index) => {
                  return (
                    <div
                      data-aos="fade-up"
                      key={index}
                      className="lg:w-1/3 md:w-1/2 3xl:w-1/4  px-3  overflow-hidden"
                    >
                      <div className="flex  flex-col-reverse bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover    rounded-tr-[20%] rounded-bl-[15%] shadow-xl overflow-hidden  my-10  cursor-pointer group duration-700 transition-all bg-white  w-full">
                        <div className=" flex h-auto  p-4 flex-col overflow-hidden items-center  text-center">
                          <h5 className="mb-1 text-2xl  text-blue-950 font-bold text-center tracking-tight ">
                            {service?.title?.ar}
                          </h5>
                          <p className="mb-3 font-normal  text-center text-lg my-2 pt-2 text-gray-900 ">
                            {service?.description?.ar}
                          </p>
                        </div>
                        <div className=" flex h-[210px] items-center relative overflow-hidden justify-center text-center">
                          <img
                            src={`${service?.image} `}
                            className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                            alt="service image"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* responsibility section */}
            <div
              data-aos="fade-up"
              className="w-full flex flex-col justify-center items-center md:flex-row bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover bg-center"
            >
              {/* responsibility image */}
              <div className=" hidden lg:flex lg:w-1/2">
                <div className="p-1 md:p-4 flex items-center justify-center">
                  <img
                    className="w-[80%] rounded-3xl"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/service%20resposcibility.png"
                    alt="resposcibility"
                  />
                </div>
              </div>
              {/* responsibility text */}
              <div className=" w-full lg:w-1/2">
                <div className="p-2 md:py-10 md:px-6 ">
                  <h2 className="text-xl  lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4">
                    نعي حجم المسؤولية ونؤمن بأن العميل هو العنصر الأساسي لنجاحنا{" "}
                  </h2>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                      نلتزم بأعلى معايير الأخلاقيات المهنية في جميع جوانب عملنا،
                      ونضمن الامتثال للمعايير الدولية للمراجعة والمحاسبة{" "}
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon1.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                      نواكب التطور في المجال مما يجعلنا على دراية كاملة
                      بالتشريعات القانونية والتطورات الجديدة{" "}
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon5.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                      نسعى جاهدين لتقديم خدمات تحقق الأهداف المالية والمهنية
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon4.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                      ملتزمون التزامًا كاملًا على سرعة الاستجابة وسرية المعلومات
                      المقدمة لنا{" "}
                    </p>
                  </div>

                  <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                    <img
                      className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                      alt="location icon"
                    />
                    <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                      نحرص على تقديم الاستشارة والتوجيه للعميل بكل شفافية
                      واحترافية وبقدر كبير من الجودة والتميز
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Do you want Consultant service section */}
            <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                  هل تحتاج إلى إستشارة مالية؟
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                  تواصل معنا اليوم واحصل على استشارة متميزة من خبرائنا
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
          </div>
        </>
      ) : (
        <>
        <div className="bg-white">
          {/* service Header */}
          <div
            className={`relative overflow-hidden  w-full  lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="/Riyad.mp4"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-l to-green-900/40  from-blue-950/70 opacity-70 z-10"></div>
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
                  Batel Abdullah Al Batel & Partners provides
                  </h1>
                  <h2 className="text-white text-center text-xl lg:text-5xl mb-8 font-semibold text-shadow-xl">
                  many services
                  </h2>
                  <h3 className="hidden md:block text-lg lg:text-xl   text-white ">
                  We provide personalized professional Consultation services to enable clients to make informed and effective financial decisions
                  </h3>
                  <h3 className="hidden md:block text-lg lg:text-xl  mb-8 text-white ">
                  We seek to provide comprehensive solutions to the needs of companies, institutions and individuals
                  </h3>
                  <div data-aos="fade-up">
                    <button onClick={handleScroll}>
                      <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                        Our Services
                        <span className="mx-1">
                          <i className="fa-solid fa-arrow-down"></i>
                        </span>
                      </h3>
                    </button>
                    <Link href="/contact">
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                        Contact Us
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="desc1" className="scroll-mt-20"></div>
          <div data-aos="fade-up" className="pt-16 md:px-28">
            <h2 className="text-xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4">
            We provide a comprehensive range of financial and accounting services
            </h2>
            <h3 className="md:hidden text-sm md:text-lg lg:text-xl  text-center  text-gray-950 ">
            We provide tailored professional advisory services to enable clients to make informed and effective financial decisions. We strive to provide comprehensive solutions to the needs of businesses, institutions, and individuals
                         </h3>
          </div>
          <div className="md:py-10 m-auto container ">
            <div className="w-full flex flex-wrap justify-center">
              {services?.map((service, index) => {
                return (
                  <div
                    data-aos="fade-up"
                    key={index}
                    className="lg:w-1/3 md:w-1/2 3xl:w-1/4  px-3  overflow-hidden"
                  >
                    <div className="flex  flex-col-reverse bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover    rounded-tr-[20%] rounded-bl-[15%] shadow-xl overflow-hidden  my-10  cursor-pointer group duration-700 transition-all bg-white  w-full">
                      <div className=" flex h-auto  p-4 flex-col overflow-hidden items-center  text-center">
                        <h5 className="mb-1 text-2xl  text-blue-950 font-bold text-center tracking-tight ">
                          {service?.title?.en}
                        </h5>
                        <p className="mb-3 font-normal  text-center text-lg my-2 pt-2 text-gray-900 ">
                          {service?.description?.en}
                        </p>
                      </div>
                      <div className=" flex h-[210px] items-center relative overflow-hidden justify-center text-center">
                        <img
                          src={`${service?.image} `}
                          className="w-full h-[100%] group-hover:scale-110  transition-all duration-700 "
                          alt="service image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* responsibility section */}
          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center items-center md:flex-row bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover bg-center"
          >
            {/* responsibility image */}
            <div className=" hidden lg:flex lg:w-1/2">
              <div className="p-1 md:p-4 flex items-center justify-center">
                <img
                  className="w-[80%] rounded-3xl"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/service%20resposcibility.png"
                  alt="resposcibility"
                />
              </div>
            </div>
            {/* responsibility text */}
            <div className=" w-full lg:w-1/2">
              <div className="p-2 md:py-10 md:px-6 ">
                <h2 className="text-xl  lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4">
                We realize the size of the responsibility and believe that the customer is the main element of our success
                </h2>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We adhere to the highest standards of professional ethics in all aspects of our work, and ensure compliance with international auditing and accounting standards
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon1.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We keep pace with developments in the field, keeping us fully aware of legal legislation and new developments
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon5.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We strive to provide services that achieve financial and professional goals
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon4.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We are fully committed to the speed of response and confidentiality of information provided to us
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-8 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We are committed to providing clients with advice and guidance with complete transparency, professionalism, and a high degree of quality and excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Do you want Consultant service section */}
          <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

            <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
              <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
              Do you need financial advice?
              </h2>

              <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
              Contact us today and get a distinguished consultation from our experts
              </h3>

              <div className="flex flex-col justify-center items-center md:flex-row mb-10">
                <Link href="/contact">
                  <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                  Request your consultation now
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
        </div>
      </>
      )}
    </>
  );
}
