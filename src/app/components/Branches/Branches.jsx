import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Branches() {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);


  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  const branches = [
    { id: 1,
      name: {
        ar: "الرياض",
        en: "Riyadh",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b1.jpg'
    },
    {id: 2,
      name: {
        ar: "جدة الرئيسي",
        en: "Jeddah",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b2.webp'
    },
    {id: 9,
      name: {
        ar: "جدة الثاني",
        en: "Jeddah2",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b2.webp'
    },
    {id: 3,
      name: {
        ar: "المدينة المنورة",
        en: "Madinah",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b3.jpg'
    },
    {id: 4,
      name: {
        ar: "الخبر",
        en: "Khobar",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b4.jpg'
    },
    ,
    {id: 5,
      name: {
        ar: "حفر الباطن",
        en: "Hafar Al-Batin",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b5.jpg'
    },
    {id: 6,
      name: {
        ar: "خميس مشيط",
        en: "Khamis Mushait",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b6.jpg'
    },
    {id: 7,
      name: {
        ar: "جازان",
        en: "jazan",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b7.jpg'
    },
    {id: 8,
      name: {
        ar: "القصيم",
        en: "Al-Qassim",
      },
      img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/branches/b8.jpg'
    },
  ];







  return (
    <>

{dir=='rtl'?<>
<div className=" m-auto my-10" data-aos="fade-up">
<h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold  pt-5" >
          فروع الشركة
        </h2>
       
        <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
        نخدمكم في كل أنحاء المملكة، بشبكة فروع تصل إليكم أينما كنتم              </p>
        <div className="flex flex-wrap justify-center items-stretch w-full mb-9" data-aos="fade-up">




        {branches.map((branch, index) => {
                  return (
                    <Link key={index} href={`/branch/${branch.id}`} className="w-full md:w-1/2 p-2 2xl:p-3   lg:w-1/5 ">


                    <div  className="max-w-sm 2xl:max-w-xl 4k:max-w-2xl relative overflow-hidden bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1-1.jpg')] bg-cover border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-50">
                      <div className="overflow-hidden relative">
                        <img
                          className="rounded-t-lg h-[200px]  lg:h-[250px] 4k:h-[400px] w-full duration-700 transition-all group-hover:scale-125"
                          loading="lazy"
                          src={branch.img}
                          alt="branch image"
                          
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-xl 4k:text-3xl text-nowrap font-bold tracking-tight text-gray-700 text-shadow-sm">
                          <span className="mx-1 text-blue-700">
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          {branch.name.ar}
                        </h5>
                        <p className="text-xs text-gray-500 text-end translate-y-10 group-hover:translate-y-0 transition-all duration-500 group-hover:text-blue-900">عرض تفاصيل الفرع</p>
                      </div>
                      
                    </div>
                  </Link>
                  );
                })}


        
   

         
        </div>
      </div>

</>:<>
<div className=" m-auto my-10" data-aos="fade-up">
<h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold  py-5" >
Company Branches
        </h2>
        <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
        We serve you throughout the Kingdom with a network of branches that reach you wherever you are
                     </p>
        <div className="flex flex-wrap justify-center items-center w-full mb-9" data-aos="fade-up">




        {branches.map((branch, index) => {
                  return (
                    <Link key={index} href={`/branch/${branch.id}`} className="w-full md:w-1/2 p-2 2xl:p-3   lg:w-1/5 ">


                    <div  className="max-w-sm 2xl:max-w-xl 4k:max-w-2xl relative overflow-hidden bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg1-1.jpg')] bg-cover border border-gray-200 rounded-lg shadow-md transition-all duration-500 group hover:shadow-green-50">
                      <div className="overflow-hidden relative">
                        <img
                          className="rounded-t-lg h-[200px]  lg:h-[250px] 4k:h-[400px] w-full duration-700 transition-all group-hover:scale-125"
                          loading="lazy"
                          src={branch.img}
                          alt="branch image"
                          
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-300/20  to-blue-800/30 opacity-70 z-10"></div>
                      </div>
                      <div className="p-5">
                        <h5 className="mb-2 text-xl 4k:text-3xl text-nowrap font-bold tracking-tight text-gray-700 text-shadow-sm">
                          <span className="mx-1 text-blue-700">
                            <i className="fa-solid fa-location-dot"></i>
                          </span>
                          {branch.name.en}
                        </h5>
                        <p className="text-xs text-gray-500 text-end translate-y-10 group-hover:translate-y-0 transition-all duration-500 group-hover:text-blue-900">Show Branch Details</p>
                      </div>
                    </div>
                  </Link>
                  );
                })}


        
   

         
        </div>
      </div>

</>}

    
    </>
  );
}
