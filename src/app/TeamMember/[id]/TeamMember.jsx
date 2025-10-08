"use client";
import React, { useContext, useEffect, useState } from "react";

import { LanguageContext } from "../../contexts/langContext";
import { TeamContext } from "../../contexts/TeamContext";

import { useParams } from "next/navigation";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TeamMember() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const { getPersonById } = useContext(TeamContext);
  const [Loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState({});
  let { id } = useParams();

  async function getEmployeeData(id) {
    setLoading(true);
    const data = await getPersonById(id);
    setEmployee(data || null);
    setLoading(false);
  }

  useEffect(() => {
    // console.log('useeffect',id);
    getEmployeeData(id);
  }, [id]);


  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  

  return (

    <>
     
        {employee === null ? (
          <div className="pt-24 pb-16 text-center">
            <h2 className="text-2xl md:text-4xl text-blue-900 font-semibold mb-2">الموظف غير موجود</h2>
            <p className="text-gray-700">تحقق من الرابط أو عد إلى صفحة الفريق.</p>
          </div>
        ) : dir == "rtl" ?<>
     

      
      <div className="bg-center bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')]">
      <div className="w-full flex flex-col lg:flex-row pt-20 ">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="w-full py-5">
          <div className="w-full  flex flex-col md:flex-row items-center  px-4">
            {/* employee image */}
          
          
            <div className="md:w-5/12 flex items-center justify-center ">
                
              <img
                className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]  rounded-3xl border-2 ms-2 shadow-md"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div data-aos="fade-up" className="md:w-7/12">
              <h2  className="text-blue-950 text-shadow-blue font-serif text-xl md:text-4xl lg:text-5xl 3xl:text-6xl my-2 pb-2  font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.ar}
              </h2>
              <h3  data-aos-delay="400" className="text-blue-950 font-serif text-shadow-blue text-xl md:text-3xl lg:text-4xl 3xl:text-5xl my-4  font-bold">
                {/* employee.job.ar / .en */}
                {employee?.job?.ar}
              </h3>
            </div>
          </div>
         
        </div>

        {/* second section description / brieaf about employee */}
        
      </div>
      <div className="w-full flex flex-col" data-aos="fade-up">
      <div className="w-full flex flex-col ">
            <div className=" bg-white py-4 ">
              <div className="p-2">
                <h2  className="text-xl text-shadow-md  lg:text-4xl text-blue-950 my-1 md:my-4 text-center font-serif font-semibold ">
                  الشهادات والمؤهلات العلمية
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="text-lg  text-shadow-md md:text-xl lg:text-2xl text-gray-900 my-2 py-2 px-2 md:px-5 text-justify">                  
                  {employee?.certificates?.ar}
                </p>
              </div>
              
            </div>
          </div>
       
          <div data-aos="fade-up" className=" w-full py-6 ">
            <h2   className="text-shadow-md text-center font-serif text-xl lg:text-4xl text-blue-950 my-1 md:my-4 font-semibold">الخبرة المهنية</h2>
            <p  className="text-shadow-md  text-lg md:text-xl lg:text-2xl text-gray-900 my-2 px-2 md:px-5 text-justify">
            
            {employee?.experienceDesc?.ar}
            </p>

           
         
          </div>
          <div data-aos="fade-up" className="bg-white mt-6 py-4 md:mt-10">
            <h2  className="text-shadow-blue font-serif text-xl lg:text-4xl text-center pt-10 text-blue-950 my-1 md:my-2 font-semibold "> المناصب الرئيسية خلال المسيرة المهنية</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp,index)=>{

                return <div   key={index} className="text-shadow-md flex items-center ps-3 lg:ps-6 text-lg md:text-xl lg:text-2xl text-gray-900 py-1 mt-4"> <img className="w-6" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen.png" alt="arrow icon" /> <p className="pb-3 px-2">{exp.ar}</p></div>
              })}
            </div>
      
      </div>
      </div>
    
        </> : <>
        <div className="bg-center bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')]">
      <div className="w-full flex flex-col lg:flex-row pt-20 ">
        {/* first section image , name , job , experience years , cirtifications */}
        <div className="w-full py-5">
          <div className="w-full  flex flex-col md:flex-row items-center  px-4">
            {/* employee image */}
          
          
            <div className="md:w-5/12 flex items-center justify-center ">
                
              <img
                className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px]  rounded-3xl border-2 ms-2 shadow-md"
                src=  {employee?.image}
                alt="employee image"
              />
            </div>
            {/* employee name and job */}
            <div data-aos="fade-up" className="md:w-7/12">
              <h2  className="text-blue-950 text-shadow-blue font-serif text-xl md:text-4xl lg:text-5xl 3xl:text-6xl my-2 pb-2  font-bold">
                {/* employee.name.ar / .en */}
                {employee?.name?.en}
              </h2>
              <h3  data-aos-delay="400" className="text-blue-950 font-serif text-shadow-blue text-xl md:text-3xl lg:text-4xl 3xl:text-5xl my-4  font-bold">
                {/* employee.job.ar / .en */}
                {employee?.job?.en}
              </h3>
            </div>
          </div>
         
        </div>

        {/* second section description / brieaf about employee */}
        
      </div>
      <div className="w-full flex flex-col" data-aos="fade-up">
      <div className="w-full flex flex-col ">
            <div className=" bg-white py-4 ">
              <div className="p-2">
                <h2  className="text-xl text-shadow-md  lg:text-4xl text-blue-950 my-1 md:my-4 text-center font-serif font-semibold ">
                Certificates and academic qualifications
                </h2>
                <p data-aos="fade-up" data-aos-delay="400" className="text-lg  text-shadow-md md:text-xl lg:text-2xl text-gray-900 my-2 py-2 px-2 md:px-5 text-justify">                  
                  {employee?.certificates?.en}
                </p>
              </div>
              
            </div>
          </div>
       
          <div data-aos="fade-up" className=" w-full py-6 ">
            <h2   className="text-shadow-md text-center font-serif text-xl lg:text-4xl text-blue-950 my-1 md:my-4 font-semibold">Professional experience</h2>
            <p  className="text-shadow-md  text-lg md:text-xl lg:text-2xl text-gray-900 my-2 px-2 md:px-5 text-justify">
            
            {employee?.experienceDesc?.en}
            </p>

           
         
          </div>
          <div data-aos="fade-up" className="bg-white mt-6 py-4 md:mt-10">
            <h2  className="text-shadow-blue font-serif text-xl lg:text-4xl text-center pt-10 text-blue-950 my-1 md:my-2 font-semibold ">Main positions during career</h2>
              {/* employee.experienceJobs.ar / .en */}
              {employee?.experienceJobs?.map((exp,index)=>{

                return <div   key={index} className="text-shadow-md flex items-center   text-lg md:text-xl lg:text-2xl ps-3 lg:ps-6 text-gray-900 py-1 mt-4"> <img className="w-6" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/Special%20Icons/arowGreen2.png" alt="arrow icon" /> <p className="pb-1 px-2">{exp.en}</p></div>
              })}
            </div>
      
      </div>
      </div>
        </>}

     
    </>
  );
}


// english section