"use client";

import React, { useContext, useState } from 'react'
import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';


import { LanguageContext } from "../../contexts/langContext";
 
export default function Certificates() {

  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);

  const certificates = [
    {
      word:'SOCPA',
      nameAr:'الزمالة السعودية للمحاسبين القانونيين',
      nameEn:'SOCPA Certificate'
    },
    {
      word:'CPA',
      nameAr:'محاسب قانوني معتمد',
      nameEn:'Certified Public Accountant'
    },
    {
      word:'CISA',
      nameAr:'مدقق نظم معلومات',
      nameEn:'Certified Information Systems Auditor'
    },
    {
      word:'CIA',
      nameAr:'مدقق داخلي معتمد',
      nameEn:'Certified Internal Auditor'
    },
    {
      word:'CertIFRS',
      nameAr:'شهادة المعايير الدولية لإعداد التقارير المالية',
      nameEn:'Certificate in International Financial Reporting Standards'
    },
    {
      word:'IPSAS',
      nameAr:'المعايير الدولية لإعداد التقارير المالية للقطاع العام',
      nameEn:'International Public Sector Accounting Standards'
    },
    {
      word:'CICA',
      nameAr:'محاسب قانوني إسلامي',
      nameEn:'Certified Internal Control Auditor'
    },
    {
      word:'CFC',
      nameAr:'مستشار مالي',
      nameEn:'Certified Financial Consultant'
    },
    {
      word:'CBA',
      nameAr:'مدير أعمال',
      nameEn:'Certified Business Administrator'
    },
    {
      word:'SOCPA VAT',
      nameAr:'أخصائي ضريبة القيمة المضافة',
      nameEn:'SOCPA Value Added Tax Specialist'
    },
    {
      word:'SOCPA-FFE',
      nameAr:'فاحص احتيال مالي',
      nameEn:'SOCPA Financial Fraud Examiner'
    },
    {
      word:'CIPA',
      nameAr:'شهادة المحاسب الإسلامي القانوني',
      nameEn:'Certified Islamic Professional Accountant'
    },
    {
      word:'CIB',
      nameAr:'مصرفي إسلامي معتمد',
      nameEn:'Certified Islamic Banker'
    },
    {
      word:'CSAA',
      nameAr:'المراقب والمدقق الشرعي',
      nameEn:'Certified Shari\'a Advisor and Auditor'
    },
    {
      word:'MBA-IF',
      nameAr:'ماجستير مهني في المالية الإسلامية',
      nameEn:'Master of Business Administration (Islamic Finance)'
    },
    {
      word:'CFM',
      nameAr:'مدير مالي',
      nameEn:'Certified Financial Manager'
    },
    {
      word:'CFE',
      nameAr:'فاحص احتيال مالي',
      nameEn:'Certified Fraud Examiner'
    },
    {
      word:'PMP',
      nameAr:'إدارة المشاريع الاحترافية',
      nameEn:'Project Management Professional'
    },
    {
      word:'SOCPA IFRS',
      nameAr:'شهادة المعايير الدولية للتقرير المالي',
      nameEn:'SOCPA International Financial Reporting Standards'
    },
    {
      word:'GRCA',
      nameAr:'حوكمة الشركات، وإدارة المخاطر، ومراجعة الامتثال',
      nameEn:'Governance, Risk Management and Compliance Audit'
    },
    {
      word:'GRCP',
      nameAr:'المختص في الحوكمة وإدارة المخاطر والامتثال',
      nameEn:'Governance, Risk Management and Compliance Professional'
    },
    {
      word:'CME',
      nameAr:'اختبارات سوق المال',
      nameEn:'Capital Market Examinations'
    },
    {
      word:'CMA',
      nameAr:'شهادة المحاسب الإداري المعتمد',
      nameEn:'Certified Management Accountant'
    },
    {
      word:'MBA',
      nameAr:'ماجستير إدارة الأعمال',
      nameEn:'Master of Business Administration in Global Management'
    },
    {
      word:'PGD',
      nameAr:'الإدارة العالمية',
      nameEn:'Postgraduate Diploma in Corporate Governance'
    },
    {
      word:'RMP',
      nameAr:'إدارة المخاطر الاحترافية',
      nameEn:'Risk Management Professional'
    },
    {
      word:'PCCG',
      nameAr:'حوكمة الشركات',
      nameEn:'Professional Certificate in Corporate Governance'
    },
    {
      word:'LLM',
      nameAr:'ماجستير في القانون العام',
      nameEn:'Master of Laws'
    },
    {
      word:'CME-1',
      nameAr:'مقدمة في الأوراق المالية والاستثمار الدولية',
      nameEn:'International Introduction to Securities and Investment'
    },
    {
      word:'CFA',
      nameAr:'محلل مالي',
      nameEn:'Chartered Financial Analyst'
    },
    {
      word:'DBA',
      nameAr:'دكتوراه في إدارة الأعمال',
      nameEn:'Doctor of Business Administration'
    },
    {
      word:'DipIFR',
      nameAr:'دبلوم المعايير الدولية للتقرير المالي',
      nameEn:'Diploma in International Financial Reporting'
    },
    {
      word:'SPSS',
      nameAr:'التحليل الإحصائي',
      nameEn:'Statistical Package for the Social Sciences'
    }
  ];
  
const institutions=[
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/socpa.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/qadaa1.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/acca1.jpg'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/TAQEEM.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/IMA.jpg'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/IIA.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/AAOIFI.webp'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/DAP.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/SCE1.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/TVTC.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/Tegara2.png'},
  {img:'https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/%D9%85%D8%A4%D8%B3%D8%B3%D8%A7%D8%AA%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9/HR.png'},
]

  return <>
  
  <div  data-aos-delay="100"  className=" w-full flex flex-wrap justify-center">
    {certificates.map((cert, index)=>{
      return(
      <div  key={index} className='p-2 w-4/12 md:w-1/6 group '>
        
        <div className='3xl:py-2 mx-1 md:mx-3 lg:mx-6 bg-white rounded-tr-xl md:rounded-tr-3xl hover:rounded-tl-2xl rounded-bl-xl md:rounded-bl-3xl hover:rounded-br-2xl border border-blue-950 cursor-pointer transition-all duration-500  group-hover:bg-green-50/50 hover:shadow-lg overflow-hidden'>
        <h4 className='text-blue-950  text-sm md:text-lg   lg:font-semibold  text-center  transition-all duration-500 ease-linear  group-hover:text-green-950 '>{cert.word}</h4>
          <p className='hidden lg:block text-sm text-center'>{dir =='rtl' ? (cert.nameAr):(cert.nameEn)}</p>
        </div>
    
      </div>
      )
    })}
</div>

<div className=" w-full flex flex-wrap items-center justify-center">
{institutions.map((inst,index)=>{
  return(
    <div key={index} className='p-2 w-2/12 md:w-1/12 group group overflow-hidden'>
<img className='w-[95%] transition-all duration-700 group-hover:scale-110' src={inst.img} alt="institutions Images" />
    </div>
  )
})}
</div>
  </>
}
