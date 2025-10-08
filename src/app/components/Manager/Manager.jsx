"use client";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Manager() {
 
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <>

{dir=='rtl'?<>

<div className=" m-auto my-16 " >
  

  <div data-aos="fade-up" className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover ">
            <div data-aos="fade-up" className="pt-2 md:py-6">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
                أرقامنا تعكس تميزنا
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
             نفخر بفريقنا المتميز الذي يحقق أعلى معايير الجودة والمهنية
              </p>
            </div>

{/* our Numbers Section */}

<div className="flex flex-col md:flex-row w-full justify-center items-center">
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/exp.png" alt="experience Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+25 عامًا من الخبرة</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/Employee.png" alt="Employees Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+80 موظف من أصحاب الشهادات والخبرة</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 md:py-0 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/clients.png" alt="Clients Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+2500 عميل</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/projects.png" alt="Projects Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+3000 مشروع</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/Riyal.png" alt="ٌRiyal Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+50M (قيمة المشاريع)</p>
</div>
</div>
    

            <div className="z-20 flex justify-center items-center gap-5 p-10" >
              <span  className="animate-pulse	 z-20 text-green-800 text-xl 4k:text-3xl font-semibold text-shadow-xl">يمكنك الاطلاع على فريقنا من هنا<span className="mx-2"><i className="fa-solid fa-arrow-left"></i></span></span>
              <Link className="z-20" href={'/ourTeam'} >
              <button  className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-md overflow-hidden border-2 border-blue-900 transition-all duration-700 hover:border-green-700 text-xl 4k:text-3xl font-semibold text-blue-800 hover:text-green-500 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-2xl">
                  فريقنا
                </button>
              </Link>

              
            </div>

          </div>
       

        
        
      </div>

</>:<>
<div className=" m-auto my-16 " >
  

  <div data-aos="fade-up" className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] bg-cover ">
            <div data-aos="fade-up" className="pt-2 md:py-6">
              <h2 className="text-3xl lg:text-4xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold pt-10">
              Our figures reflect our excellence
              </h2>

              <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
              Proud of our outstanding team, which consistently achieves the highest standards of quality and professionalism              </p>
            </div>

{/* our Numbers Section */}

<div className="flex flex-col md:flex-row w-full justify-center items-center">
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/exp.png" alt="experience Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+25 Years of experience</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/Employee.png" alt="Employees Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+80 Employee with qualifications and experience</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 md:py-0 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/clients.png" alt="Clients Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+2500 Clients</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/projects.png" alt="Projects Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+3000 Projects</p>
</div>
<div className="w-1/2 md:w-1/5 flex flex-col py-3 justify-center items-center">
<img className="w-[40%]" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/Riyal.png" alt="ٌRiyal Icon" />
<p className="text-green-900 text-center font-semibold text-lg px-3 lg:px-8">+50M (Project value)</p>
</div>
</div>
    

            <div className="z-20 flex justify-center items-center gap-5 p-10" >
              <span  className="animate-pulse	 z-20 text-green-800 text-xl 4k:text-3xl font-semibold text-shadow-xl">View our team here<span className="mx-2"><i className="fa-solid fa-arrow-right"></i></span></span>
              <Link className="z-20" href={'/ourTeam'} >
              <button  className=" my-2 px-7 z-20 py-2 4k:px-12 4k:mx-4 text-shadow-xl hover:text-shadow-md overflow-hidden border-2 border-blue-900 transition-all duration-700 hover:border-green-700 text-xl 4k:text-3xl font-semibold text-blue-800 hover:text-green-500 bg-slate-100 hover:bg-opacity-70 bg-opacity-10 rounded-2xl">
                  Our Team
                </button>
              </Link>

              
            </div>

          </div>
       

        
        
      </div>

</>}


     
    </>
  );
}
