"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link"; 
import { useFormik } from 'formik';
import { LanguageContext } from "../contexts/langContext";
import { JobContext } from "../contexts/JobContex";


import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AvailableJobs({ jobs: initialJobs = [] }) {
  const [counter, setcounter] = useState(0);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [jobs, setJobs] = useState(initialJobs);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);

  let formik = useFormik({
    initialValues:{
    
      search:"",
    
     
    },
    
    onSubmit:handleSearch,
  
  });

  function handleSearch(formValues){

    //  console.log(formValues);
     
      return formValues.search
      }



      async function getRelatedsearch(search){


    
          setLoading(true)

          const base = Array.isArray(initialJobs) ? initialJobs : [];
          setJobs(
            base.filter((job)=>job?.name?.ar?.toLowerCase().includes(search.toLowerCase()))
          );
          setLoading(false)
      
      }

      async function getRelatedsearchEn(search){


    
        setLoading(true)

        const base = Array.isArray(initialJobs) ? initialJobs : [];
        setJobs(
          base.filter((job)=>job?.name?.en?.toLowerCase().includes(search.toLowerCase()))
        );
        setLoading(false)
    
    }



  useEffect(() => {
    setJobs(Array.isArray(initialJobs) ? initialJobs : []);
  }, [initialJobs]);


  useEffect(() => {
 
    dir == "rtl" ? getRelatedsearch(formik.values.search) : getRelatedsearchEn(formik.values.search) 
    
    }, [formik.values.search]);



  return (
    <>
      {/* Route-level loading is handled by app/loading.jsx */}

      {dir == "rtl" ? (
        <>
          <div className="container flex flex-col items-center justify-center py-24 2xl:py-30 4k:h-screen m-auto">
            <h1 data-aos="fade-up" className="text-blue-950 text-shadow-blue text-lg lg:text-4xl  3xl:text-5xl 4k:text-6xl font-bold text-center py-10">
              الوظائف المتاحة
            </h1>
            <form data-aos="fade-up" className="w-8/12 mx-auto mt-4 mb-10" onSubmit={formik.handleSubmit} onChange={formik.handleSubmit}>
              <label
                htmlFor="search"
                className="mb-2 text-sm text-shadow-xl  font-medium text-blue-900 sr-only"
              >
                بحث
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.search} name="search"
                  type="search"
                  id="search"
                  className="block text-shadow-md w-full p-4 ps-10 text-sm 3xl:text-lg 4k:text-2xl text-blue-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="محاسب, مراجع, ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white text-shadow-xl  absolute end-2.5 bottom-2.5 bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
                >
                  بحث
                </button>
              </div>
            </form>

          {jobs?.length === 0 ? <>
            <h2 data-aos="fade-up"  data-aos-delay="300" className="text-gray-500 text-shadow-md text-center text-lg lg:text-2xl 2xl:text-3xl 4k:text-5xl py-16 font-semibold">ترقبوا الوظائف المتاحة قريبا...</h2>
          </>: 
          <>

        {jobs?.map((job,index)=>{

return(
<div data-aos="fade-up"  key={index} className="w-8/12 border border-gray-200 my-2 shadow-sm bg-white rounded-md">
{/* اللوجو واسم الوظيفة */}
<div className="px-1 md:px-2 lg:px-4 flex flex-col lg:flex-row items-center relative overflow-hidden">
  {/* new green mark */}
  <span className="absolute text-shadow-lg top-4 -end-6 4k:-end-10 text-sm px-8 4k:px-14 3xl:text-2xl 4k:text-3xl font-semibold bg-[#34B171] text-white rotate-[-45deg] text-center ">
    New
  </span>
 

  {/* logo */}
  <div className="w-4/12 lg:w-1/12 relative flex 3xl:py-10 ">
    <img
      className=" w-full lg:absolute  bottom-0"
      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg"
      alt="company logo"
    />
  </div>
  {/* location , date */}
  <div className="w-full lg:w-8/12  p-6 flex-col items-center text-gray-500 justify-around">
    <p className="text-center text-shadow-md  w-4/12 text-lg lg:text-2xl 3xl:text-3xl 4k:text-4xl text-blue-950 font-semibold">
      {job?.name?.ar}
    </p>

    <div className="py-3 text-shadow-lg">
        <span className="text-gray-500 text-shadow-sm text-lg 3xl:text-xl 4k:text-3xl  ">
          {" "}
          <i className="fas fa-location-dot px-2"></i>الموقع: {job?.location?.ar}
        </span>
    </div>

    <div className="text-shadow-lg">
        <span className="text-gray-500 text-shadow-sm text-lg 3xl:text-xl 4k:text-3xl">
          {" "}
          <i className="fas fa-clock px-2"></i>آخر موعد للتقديم: {job?.endDate}
        </span>
    </div>
  </div>

  <div className="mb-8 text-shadow-lg ld:mb-1">
      <a
        type="submit"
        target={"_blank"}
        href={job?.link}
        className="text-white text-shadow-xl  bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 3xl:text-xl 4k:text-3xl px-6 py-2"
      >
        تفاصيل
      </a>
  </div>

  {/* date of post the job */}
  <span className="absolute text-shadow-sm bottom-1 lg:bottom-4 end-0 text-sm 3xl:text-xl 4k:text-2xl px-8 font-semibold  text-gray-500  text-center ">
   من: {job.fromDate}
  </span>
</div>
</div>
)

        })}

      
          </>}

        


          </div>
        </>
      ) : (
        <>
          <div className="container flex flex-col items-center justify-center py-24 2xl:py-30 4k:min-h-screen m-auto">
            <h1 data-aos="fade-up" className="text-blue-950 text-shadow-blue text-lg lg:text-4xl  3xl:text-5xl 4k:text-6xl font-bold text-center py-10">
              Available Jobs
            </h1>
            <form className="w-8/12 mx-auto mt-4 mb-10" onSubmit={formik.handleSubmit} onChange={formik.handleSubmit}>
              <label
                htmlFor="search"
                className="mb-2 text-sm text-shadow-md font-medium text-blue-900 sr-only"
              >
                بحث
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                 onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.search} name="search"
                  type="search"
                  id="search"
                  className="block w-full text-shadow-md p-4 ps-10 text-sm 3xl:text-xl 4k:text-2xl text-blue-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Auditor, Accountant, ..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute text-shadow-xl end-2.5 bottom-2.5 bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2"
                >
                  Search
                </button>
              </div>
            </form>

          {jobs?.length === 0 ? <>
            <h2 className="text-gray-500 text-shadow-md text-center text-lg lg:text-2xl 3xl:text-3xl py-16 font-semibold">Stay tuned for available jobs soon!</h2>
          </>: 
          <>

        {jobs?.map((job,index)=>{

return(
<div data-aos="fade-up" key={index} className="w-8/12 border border-gray-200 my-2 shadow-sm bg-white rounded-md">
{/* اللوجو واسم الوظيفة */}
<div className="px-1 md:px-2 lg:px-4 flex flex-col lg:flex-row items-center relative overflow-hidden">
  {/* new green mark */}
  <span className="absolute top-4 text-shadow-sm -end-6 4k:-end-10 text-sm px-8 4k:px-14 3xl:text-2xl 4k:text-3xl font-semibold bg-[#34B171] text-white rotate-[45deg] text-center ">
    New
  </span>

  {/* logo */}
  <div className="w-4/12 lg:w-1/12 relative flex ">
    <img
      className=" w-full lg:absolute  bottom-0"
      src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%84%D9%88%D8%AC%D9%88%20%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D9%84%20%D9%83%D8%A7%D9%85%D9%84.jpeg"
      alt="company logo"
    />
  </div>
  {/* location , date */}
  <div className="w-full lg:w-8/12  p-6 flex-col items-center text-gray-500 justify-around">
    <p className="text-center text-shadow-sm  w-4/12 text-lg lg:text-2xl 3xl:text-3xl 4k:text-4xl text-blue-950 font-semibold">
      {job?.name?.en}
    </p>

    <div className="py-3">
        <span className="text-gray-500 text-shadow-md text-lg 3xl:text-xl 4k:text-3xl">
          {" "}
          <i className="fas fa-location-dot px-2"></i> location: {job?.location?.en}
        </span>
    </div>

    <div>
        <span className="text-gray-500 text-shadow-md text-lg 3xl:text-xl 4k:text-3xl">
          {" "}
          <i className="fas fa-clock px-2"></i>Deadine: {job?.endDate}
        </span>
    </div>
  </div>

  <div className="mb-8 ld:mb-1">
      <a
        type="submit"
        target={"_blank"}
        href={job?.link}
        className="text-white text-shadow-xl  bg-blue-700 transition-all duration-500  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm 3xl:text-xl 4k:text-3xl px-6 py-2"
      >
        Details
      </a>
  </div>

  {/* date of post the job */}
  <span className="absolute text-shadow-md bottom-1 lg:bottom-4 end-0 text-sm 3xl:text-xl 4k:text-2xl px-8 font-semibold  text-gray-500  text-center ">
   from: {job.fromDate}
  </span>
</div>
</div>
)



        })}

      
          </>}

        


          </div>
        </>
      )}
    </>
  );
}
