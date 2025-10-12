"use client";
import React, { useState, useEffect } from "react";

export default function SocialBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      
      if (scrollPercentage >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${isScrolled ? 'static' : 'fixed top-0 left-0'} w-full bg-blue-600 bg-opacity-40 backdrop-blur-lg px-4 shadow-md z-50 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex gap-2 items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/albatel-cpa/posts/?feedView=all"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%209.png" 
              alt="LinkedIn" 
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/albatel_cpa/"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%205.png" 
              alt="Instagram" 
            />
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/albatel_cpa"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter/X"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%202.png" 
              alt="Twitter/X" 
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61582443590665"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%204.png" 
              alt="Facebook" 
            />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@Albatel_CPA"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%207.png" 
              alt="YouTube" 
            />
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@albatel_cpa?_t=ZS-90UGIjq7hMf&_r=1"
            className="group p-2 hover:bg-white/20 rounded-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <img 
              className="w-6 h-6 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png" 
              alt="TikTok" 
            />
          </a>
        </div>
      </div>
    </div>
  );
}
