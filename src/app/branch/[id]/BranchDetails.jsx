"use client";

import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../contexts/langContext";

import AOS from "aos";
import "aos/dist/aos.css";

export default function BranchDetails({ branch }) {
  const { dir } = useContext(LanguageContext);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {dir === "rtl" ? (
        <div className=" bg-center pt-28 bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')]">
          <h3
            data-aos="zoom-in"
            className="text-center  font-bold text-blue-950 my-3 text-2xl lg:text-4xl"
          >
            {branch?.name?.ar}
          </h3>
{/* branch Data */}
          <div data-aos="fade-up" className="pt-1 md:pt-5">
            {/* branch location */}
            <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/map%20icon.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                {branch?.location_map?.ar}
              </p>
            </div>
            {/* branch Email */}
            <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/emailIcon2.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                البريد الإلكتروني للفرع: {branch?.email}
              </p>
            </div>
            {/* branch phone */}
            <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/callIcon2.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
              رقم الهاتف: {branch?.phone}
              </p>
            </div>
            {/* branch postal code */}
            <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
              <img
                className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
                src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/postalIcon.png"
                alt="location icon"
              />
              <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
                الرقم البريدي: {branch?.postal}
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden pt-4  flex justify-center items-center ">
            <iframe
              src={branch?.google_map}
              width={`100%`}
              height={550}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <h3
           
            className="text-center  font-bold text-blue-950 my-3 text-lg lg:text-xl"
          >
أوقات العمل الرسمية:  الأحد - الخميس: 9:00 صباحاً - 5:00 مساءً  
          </h3>
          <h3
          
            className="text-center  font-bold text-blue-950 pb-3 text-lg lg:text-xl"
          >
الجمعة والسبت: مغلق    
      </h3>
        </div>
      ) : (
        <div className=" bg-center pt-28 bg-no-repeat bg-cover bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')]">
        <h3
          data-aos="zoom-in"
          className="text-center  font-bold text-blue-950 my-3 text-2xl lg:text-4xl"
        >
          {branch?.name?.en}
        </h3>
{/* branch Data */}
        <div data-aos="fade-up" className="pt-1 md:pt-5">
          {/* branch location */}
          <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
            <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/map%20icon.png"
              alt="location icon"
            />
            <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
              {branch?.location_map?.en}
            </p>
          </div>
          {/* branch Email */}
          <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
            <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/emailIcon2.png"
              alt="location icon"
            />
            <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
              Branch Email: {branch?.email}
            </p>
          </div>
          {/* branch phone */}
          <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
            <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/callIcon2.png"
              alt="location icon"
            />
            <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
              Branch Phone: {branch?.phone}
            </p>
          </div>
          {/* branch postal code */}
          <div className="w-full text-lg lg:text-xl 4k:text-3xl   py-2  flex justify-center items-center ">
            <img
              className="w-7 mx-1 pt-2 md:pt-0 md:mx-3"
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/postalIcon.png"
              alt="location icon"
            />
            <p className="text-gray-900 leading-10 text-center md:text-justify  font-semibold">
            Postal Code: {branch?.postal}
            </p>
          </div>
        </div>

        <div className="w-full overflow-hidden pt-4  flex justify-center items-center ">
          <iframe
            src={branch?.google_map}
            width={`100%`}
            height={550}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <h3
         
          className="text-center  font-bold text-blue-950 my-3 text-lg lg:text-xl"
        >
Official working hours: Sunday - Thursday: 9:00 AM - 5:00 PM
        </h3>
        <h3
        
          className="text-center  font-bold text-blue-950 pb-3 text-lg lg:text-xl"
        >
Friday and Saturday: Closed    </h3>
      </div>
       
      )}
    </>
  );
}
