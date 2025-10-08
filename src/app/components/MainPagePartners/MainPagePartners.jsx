"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LanguageContext } from "../../contexts/langContext";
import { PartnersContext } from "../../contexts/PartnersContext";



import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainPagePartners() {
  const { getPartners } = useContext(PartnersContext);
  const [partners, setPartners] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { rightToLeft, leftToRight, dir } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-in-out'
    });
  }, []);
  async function getPartnersData() {
    setLoading(true);
    let data = await getPartners();

    setPartners(data);

    setLoading(false);
  }

  useEffect(() => {
    getPartnersData();
  }, []);

  // Split partners into two groups for two rows
  const partnersFirstRow = useMemo(() => {
    return partners.filter((_, index) => index % 2 === 0);
  }, [partners]);

  const partnersSecondRow = useMemo(() => {
    return partners.filter((_, index) => index % 2 === 1);
  }, [partners]);

  // Settings for first slider (right to left)
  const settingsFirstRow = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6, 
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: false, // Right to left movement
    
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Settings for second slider (left to right)
  const settingsSecondRow = {
    ...settingsFirstRow,
    rtl: true, // Left to right movement
    autoplaySpeed: 2000, // Slightly different speed for visual variety
  };

  

 

  const renderPartnerSlide = (partner, index) => (
    <div key={index} className="px-3 w-full">
      <div className="flex flex-col-reverse z-50 rounded-3xl overflow-hidden my-5 cursor-pointer group duration-700 transition-all w-full">
        <div className="flex h-[100px] items-center relative overflow-hidden justify-center text-center">
          <img
            src={`${partner?.image}`}
            className="w-full h-[100%] group-hover:scale-110 transition-all  duration-700"
            alt="Partner image"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-l from-green-300/20 to-blue-800/30 opacity-70 z-10"></div> */}
        </div>
      </div>
    </div>
  );



  return (
    <>
     
  
<div  data-aos="fade-up">
<h2  className="text-2xl lg:text-3xl text-shadow-blue 4k:text-5xl text-blue-900 text-center font-semibold  py-5" >
        {dir == "rtl" ? <>شركاء النجاح</> : <>Partners of success</>}
      </h2>
      
      <p className="p-2 md:px-5 mx-2 md:mx-5  font-semibold text-blue-950 text-lg 4k:text-3xl text-center">
      {dir == "rtl" ? <>نفخر بشراكاتنا المثمرة وعملائنا الذين منحونا ثقتهم، فنجاحهم هو أعظم إنجازاتنا</> : <>Proud of our successful partnerships and our clients who have placed their trust in us; their success is our greatest achievement</>}      
              </p>
</div>

      <div className="relative w-full bg-[url('https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/special%20BG/bg6.png')] shadow-lg bg-center" data-aos="fade-up">
        {partners.length > 0 ? (
          <div className="space-y-4">
            {/* First Row - Moving Right to Left */}
            {partnersFirstRow.length > 0 && (
              <div className="w-full">
                <Slider
                  {...settingsFirstRow}
                  className="w-full max-w-full overflow-hidden"
                >
                  {partnersFirstRow.map((partner, index) => 
                    renderPartnerSlide(partner, `first-${index}`)
                  )}
                </Slider>
              </div>
            )}

            {/* Second Row - Moving Left to Right */}
            {partnersSecondRow.length > 0 && (
              <div className="w-full">
                <Slider
                  {...settingsSecondRow}
                  className="w-full max-w-full overflow-hidden"
                >
                  {partnersSecondRow.map((partner, index) => 
                    renderPartnerSlide(partner, `second-${index}`)
                  )}
                </Slider>
              </div>
            )}

            {/* Fallback: If we have partners but they don't split evenly, show all in first row */}
            {partners.length > 0 && partnersFirstRow.length === 0 && partnersSecondRow.length === 0 && (
              <div className="w-full">
                <Slider
                  {...settingsFirstRow}
                  className="w-full max-w-full overflow-hidden"
                >
                  {partners.map((partner, index) => 
                    renderPartnerSlide(partner, `all-${index}`)
                  )}
                </Slider>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
