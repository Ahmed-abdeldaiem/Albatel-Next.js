"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LanguageContext } from "../../contexts/langContext";

/* =========================================================
   Manager — our-numbers statistics strip, unified AR/EN,
   with count-up animations triggered when in-view.
   ========================================================= */
export default function Manager() {
  const { dir } = useContext(LanguageContext);
  const isRtl = dir === "rtl";

  const t = {
    eyebrow: isRtl ? "بالأرقام" : "By the Numbers",
    title: isRtl ? "أرقامنا تعكس تميّزنا" : "Our Figures Reflect Our Excellence",
    sub: isRtl
      ? "نفخر بفريقنا المتميّز الذي يحقّق أعلى معايير الجودة والمهنية في كل ما نقدّمه."
      : "Proud of our outstanding team consistently achieving the highest standards of quality and professionalism.",
    cta: isRtl ? "تعرّف على فريقنا" : "Meet our team",
    ctaHint: isRtl
      ? "يمكنك الاطلاع على فريقنا من هنا"
      : "Explore our team here",
  };

  const stats = isRtl
    ? [
        {
          value: 20,
          suffix: "+",
          label: "عامًا من الخبرة",
          icon: <ExperienceIcon />,
          tone: "blue",
        },
        {
          value: 80,
          suffix: "+",
          label: "موظّف من أصحاب الشهادات والخبرة",
          icon: <UsersIcon />,
          tone: "green",
        },
        {
          value: 2500,
          suffix: "+",
          label: "عميل سعيد",
          icon: <HandshakeIcon />,
          tone: "amber",
        },
        {
          value: 3000,
          suffix: "+",
          label: "مشروع منجز",
          icon: <ProjectsIcon />,
          tone: "indigo",
        },
        {
          value: 50,
          suffix: "M+",
          label: "قيمة المشاريع",
          icon: <RiyalIcon />,
          tone: "emerald",
        },
      ]
    : [
        {
          value: 25,
          suffix: "+",
          label: "Years of experience",
          icon: <ExperienceIcon />,
          tone: "blue",
        },
        {
          value: 80,
          suffix: "+",
          label: "Qualified staff",
          icon: <UsersIcon />,
          tone: "green",
        },
        {
          value: 2500,
          suffix: "+",
          label: "Happy clients",
          icon: <HandshakeIcon />,
          tone: "amber",
        },
        {
          value: 3000,
          suffix: "+",
          label: "Delivered projects",
          icon: <ProjectsIcon />,
          tone: "indigo",
        },
        {
          value: 50,
          suffix: "M+",
          label: "Project value",
          icon: <RiyalIcon />,
          tone: "emerald",
        },
      ];

  return (
    <section
      className="relative py-14 sm:py-20 overflow-hidden"
      aria-labelledby="manager-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "28px 28px, 34px 34px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -start-24 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -end-24 w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-green-300">
            {t.eyebrow}
          </span>
          <h2
            id="manager-title"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg"
          >
            {t.title}
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-green-400 via-white to-green-400" />
          <p className="mt-5 mx-auto max-w-3xl text-white/85 text-sm sm:text-base lg:text-lg">
            {t.sub}
          </p>
        </div>

        {/* Stats grid */}
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <li key={i} data-aos="fade-up" data-aos-delay={(i % 5) * 80}>
              <StatCard
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                icon={s.icon}
                tone={s.tone}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div data-aos="fade-up" data-aos-delay="200" className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <span className="text-white/80 text-sm sm:text-base font-medium">
            {t.ctaHint}
          </span>
          <Link
            href="/ourTeam"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/60 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.cta}
            <span
              className={`transition-transform duration-300 ${
                isRtl
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
              aria-hidden="true"
            >
              {isRtl ? "←" : "→"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   Helper: Stat card with count-up animation.
   ========================================================= */
function StatCard({ value, suffix = "", label, icon, tone = "blue" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done || !ref.current) return undefined;
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateTo(value, setDisplay, () => setDone(true));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, done]);

  const tones = {
    blue: "from-blue-400 to-blue-300",
    green: "from-green-400 to-emerald-300",
    amber: "from-amber-400 to-orange-300",
    indigo: "from-indigo-400 to-violet-300",
    emerald: "from-emerald-400 to-teal-300",
  };

  return (
    <div
      ref={ref}
      className="group h-full p-5 sm:p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 text-center"
    >
      <span className="mx-auto w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500">
        {icon}
      </span>
      <p
        className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-br ${
          tones[tone] || tones.blue
        } bg-clip-text text-transparent tabular-nums`}
      >
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-white/85 text-[11px] sm:text-sm font-medium leading-relaxed">
        {label}
      </p>
    </div>
  );
}

function animateTo(target, setValue, onComplete) {
  const duration = 1400;
  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = easeOut(progress);
    setValue(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setValue(target);
      onComplete?.();
    }
  };
  requestAnimationFrame(step);
}

/* =========================================================
   Inline SVG icons.
   ========================================================= */
function ExperienceIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.75 5.25a.75.75 0 0 0-1.5 0v5.25c0 .2.08.39.22.53l3 3a.75.75 0 0 0 1.06-1.06l-2.78-2.78V7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.49 4.49 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
    </svg>
  );
}

function RiyalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
