"use client";
import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

import { LanguageContext } from "../contexts/langContext";
// Inline SVG hexagon to avoid external dependency issues
function HexagonBox({ children, className, style }) {
  const stroke = style?.stroke || "#000";
  const strokeWidth = style?.strokeWidth || 2;
  const fill = style?.fill || "#fff";
  return (
    <svg viewBox="0 0 100 100" className={className} style={{ display: "inline-block" }} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="hexagon">
      <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" fill={fill} stroke={stroke} strokeWidth={strokeWidth} />
      {children}
    </svg>
  );
}
import Link from "next/link";






export default function TeamPage2({ employees: initialEmployees = [] }) {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [employees, setEmployees] = useState(initialEmployees);

  // If needed, we can refresh on client later; for now rely on server data

  // Simple scroll animation function
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, observerOptions);

    // Observe all elements with data-aos attributes
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach((el) => {
      el.classList.add('aos-init');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);


  const handleScroll = () => {
    const section = document.getElementById("team");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = [
    { word: { ar: "تعاون", en: "Cooperation" } },
    { word: { ar: "خبرة", en: "Experience" } },
    { word: { ar: "كفاءة", en: "Efficiency" } },
    { word: { ar: "ابداع", en: "Creativity" } },
    { word: { ar: "ابتكار", en: "innovation" } },
    { word: { ar: "جودة", en: "Quality" } },
    { word: { ar: "نزاهة ", en: "Integrity" } },
    { word: { ar: "انتاجية ", en: "Productivity" } },
    { word: { ar: "احترافية", en: "Professional" } },
  ];

  return (
    <>
      {dir == "rtl" ? (
        <>
          {/* header section */}
          <div className="relative flex flex-col h-[97vh] justify-center items-center  py-10  bg-center bg-no-repeat  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png')]">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/70 to-blue-200/50 opacity-80 z-10"></div>
            {/* certified */}
            <div className="absolute bottom-2 end-2 w-2/12 ">
              <img
                className="w-full"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified2/111-removebg-preview.png"
                alt="certified image"
              />
            </div>
            {/* hexagon */}
            <div
              className="hidden lg:flex flex-wrap lg:gap-4 z-30  justify-center"
            >
              {words.map((word, index) => {
                return (
                  <HexagonBox
                    key={index}
                    className="lg:w-1/12 md:w-1/6 w-1/5 lg:p-3 md:p-2 p-1 cursor-pointer  text-shadow-md  "
                    style={{
                      stroke: "#3a497b",
                      strokeWidth: 2,
                      fill: "#ffffff77",
                    }}
                  >
                    <text
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      className="text-2xl text-gray-900"
                      style={{
                        fill: "#3a497b",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      {word.word.ar}
                    </text>
                  </HexagonBox>
                );
              })}
            </div>

            <h2
              data-aos="fade-up"
              className="text-white text-shadow-xl text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4  z-30 font-bold"
            >
              فريق عمل شركة الباتل
            </h2>

            <h3
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2  z-30 font-semibold"
            >
              فريق واحد
              <span className="text-2xl md:text-7xl font-normal">..</span>رؤية
              مشتركة<span className="text-2xl md:text-7xl font-normal">..</span>
              نجاح بلا حدود
            </h3>
            <h3
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8   z-30 font-semibold"
            >
              <span>من الفكرة إلى النجاح</span>
              <span className="text-2xl md:text-7xl font-normal">..</span>
              <span>فريقنا في خدمتك</span>
            </h3>

            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="my-2 md:my-8 lg:my-12 z-30"
              onClick={handleScroll}
            >
              <h3 className="animate-pulse inline-block text-shadow-md rounded-2xl md:px-6 cursor-pointer mx-1 bg-blue-100 bg-opacity-50 py-2 lg:py-3 border-blue-950 border-2 text-center z-20 text-blue-950 text-sm md:text-lg font-bold">
                تعرف على فريق العمل
                <span className="mx-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </h3>
            </button>
          </div>

     

          {/* team member section */}
          <div className="w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center  lg:px-6 xl:px-20 2xl:px-24  py-14  ">
            {/* <Logos /> */}
            <div id="team" className="py-2 px-4 w-full ">
              {/* Team members */}
              <div className="w-full flex flex-wrap items-center justify-center">
                {employees?.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      className="relative group w-9/12 md:w-1/3 lg:w-1/5 3xl:w-1/6 p-2 xl:p-3"
                    >
                      <Link
                        href={`/TeamMember/${teamMember?.id}`}
                        className="relative my-8 block overflow-hidden rounded-3xl border border-white/65 bg-white/90 shadow-lg shadow-blue-900/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/20"
                      >
                        <img
                          className="absolute end-3 top-3 z-20 h-7 w-7 md:h-9 md:w-9 drop-shadow-md"
                          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                          alt="certfied image"
                        />
                        <div className="relative flex h-[220px] items-center justify-center overflow-hidden border-b border-slate-200">
                          <img
                            src={`${teamMember?.image}`}
                            className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                            alt="Team Member image"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/15 via-transparent to-transparent" />
                        </div>
                        <div className="flex flex-col items-center justify-center px-4 pt-4 text-center">
                          <h5 className="border-b-2 border-transparent pb-2 text-lg font-extrabold tracking-tight text-blue-900 transition-all duration-500 group-hover:border-blue-500 md:text-xl">
                            {teamMember?.name?.ar}
                          </h5>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-1.5 px-3 pb-3 pt-2 text-xs">
                            {teamMember?.cert
                              ?.split(/\s+/)
                              .filter((cert) => cert.trim() !== "")
                              .map((cert, index) => (
                                <span
                                  key={index}
                                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/70"
                                >
                                  {cert}
                                </span>
                              ))}
                        </div>

                        <div className="flex justify-end px-4 pb-4">
                          <p className="inline-flex items-center gap-1 border-b border-slate-300 pb-0.5 text-sm font-medium text-slate-600 transition-all duration-500 group-hover:border-blue-600 group-hover:text-blue-800">
                            عرض التفاصيل
                            <i className="fa-solid fa-arrow-left text-xs transition-transform duration-500 group-hover:-translate-x-1" />
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

             {/* Join to Us section */}
         <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div  className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                  انضم إلى فريق عملنا
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                  تواصل معنا اليوم واكتشف الوظائف المتاحة لتحقيق أهدافك المهنية
                </h3>

                <div className="flex flex-col justify-center items-center md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      تواصل معنا الآن
                    </h3>
                  </Link>
                  <Link href="/careers">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                      إكتشف الوظائف المتاحة
                    </h3>
                  </Link>
                </div>
              </div>
              <div  className="flex flex-col md:flex-row w-full justify-between py-8  px-2 md:px-8 z-20 ">
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
           {/* header section */}
           <div className="relative flex flex-col h-[97vh] justify-center items-center  py-10  bg-center bg-no-repeat  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png')]">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-700/70 to-blue-200/50 opacity-80 z-10"></div>
            {/* certified */}
            <div className="absolute bottom-2 end-2 w-2/12 ">
              <img
                className="w-full"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified2/111-removebg-preview.png"
                alt="certified image"
              />
            </div>
            {/* hexagon */}
            <div
              className="hidden lg:flex flex-wrap lg:gap-4 z-30  justify-center"
            >
              {words.map((word, index) => {
                return (
                  <HexagonBox
                  key={index}
                  className="lg:w-1/12 md:w-1/6 w-1/5  md:p-2 p-1 cursor-pointer  text-shadow-md  "
                  style={{
                    stroke: "#3a497b",
                    strokeWidth: 2,
                    fill: "#ffffff77",
                  }}
                >
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="text-2xl text-gray-900"
                    style={{
                      fill: "#3a497b",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {word.word.en}
                  </text>
                </HexagonBox>
                );
              })}
            </div>

            <h2
              className="text-white text-shadow-xl text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4  z-30 font-bold"
            >
Al-Batel Company Team
            </h2>

            <h3
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2  z-30 font-semibold"
            >
              One Team
              <span className="text-2xl md:text-7xl font-normal">..</span>One Vision<span className="text-2xl md:text-7xl font-normal">..</span>
              Boundless Success
            </h3>
            <h3
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8   z-30 font-semibold"
            >
              <span>From Vision to Victory</span>
              <span className="text-2xl md:text-7xl font-normal">..</span>
              <span>Our Team at Your Service</span>
            </h3>

            <button
              className="my-2 md:my-8 lg:my-12 z-30"
              onClick={handleScroll}
            >
              <h3 className="animate-pulse inline-block text-shadow-md rounded-2xl md:px-6 cursor-pointer mx-1 bg-blue-100 bg-opacity-50 py-2 lg:py-3 border-blue-950 border-2 text-center z-20 text-blue-950 text-sm md:text-lg font-bold">
               More About Our Team
                <span className="mx-2">
                  <i className="fa-solid fa-arrow-down"></i>
                </span>
              </h3>
            </button>
          </div>

     

          {/* team member section */}
          <div className="w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-blue-light-effect-fragmentation-glass-effect-image_593050.jpg')]  bg-cover bg-center  lg:px-6 xl:px-20 2xl:px-24  py-14  ">
          
            <div id="team" className="py-2 px-4 w-full ">
              {/* Team members */}
              <div className="w-full flex flex-wrap items-center justify-center">
                {employees?.map((teamMember, index) => {
                  return (
                    <div
                      key={index}
                      data-aos="fade-up"
                      className="relative group w-9/12 md:w-1/3 lg:w-1/5 3xl:w-1/6 p-2 xl:p-3"
                    >
                      <Link
                        href={`/TeamMember/${teamMember?.id}`}
                        className="relative my-8 block overflow-hidden rounded-3xl border border-white/65 bg-white/90 shadow-lg shadow-blue-900/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/20"
                      >
                        <img
                          className="absolute right-3 top-3 z-20 h-7 w-7 md:h-9 md:w-9 drop-shadow-md"
                          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                          alt="certfied image"
                        />
                        <div className="relative flex h-[220px] items-center justify-center overflow-hidden border-b border-slate-200">
                          <img
                            src={`${teamMember?.image}`}
                            className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 group-hover:scale-105"
                            alt="Team Member image"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/15 via-transparent to-transparent" />
                        </div>
                        <div className="flex flex-col items-center justify-center px-4 pt-4 text-center">
                          <h5 className="border-b-2 border-transparent pb-2 text-lg font-extrabold tracking-tight text-blue-900 transition-all duration-500 group-hover:border-blue-500 md:text-xl">
                            {teamMember?.name?.en}
                          </h5>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-1.5 px-3 pb-3 pt-2 text-xs">
                            {teamMember?.cert
                              ?.split(/\s+/)
                              .filter((cert) => cert.trim() !== "")
                              .map((cert, index) => (
                                <span
                                  key={index}
                                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-medium text-slate-700 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50/70"
                                >
                                  {cert}
                                </span>
                              ))}
                        </div>

                        <div className="flex justify-end px-4 pb-4">
                          <p className="inline-flex items-center gap-1 border-b border-slate-300 pb-0.5 text-sm font-medium text-slate-600 transition-all duration-500 group-hover:border-blue-600 group-hover:text-blue-800">
                            Show Details
                            <i className="fa-solid fa-arrow-right text-xs transition-transform duration-500 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


             
          {/* Join to Us section */}
          <div className="relative w-full flex flex-col justify-center items-center  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/join.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-l to-blue-900/80  from-blue-900/90 opacity-70 z-10"></div>

              <div  className="z-20 flex flex-col justify-center items-center">
                <h2 className="text-xl  md:text-3xl lg:text-5xl text-shadow-sm 4k:text-5xl text-white text-center font-semibold pt-12">
                oin our Team
                </h2>

                <h3 className=" text-lg  lg:text-xl  text-center font-semibold  text-white py-4 ">
                Contact us today and discover the job opportunities that can help you achieve your career goals                </h3>

                <div className="flex flex-col md:flex-row mb-10">
                  <Link href="/contact">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                    Contact us now
                    </h3>
                  </Link>
                  <Link href="/careers">
                    <h3 className=" inline-block rounded-xl px-2 md:px-5 cursor-pointer mx-1 bg-blue-100 bg-opacity-60 py-1 my-3 border-white border text-center  text-gray-950 text-sm md:text-lg font-semibold transition-all duration-500 hover:border-blue-950 hover:text-white hover:bg-opacity-40">
                    Discover available jobs
                    </h3>
                  </Link>
                </div>
              </div>
              <div  className="flex flex-col md:flex-row w-full justify-between py-8  px-2 md:px-8 z-20 ">
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
