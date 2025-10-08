"use client";
import React, { useContext, useEffect, useState } from "react";

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




import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamPage2({ employees: initialEmployees = [] }) {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [employees, setEmployees] = useState(initialEmployees);

  // If needed, we can refresh on client later; for now rely on server data

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
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
          <div className="relative flex flex-col lg:h-[620px] 3xl:h-[790px] h-[300px] md:h-[370px] justify-center items-center mt-16 py-10  bg-center bg-no-repeat  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png')]">
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
              data-aos="fade-down"
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
              className="text-white text-shadow-xl text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4 lg:my-8 z-30 font-bold"
            >
              فريق عمل شركة الباتل
            </h2>

            <h3
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2 lg:mt-6 z-30 font-semibold"
            >
              فريق واحد
              <span className="text-2xl md:text-7xl font-normal">..</span>رؤية
              مشتركة<span className="text-2xl md:text-7xl font-normal">..</span>
              نجاح بلا حدود
            </h3>
            <h3
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8  lg:mt-3 z-30 font-semibold"
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
                      data-aos="fade-up"
                      key={index}
                      className="relative group w-9/12 lg:w-1/5 md:w-1/3  3xl:w-1/6 p-2 xl:p-3 overflow-hidden"
                    >
                      <Link
                  
                        href={`/TeamMember/${teamMember?.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                          alt="certfied image"
                        />
                        <div className=" flex h-[210px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember?.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="Team Member image"
                          />
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="text-shadow-blue  text-xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember?.name?.ar}
                          </h5>
                        </div>
                      
                          <div className="flex flex-wrap justify-center items-center text-xs gap-1">
                            {teamMember?.cert
                              ?.split(/\s+/)
                              .filter((cert) => cert.trim() !== "")
                              .map((cert, index) => (
                                <span
                                  key={index}
                                  className="bg-slate-100 rounded-3xl px-2 py-1"
                                >
                                  {cert}
                                </span>
                              ))}
                       
                        </div>
                        <div className="flex justify-end pb-3 px-4">
                          <p className="text-gray-600 border-b  text-sm group-hover:text-green-700 group-hover:border-b-black transition-all duration-700 ">
                            عرض التفاصيل
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

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
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
           {/* header section */}
           <div className="relative flex flex-col lg:h-[620px] 3xl:h-[790px] h-[300px] md:h-[370px] justify-center items-center mt-16 py-10  bg-center bg-no-repeat  bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/team.png')]">
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
              data-aos="fade-down"
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
              data-aos="fade-up"
              className="text-white text-shadow-xl text-xl md:text-3xl lg:text-5xl text-center shadow-xl my-1 md:my-4 lg:my-8 z-30 font-bold"
            >
Al-Batel Company Team
            </h2>

            <h3
              data-aos="zoom-in"
              data-aos-delay="300"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center w-10/12 md:w-2/3 lg:w-1/2 mt-1 md:mt-2 lg:mt-6 z-30 font-semibold"
            >
              One Team
              <span className="text-2xl md:text-7xl font-normal">..</span>One Vision<span className="text-2xl md:text-7xl font-normal">..</span>
              Boundless Success
            </h3>
            <h3
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-white text-shadow-xl text-xl md:text-2xl lg:text-3xl text-center  w-10/12 md:w-2/3 lg:w-1/2 mb-1 lg:mb-8  lg:mt-3 z-30 font-semibold"
            >
              <span>From Vision to Victory</span>
              <span className="text-2xl md:text-7xl font-normal">..</span>
              <span>Our Team at Your Service</span>
            </h3>

            <button
              data-aos="fade-up"
              data-aos-delay="900"
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
                      data-aos="fade-up"
                      key={index}
                      className="relative group w-9/12 lg:w-1/5 md:w-1/3  3xl:w-1/6 p-2 xl:p-3 overflow-hidden"
                    >
                      <Link
                     
                        href={`/TeamMember/${teamMember?.id}`}
                        className="flex relative flex-col border rounded-3xl shadow-lg overflow-hidden  hover:shadow-xl hover:shadow-blue-200 hover:bg-green-300/10 my-10  cursor-pointer group duration-700 transition-all bg-white border-gray-300 w-full"
                      >
                        <img
                          className="absolute w-[25px] h-[25px] md:w-[35px] md:h-[35px]"
                          src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel-API/refs/heads/main/Logos%20and%20Certified3/certified.png"
                          alt="certfied image"
                        />
                        <div className=" flex h-[210px] items-center overflow-hidden mb-1 border-b  justify-center text-center ">
                          <img
                            src={`${teamMember?.image}`}
                            className="w-full md:w-full h-full   transition-all duration-1000 "
                            alt="Team Member image"
                          />
                        </div>
                        <div className=" flex  p-1 flex-col overflow-hidden items-center justify-center text-center">
                          <h5 className="text-shadow-blue  text-xl text-nowrap border-b-4 border-b-transparent  group-hover:border-blue-600 duration-700 transition-all pb-3 text-blue-900 font-bold text-center tracking-tight">
                            {teamMember?.name?.en}
                          </h5>
                        </div>
                      
                          <div className="flex flex-wrap justify-center items-center text-xs gap-1">
                            {teamMember?.cert
                              ?.split(/\s+/)
                              .filter((cert) => cert.trim() !== "")
                              .map((cert, index) => (
                                <span
                                  key={index}
                                  className="bg-slate-100 rounded-3xl px-2 py-1"
                                >
                                  {cert}
                                </span>
                              ))}
                       
                        </div>
                        <div className="flex justify-end pb-3 px-4">
                          <p className="text-gray-600 border-b  text-sm group-hover:text-green-700 group-hover:border-b-black transition-all duration-700 ">
                            Show Details
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

              <div data-aos="fade-up" className="z-20 flex flex-col justify-center items-center">
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
