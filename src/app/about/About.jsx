"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "../contexts/langContext";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificates from "../components/Certificates/Certificates";
import dynamic from 'next/dynamic'

export default function About() {
 
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);
  const branches = [
    {
      id: 1,
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
    },
    {
      id: 2,
      name: {
        ar: "جدةالأول",
        en: "Jeddah 1",
      },
    },
    {
      id: 9,
      name: {
        ar: "جدة الثاني",
        en: "Jeddah 2",
      },
    },
    {
      id: 3,
      name: {
        ar: "المدينة",
        en: "Madinah",
      },
    },
    {
      id: 4,
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
    },
    ,
    {
      id: 5,
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
    },
    {
      id: 6,
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
    },
    {
      id: 7,
      name: {
        ar: "جازان",
        en: "Jazan",
      },
    },
    {
      id: 8,
      name: {
        ar: "القصيم",
        en: "Al-Qassim",
      },
    },
  ];
  const branches2 = [
    {
      name: {
        ar: "مملكة البحرين",
        en: "Bahrain",
      },
      img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/%D9%85%D9%85%D9%84%D9%83%D8%A9%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D9%86.png",
    },
    {
      name: {
        ar: "الإمارات العربية المتحدة",
        en: "The UAE",
      },
      img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9.png",
    },
    {
      name: {
        ar: "سلطنة عمان",
        en: "Oman",
      },
      img: "https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/%D8%B3%D9%84%D8%B7%D9%86%D8%A9%20%D8%B9%D9%85%D8%A7%D9%86.png",
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("desc1");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {dir == "rtl" ? (
        <>
          {/* About Us Header */}
          <div
            className={`relative overflow-hidden  w-full  lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
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
                    شركة باتل عبدالله الباتل وشركاؤه
                  </h1>
                  <h2 className="text-white text-center text-xl lg:text-5xl mb-8 font-semibold text-shadow-xl">
                    للاستشارات المهنية
                  </h2>
                  <h3 className="hidden md:block text-lg lg:text-xl   text-white ">
                    رحلة من الثقة والتميز في الخدمات المالية والمحاسبية منذ عام
                    2006م
                  </h3>
                  <h3 className="hidden md:block text-lg lg:text-xl  mb-8 text-white ">
                    نخدم عملاءنا بأعلى معايير الجودة والمهنية
                  </h3>
                  <div data-aos="fade-up">
                    <button onClick={handleScroll}>
                      <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                        تعرف علينا
                        <span className="mx-1">
                          <i className="fa-solid fa-arrow-down"></i>
                        </span>
                      </h3>
                    </button>
                    <Link
                      target={"_blank"}
                      href="https://drive.google.com/file/d/16r0v2HODzY7ZLRVR-Ks4njjOFUzsMMta/view?usp=drive_link"
                    >
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                        الملف التعريفي
                      </h3>
                    </Link>
                    <Link target={"_blank"} href="/profileVedio">
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                        شاهد الفيديو
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="desc1"></div>
          <div className="container m-auto my-16">
            {/* company history */}
            <div
              className="  w-full bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover bg-center flex  flex-col justify-start items-center overflow-hidden lg:flex-row  shadow-md rounded-3xl rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-7/12    flex flex-col justify-center px-1 md:px-5  ">
                <h3 className="text-center  font-semibold text-blue-800 mb-3 md:mb-6 mt-2 text-2xl lg:text-3xl 4k:text-5xl text-shadow-blue">
                  تاريخ الشركة
                </h3>
                <p className="text-gray-900 leading-10 text-center md:text-justify text-lg lg:text-xl 4k:text-3xl py-2 m-1 md:m-2 flex justify-start  items-start font-semibold">
                  <img
                    className="w-10 mx-1 md:mx-2 "
                    src="https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/special%20BG/company.png?raw=true"
                    alt="company date icon"
                  />
                  تأسست شركة باتل عبدالله الباتل وشركاؤه للاستشارات المهنية
                  بموجب ترخيص الهيئة السعودية للمراجعين والمحاسبين بمزاولة مهنة
                  المحاسبة والمراجعة منذ 1427/11/08هـ الموافق 2006/11/29مـ
                </p>

                <p className="text-gray-900 leading-10 text-center md:text-justify text-lg lg:text-xl 4k:text-3xl py-2 m-1 md:m-2 flex  items-start justify-start font-semibold">
                  <img
                    className="w-10 mx-1 md:mx-2"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/licensed.png"
                    alt="company licensed icon"
                  />
                  الشركة حاصلة على تراخيص لتقديم خدمات مراجعة الحسابات وتدقيقها،
                  والاستشارات المالية، وتقديم خدمات المحاسبة، والاستشارات
                  الإدارية، وإعداد كشوف الذمة المالية للضرائب، والاستشارات
                  المحاسبية ووضع السياسات والإجراءات، والاستشارات في مجال الزكاة
                  وضريبة الدخل، وخدمات ضريبة القيمة المضافة
                </p>
                <div className="w-full text-lg lg:text-xl 4k:text-3xl  md:mx-2 pb-2  flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/locationIcon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    الرياض هي نقطة البداية والفرع الرئيسي للشركة
                  </p>
                </div>
                <div className="w-full text-lg lg:text-xl 4k:text-3xl  md:mx-2 pb-4  flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/world%20icon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    توسعنا لنخدم عملاءنا من خلال شبكة فروع تغطي المملكة ودول
                    الخليج
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-5/12 flex justify-center items-center ">
                <img
                  className=" w-full p-5"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg"
                  alt="history of company image"
                />
              </div>
            </div>
          </div>
    
          {/*Riyadh company location */}
          <div>
            <div  data-aos="fade-up">
            <h3
             
              className="text-center  font-semibold text-blue-800 mb-2  text-2xl lg:text-3xl 4k:text-5xl text-shadow-blue pt-4 "
            >
              الفرع الرئيسي
            </h3>
            <div
            
              className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-5 flex justify-center items-center "
            >
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/map%20icon.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                الرياض - حى الربوة، الطريق الدائرى الشرقى، 7162 مبنى السمو، ص.ب
                28565،الرمز البريدى 11447
              </p>
            </div>
            </div>
  
            <div
              className=" w-full  flex  overflow-hidden   shadow-md  my-2 "
              data-aos="fade-up"
            >
              <div className="w-full overflow-hidden  flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Branches in KSA */}
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-8 lg:pt-14 "
            >
              فروعنا داخل المملكة العربية السعودية
            </h2>
            {/* branches */}
            <div className=" w-full flex bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row shadow-md  my-8 ">
              {branches.map((branch, index) => {
                return (
                  <Link
                    data-aos="fade-up"
                    href={`/branch/${branch.id}`}
                    key={index}
                    className="flex cursor-pointer flex-col group items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500   rounded-full p-5"
                  >
                    {/* <div className="p-4"> */}
                    {/* fas fa-globe */}
                    <img
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/location.png"
                      alt="international branches"
                      className="group-hover:scale-105 duration-700 transition-all"
                    />
                    <p className="text-2xl text-shadow-green hover:text-shadow-blue text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* branches Outside KSA */}
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10"
            >
              فروعنا خارج المملكة العربية السعودية
            </h2>
            <div
              data-aos="fade-up"
              // https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg
              className=" w-full flex flex-wrap bg-fixed  flex-col items-center justify-evenly md:flex-row  shadow-md bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover bg-center  my-8 "
            >
              {branches2.map((branch, index) => {
                return (
                  <div
                    key={index}
                    className="flex cursor-pointer group flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6  transition-all duration-700   rounded-full p-5"
                  >
                    <img
                      src={branch.img}
                      alt="international branches"
                      className="group-hover:scale-105 duration-700 transition-all"
                    />
                    <p className="text-2xl text-green-800 text-center text-shadow-green hover:text-shadow-blue group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.ar}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* team and saauada section */}

          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center items-center md:flex-row py-8 "
          >
            {/*  team and saauada  text */}
            <div className=" w-full lg:w-1/2">
              <div className="p-2 md:py-10 md:px-4 ">
                <h2
                  data-aos="fade-up"
                  className="text-xl  lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >
                  أكثر من ثمانين كادر مؤهلين علميًا
                </h2>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    أصحاب خبرة واسعة في جميع الجوانب المالية والإدارية
                    والقانونية
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/woman%20Icon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    فريق كامل من الموظفات للعمل في الأقسام النسائية أو المواقع
                    التي تتطلب ذلك
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/saudiLogo.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    نحرص على جذب أفضل الكفاءات السعودية وتوفير بيئة عمل محفزة
                    تساهم في تحقيق رؤية المملكة 2030
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                    نحقق نسب سعودة تضع الشركة في النطاق البلاتيني (معدل التوطين
                    56 % ومستوى النطاقات أخضر مرتفع)
                  </p>
                </div>
              </div>
            </div>

            {/*  team and saauada  image */}
            <div className=" hidden lg:flex lg:w-1/2">
              <div className="p-1 md:p-3 flex items-center justify-center">
                <img
                  className="w-[77%] rounded-3xl"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png"
                  alt="resposcibility"
                />
              </div>
            </div>
          </div>

          {/* certificates */}
          <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover ">
            <div data-aos="fade-up" className="pt-2 md:py-6">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
                معتمدون من أفضل الجهات المهنية
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
                يحمل فريقنا شهادات مهنية معتمدة من أرقى المؤسسات المحاسبية
                والمالية عالميًا
              </p>
            </div>

          
          <Certificates/>

          </div>
                {/* Do you want Consultant service section */}
                <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                  انضم إلى عائلة عملائنا
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                  تواصل معنا اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك المالية
                </h3>

                <div className="flex flex-col md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      تواصل معنا الآن
                    </h3>
                  </Link>
                  <Link href="/ourTeam">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      تعرف على فريقنا
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
          {/* About Us Header */}
          <div
            className={`relative overflow-hidden  w-full  lg:h-[620px] 3xl:h-[750px] h-[300px] md:h-[350px]   mt-16 flex justify-center items-center`}
          >
            <img
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/about.png"
              alt="about image header"
            />

            {/* <div className="absolute inset-0 bg-gradient-to-l to-green-900/70  from-blue-950/70 opacity-70 z-10"></div> */}
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
                  Batel Abdullah Al Batel & Partners
                  </h1>
                  <h2 className="text-white text-center text-xl lg:text-5xl mb-8 font-semibold text-shadow-xl">
                  For professional consultations
                  </h2>
                  <h3 className="hidden md:block text-lg lg:text-xl   text-white ">
                  A journey of trust and excellence in financial and accounting services since 2006
                  </h3>
                  <h3 className="hidden md:block text-lg lg:text-xl  mb-8 text-white ">
                  Serve our clients with the highest standards of quality and professionalism.                  </h3>
                  <div data-aos="fade-up">
                    <button onClick={handleScroll}>
                      <h3 className="animate-pulse inline-block rounded-2xl px-1 md:px-3 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold ">
                        More About Us
                        <span className="mx-1">
                          <i className="fa-solid fa-arrow-down"></i>
                        </span>
                      </h3>
                    </button>
                    <Link
                      target={"_blank"}
                      href="https://drive.google.com/file/d/16r0v2HODzY7ZLRVR-Ks4njjOFUzsMMta/view?usp=drive_link"
                    >
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                      Company profile
                      </h3>
                    </Link>
                    <Link target={"_blank"} href="/profileVedio">
                      <h3 className=" inline-block rounded-2xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-2 border-white border text-center z-20 text-blue-950 text-sm md:text-lg font-bold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-50">
                        Watch Video
                      </h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="desc1"></div>
          <div className="container m-auto my-16">
            {/* company history */}
            <div
              className="  w-full bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover bg-center flex  flex-col justify-start items-center overflow-hidden lg:flex-row  shadow-md rounded-3xl rounded-tl-none"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-7/12    flex flex-col justify-center px-1 md:px-5  ">
                <h3 className="text-center  font-semibold text-blue-800 mb-3 md:mb-6 mt-2 text-2xl lg:text-3xl 4k:text-5xl text-shadow-blue">
                Company History
                </h3>
                <p className="text-gray-900 leading-10 text-center md:text-justify text-lg lg:text-xl 4k:text-3xl py-2 m-1 md:m-2 flex justify-start  items-start font-semibold">
                  <img
                    className="w-10 mx-1 md:mx-2 "
                    src="https://github.com/Ahmed-abdeldaiem/Albatel_API2/blob/main/special%20BG/company.png?raw=true"
                    alt="company date icon"
                  />
Batel Abdullah Al Batel & Partners Professional Consulting Company was established under the license of the Saudi Organization for Certified Public Accountants to practice the accounting and auditing profession since 11/08/1427 AH corresponding to 11/29/2006 AD                </p>

                <p className="text-gray-900 leading-10 text-center md:text-justify text-lg lg:text-xl 4k:text-3xl py-2 m-1 md:m-2 flex  items-start justify-start font-semibold">
                  <img
                    className="w-10 mx-1 md:mx-2"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/licensed.png"
                    alt="company licensed icon"
                  />
                 The company is licensed to provide auditing and accounting services, financial consulting, accounting services, management consulting, tax return preparation, accounting consulting, policy and procedure development, zakat and income tax consulting, and value-added tax services
                </p>
                <div className="w-full text-lg lg:text-xl 4k:text-3xl  md:mx-2 pb-2  flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/locationIcon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  Riyadh is the starting point and the main branch of the company                  </p>
                </div>
                <div className="w-full text-lg lg:text-xl 4k:text-3xl  md:mx-2 pb-4  flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/world%20icon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We expanded our operations to serve our customers through a network of branches that covers the Kingdom and other Arab countries
                  </p>
                </div>
              </div>

              <div className="w-full lg:w-5/12 flex justify-center items-center ">
                <img
                  className=" w-full p-5"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/logo.jpg"
                  alt="history of company image"
                />
              </div>
            </div>
          </div>
    
          {/*Riyadh company location */}
          <div>
            <div  data-aos="fade-up">
            <h3
             
              className="text-center  font-semibold text-blue-800 mb-2  text-2xl lg:text-3xl 4k:text-5xl text-shadow-blue pt-4 "
            >
Main Branch
            </h3>
            <div
            
              className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-5 flex justify-center items-center "
            >
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/map%20icon.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
             
              Riyadh - Ar Rabwah Dist - Building No 7162 - Second Floor - Eastern Ring Branch
              </p>
            </div>
            </div>
  
            <div
              className=" w-full  flex  overflow-hidden   shadow-md  my-2 "
              data-aos="fade-up"
            >
              <div className="w-full overflow-hidden  flex justify-center items-center ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.871481582673!2d46.77138042674242!3d24.6969443008465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f07ef0e77e823%3A0x42db3ce2638cbcb5!2salbatel%20%26%20co.%20professional%20services!5e0!3m2!1sen!2seg!4v1727558304978!5m2!1sen!2seg"
                  width={`100%`}
                  height={500}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Branches in KSA */}
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-8 lg:pt-14 "
            >
Our branches inside the Kingdom of Saudi Arabia
            </h2>
            {/* branches */}
            <div className=" w-full flex bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-fixed bg-cover bg-center flex-wrap flex-col items-center justify-center md:flex-row shadow-md  my-8 ">
              {branches.map((branch, index) => {
                return (
                  <Link
                    data-aos="fade-up"
                    href={`/branch/${branch.id}`}
                    key={index}
                    className="flex cursor-pointer flex-col group items-center justify-center w-1/2 md:w-1/4 lg:w-1/6 group transition-all duration-500   rounded-full p-5"
                  >
                    {/* <div className="p-4"> */}
                    {/* fas fa-globe */}
                    <img
                      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/location.png"
                      alt="international branches"
                      className="group-hover:scale-105 duration-700 transition-all"
                    />
                    <p className="text-2xl text-shadow-green hover:text-shadow-blue text-green-800 group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.en}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* branches Outside KSA */}
          <div>
            <h2
              data-aos="fade-up"
              className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10"
            >
Our branches outside the Kingdom of Saudi Arabia

            </h2>
            <div
              data-aos="fade-up"
              // https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/about1.jpg
              className=" w-full flex flex-wrap bg-fixed  flex-col items-center justify-evenly md:flex-row  shadow-md bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1.png')] bg-cover bg-center  my-8 "
            >
              {branches2.map((branch, index) => {
                return (
                  <div
                    key={index}
                    className="flex cursor-pointer group flex-col items-center justify-center w-1/2 md:w-1/4 lg:w-1/6  transition-all duration-700   rounded-full p-5"
                  >
                    <img
                      src={branch.img}
                      alt="international branches"
                      className="group-hover:scale-105 duration-700 transition-all"
                    />
                    <p className="text-2xl text-green-800 text-shadow-green hover:text-shadow-blue group-hover:text-blue-700 transition-all duration-700 font-semibold">
                      {branch.name.en}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* team and saauada section */}

          <div
            data-aos="fade-up"
            className="w-full flex flex-col justify-center items-center md:flex-row py-8 "
          >
            {/*  team and saauada  text */}
            <div className=" w-full lg:w-1/2">
              <div className="p-2 md:py-10 md:px-4 ">
                <h2
                  data-aos="fade-up"
                  className="text-xl  lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold py-4"
                >

More than eighty professionally qualified staff members
                </h2>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon2.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                   
                  They possess extensive experience in all financial, administrative, and legal aspects
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/woman%20Icon.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
               
                  A full team of female employees is needed to work in women's departments or locations where this is required
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/saudiLogo.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  
                  We are committed to attracting the best Saudi talent and providing a stimulating work environment that contributes to achieving the Kingdom's Vision 2030
                  </p>
                </div>

                <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2 md:py-3 flex items-start md:items-center">
                  <img
                    className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                    src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/serviceIcon3.png"
                    alt="location icon"
                  />
                  <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                  We have achieved Saudiization rates that place the company in the Platinum category (localization rate of 56% and a high green rating)
                  </p>
                </div>
              </div>
            </div>

            {/*  team and saauada  image */}
            <div className=" hidden lg:flex lg:w-1/2">
              <div className="p-1 md:p-3 flex items-center justify-center">
                <img
                  className="w-[77%] rounded-3xl"
                  src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png"
                  alt="resposcibility"
                />
              </div>
            </div>
          </div>

          {/* certificates */}
          <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover ">
            <div data-aos="fade-up" className="pt-2 md:py-6">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
              We are certified by leading professional organizations
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
             
              Our team holds professional certifications from the most prestigious accounting and financial institutions worldwide
              </p>
            </div>

          
          <Certificates/>

          </div>
                {/* Do you want Consultant service section */}
                <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg-service1.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                oin our customer family
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
                  <Link href="/ourTeam">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                    Get to know our team
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
        </>
      )}
    </>
  );
}
