"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";

/**
 * Animated Coming Soon section matching the site's gradient/ellipse style.
 * - Fullscreen, center-aligned, subtle float/glow animations
 * - Optional countdown if targetDate is provided
 * - No external libs; works standalone
 */
export default function ComingSoon() {
  return (
    <section className="relative isolate min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="animate-float-slow absolute top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-125 -z-10 opacity-70"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="animate-float-slow-delay absolute top-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[15%] scale-125 -z-10 opacity-70"
      />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="animate-pulse-glow h-56 w-56 md:h-80 md:w-80 rounded-full bg-gradient-to-r from-[#267FAF33] to-[#8B345633] blur-3xl" />
        </div>

      <div className="animate-levitate">
        <h1
        className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight"
        data-aos="zoom-in"
        data-aos-delay="100"
        >
        Coming
        <span className="relative inline-block -rotate-[3.41deg] mb-1 md:mb-2 md:p-1 mx-2 align-middle">
          <span className="absolute inset-0 bg-gradient-to-r from-[#267FAF] to-[#093853] rounded-md"></span>
          <span className="relative px-3">Soon</span>
        </span>
        </h1>

        <p
        className="mt-6 max-w-2xl text-base md:text-lg text-gray-300"
        data-aos="fade-up"
        data-aos-delay="200"
        >
        </p>
      </div>
      </div>

        <style jsx>{`
          @keyframes levitate {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-50px); }
          }
          .animate-levitate {
            animation: levitate 3s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>

    </section>
  );
}
