"use client";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";

import * as Yup from "yup";
import { LanguageContext } from "../contexts/langContext";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function ContactUs() {
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  const [contactError, setContactError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);






  function sendEmail(formValues) {
    setIsLoading(true);
    const serviceID='service_dgxxhf6' ;
  const publicKey='tpDBNi84p2X5xrrVN' ;
  const privateKey='XvUFG3XUKJA7x2FffAKZH' ;
  const connectedMail ='monafasat@albatelcpa.com';
  const templateID ='template_7on1yag';
  
    emailjs
      .send(serviceID, templateID, formValues, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert("");
        toast.success('Message sent successfully!',{
          duration: 2500,
          position: 'top-center',
        
          // Styling
          style:{
            background:'#20c997',
             color:'#fff',
            fontWeight:'bold',

            
    
          },
         
        
          // Custom Icon
          icon: '👍',
        })
        setIsLoading(false);
        formik.resetForm(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setContactError("Failed to send message. Please try again later.");
        toast.error('Failed to send message. Please try again later.',{
          duration: 2500,
          position: 'top-center',
        
          // Styling
          style:{
            background:'#ff004f',
             color:'#fff',
            fontWeight:'bold'
            
    
          },
         
        
          // Custom Icon
          icon: '❌',
        })
        setIsLoading(false);
      });
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^(?:\+966|0)?5\d{8}$/, "invalid Phone")
        .required("phone is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: sendEmail,
  });

  const isAnyInputEmpty =
    !formik.values.name ||
    !formik.values.phone ||
    !formik.values.email ||
    !formik.values.message;

  return (
    
    <>




{dir == "rtl" ? (
        <>
          <div className="bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/contact%20us2.jpg')] flex w-full justify-center lg:justify-end bg-cover bg-center relative">
<div className="absolute inset-0 bg-gradient-to-l from-green-300/40  to-blue-800/30 opacity-70 z-10"></div>

<div className="w-8/12 z-20">
<div className=" py-20 2xl:py-30 4k:py-60">
            <h2  data-aos="fade-up" className="text-green-900 text-shadow-green font-bold text-4xl 4k:text-5xl text-center my-6">
           تواصل معنا
            </h2>

            {contactError ? (
              <div
                className="p-4 text-center w-3/4 mx-auto mt-3 mb-3 text-sm 4k:text-xl  text-red-800 rounded-lg bg-red-200/50 "
                role="alert"
              >
                {contactError}
              </div>
            ) : null}

            <form  data-aos="fade-up" data-aos-delay="200" className="w-full md:w-9/12 lg:w-7/12 bg-white/60 flex flex-col justify-center items-center   mx-auto text-right  rounded-3xl p-4" onSubmit={formik.handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   الاسم
                </label>

                {formik.errors.name && formik.touched.name ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-lg 4k:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                
                  htmlFor="phone"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   رقم الجوال                </label>
                {formik.errors.phone && formik.touched.phone ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-lg 4k:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                > 
                 البريد الإلكتروني
                 </label>
                {formik.errors.email && formik.touched.email ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

           
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name="message"
                  id="message"
                  rows="4"
                  className="block pt-7 px-0 w-full text-lg 4k:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer resize-none overflow-y-auto"
                  placeholder="اكتب رسالتك هنا "
                ></textarea>
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   الرسالة
                </label>
                {formik.errors.message && formik.touched.message ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className={`text-white text-shadow- font-medium rounded-lg text-sm 4k:text-xl w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-green-500 ${
                  formik.isValid && !isAnyInputEmpty
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={!formik.isValid || isAnyInputEmpty}
              >
                {isLoading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "إرسال"
                )}
              </button>
            </form>
          </div>


</div>

</div>
        </>
      ) : (
        <>
         <div className="bg-[url('http://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/contact%20us2.jpg')] flex w-full justify-center lg:justify-start bg-cover bg-center relative">
<div className="absolute inset-0 bg-gradient-to-l from-green-300/40  to-blue-800/30 opacity-70 z-10"></div>

<div className="w-8/12 z-20">
<div className=" py-20 2xl:py-30 4k:py-60">
            <h2 data-aos="fade-up" className="text-green-900 text-shadow-green font-bold text-4xl text-center my-6">
            Contact Us
            </h2>

            {contactError ? (
              <div
                className="p-4 text-center w-3/4 mx-auto mt-3 mb-3 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-200/50 "
                role="alert"
              >
                {contactError}
              </div>
            ) : null}

            <form data-aos="fade-up" data-aos-delay="200" className="w-full md:w-10/12 lg:w-8/12 bg-white/70 flex flex-col justify-center items-center   mx-auto text-right  rounded-3xl p-4" onSubmit={formik.handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  id="name"
                  className="block py-2.5 px-0 w-full text-lg 4k:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform translate-y-6 scale-75  top-1 start-1 -z-10  peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   Name
                </label>

                {formik.errors.name && formik.touched.name ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.name}
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="block py-2.5 px-0 w-full text-lg 4k:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg 4k:text-2xl text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 start-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   Mobile Number                </label>
                {formik.errors.phone && formik.touched.phone ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 start-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                > 
                 Email
                 </label>
                {formik.errors.email && formik.touched.email ? (
                  <div
                    className="p-4 mt-3 text-shadow-md mb-4 text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

           
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name="message"
                  id="message"
                  rows="4"
                  className="block pt-7 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer resize-none overflow-y-auto"
                  placeholder="write your message here "
                ></textarea>
                <label
                  htmlFor="message"
                  className="peer-focus:font-medium text-shadow-blue absolute text-lg text-blue-950 font-semibold duration-300 transform -translate-y-6 scale-75 top-1 start-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                   Message
                </label>
                {formik.errors.message && formik.touched.message ? (
                  <div
                    className="p-4 mt-3 mb-4 text-shadow-md text-sm 4k:text-xl text-red-800 rounded-lg bg-red-100/60 "
                    role="alert"
                  >
                    {formik.errors.message}
                  </div>
                ) : null}
              </div>

              <button
                type="submit"
                className={`text-white text-shadow-md font-medium rounded-lg text-sm 4k:text-xl w-full sm:w-auto px-5 py-2.5 text-center focus:outline-none focus:ring-4 focus:ring-green-500 ${
                  formik.isValid && !isAnyInputEmpty
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
                disabled={!formik.isValid || isAnyInputEmpty}
              >
                {isLoading ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  "Send "
                )}
              </button>
            </form>
          </div>

</div>

</div>
        </>
      )}


    



    </>
  );
}


