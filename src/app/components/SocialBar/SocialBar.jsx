"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";
import { BRANCHES } from "../../data/branches";
import useScrolledPast from "../../hooks/useScrolledPast";

export default function SocialBar() {
  const isScrolled = useScrolledPast(80);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const branchesMenuRef = useRef(null);
  const { dir } = useContext(LanguageContext);
  const branches = BRANCHES;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (branchesMenuRef.current && !branchesMenuRef.current.contains(event.target)) {
        setIsBranchesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      aria-hidden={isScrolled}
      className={`fixed top-0 left-0 hidden lg:block w-full bg-blue-600 bg-opacity-40 backdrop-blur-lg px-3 py-1 shadow-md z-50 transition-[transform,opacity] duration-500 ease-out motion-reduce:transition-none will-change-transform ${
        isScrolled
          ? "-translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap">
       
  <div className="flex gap-2 items-center">
        {/* Branches Menu */}
        <div ref={branchesMenuRef} className="relative flex gap-2 items-center">
        <button
          type="button"
          onClick={() => setIsBranchesOpen((prev) => !prev)}
          className="inline-flex h-8 items-center gap-1.5 rounded-xl border border-white/45 bg-white/12 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-inset ring-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100"
          aria-haspopup="menu"
          aria-expanded={isBranchesOpen}
          aria-label={dir === "rtl" ? "قائمة الفروع" : "Branches menu"}
        >
          {dir === "rtl" ? "الفروع" : "Branches"}
          <svg
            className={`h-3 w-3 transition-transform duration-300 ${isBranchesOpen ? "rotate-180" : ""}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          className={`absolute start-0 top-10 z-[70] w-44 overflow-hidden rounded-xl border border-sky-100/35 bg-blue-900/80 shadow-lg shadow-blue-950/45 backdrop-blur-md transition-all duration-300 ${
            isBranchesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
          }`}
          role="menu"
          aria-label={dir === "rtl" ? "قائمة الفروع" : "Branches menu"}
        >
          <ul className="py-1">
            {branches.map((branch) => (
              <li key={branch.id}>
                <Link
                  href={`/branch/${branch.id}`}
                  onClick={() => setIsBranchesOpen(false)}
                  className="block px-3 py-2 text-xs font-medium text-slate-100 transition-colors duration-200 hover:bg-sky-500/20 hover:text-white"
                  role="menuitem"
                >
                  {dir === "rtl" ? branch.name?.ar : branch.name?.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* whatsapp button */} 
      <div className="flex gap-2 items-center justify-center">
          <a href="https://wa.me/966550554262" className="flex flex-row gap-2 group p-2 hover:bg-white/20 rounded-full transition-all duration-300" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img className="w-5 h-5 group-hover:scale-110 transition-all duration-300" src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%2010.png" alt="WhatsApp" />
            <span className="text-white text-sm  ">966550554262+</span>
          </a>
        </div>
  </div>
        {/* Social media Icons */}
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
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
              className="w-5 h-5 group-hover:scale-110 transition-all duration-300" 
              src="https://raw.githubusercontent.com/Ahmed-abdeldaiem/Albatel_API2/refs/heads/main/social%20icons/Asset%203.png" 
              alt="TikTok" 
            />
          </a>
        </div>
      {/* contact and rfp buttons */}
        <div className="flex gap-1.5 items-center justify-center">
        <Link
                      href="/contact"
                      className="group relative isolate inline-flex h-8 w-auto flex-none items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-gradient-to-r from-sky-600/90 to-blue-700/90 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm ring-1 ring-inset ring-white/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:from-sky-500/95 hover:to-blue-600/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <span className="relative z-10 text-xs text-center leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                          {dir === "rtl" ? "تواصل معنا" : "Contact Us"}
                      </span>
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-80"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-200/0 via-white/20 to-sky-200/0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
                    <Link
                      href="/rfp"
                      className="group relative isolate inline-flex h-8 w-auto flex-none items-center justify-center overflow-hidden rounded-xl border border-white/40 bg-white/10 px-3 py-1 text-xs font-medium tracking-wide text-white shadow-sm ring-1 ring-inset ring-white/20 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-100 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      <span className="relative z-10 text-xs text-center leading-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                          {dir === "rtl" ? "طلب عرض سعر" : "RFP"}
                      </span>
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/15 via-transparent to-white/10 opacity-80"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-200/0 via-white/20 to-sky-200/0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </Link>
        </div>
     
      </div>
    </div>
  );
}
