"use client";
import { useEffect } from "react";
import Stroke from "@/public/stroke.svg";
import Image from "next/image";
import DottedLine from "@/public/dotted-line3.svg";
import WideBlueElipse from "@/public/wide-blue-elipse.svg";
import WideRedElipse from "@/public/wide-red-elipse.svg";
import Renaissance from "@/public/renaissance.svg";
import Dotted2 from "@/public/dotted-2.svg";

import Pres from "@/public/pres.webp";
import Sekre from "@/public/sekre.webp";
import Gensec from "@/public/gensec.webp";
import Treasury from "@/public/treasury.webp";
import Inrel from "@/public/inrel.webp";
import Exrel from "@/public/exrel.webp";
import HR from "@/public/hr.webp";
import RNCD from "@/public/rncd.webp";
import CEEM from "@/public/ceem.webp";
import OpeterGanteng from "@/public/opeterganteng.webp";
import TeamCarousel from "@/components/TeamCarousel";
import Footer from "@/components/Footer";

const Page = () => {
  const teamMembers = [
    { src: Pres, alt: "President", name: "President" },
    { src: Sekre, alt: "Secretary", name: "Secretary" },
    { src: Gensec, alt: "General Secretary", name: "General Secretary" },
    { src: Treasury, alt: "Treasury", name: "Treasury" },
    { src: Inrel, alt: "Internal Relations", name: "Internal Relations" },
    { src: Exrel, alt: "External Relations", name: "External Relations" },
    { src: HR, alt: "Human Resources", name: "Human Resources" },
    { src: RNCD, alt: "Research & Development", name: "Research & Development" },
    { src: CEEM, alt: "CEEM", name: "CEEM" },
    { src: OpeterGanteng, alt: "OpeterGanteng", name: "OpeterGanteng" },
  ];

  useEffect(() => {
    // Initialize AOS
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <main className="pb-5 md:pb-10 isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
      {/* Background Elements */}
      <Image
        src={Stroke}
        alt="Stroke"
        className="absolute left-1/2 top-[150px] md:top-[300px] lg:top-[400px] w-[1200px] lg:w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src={DottedLine}
        alt="Dotted Line"
        className="absolute left-1/2 top-[150px] md:top-[300px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src={WideRedElipse}
        alt="Wide Blue Ellipse"
        className="absolute left-1/2 top-[200px] md:top-[400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src={WideBlueElipse}
        alt="Wide Red Ellipse"
        className="absolute left-1/2 top-[1000px] md:top-[1400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      <Image
        src={WideRedElipse}
        alt="Wide Blue Ellipse"
        className="absolute left-1/2 top-[1800px] md:top-[2400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-999"
      />
      <Image
        src={Dotted2}
        alt="Dotted 2"
        className="absolute top-[1800px] md:top-[2400px] -translate-x-1/2 -translate-y-1/2 -z-10"
      />
      
      {/* Hero Section */}
      <section className="text-center font-bold mt-32 md:mt-48 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
        <span 
          className="relative inline-block rotate-[1.41deg] mb-1 md:mb-2 md:p-1"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md"></span>
          <span className="relative px-2">About KSEP</span>
        </span>
      </section>

      {/* Vision Section - Right Aligned */}
      <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16 w-screen">
        <div className="text-right mb-8 md:mb-12 ml-auto max-w-6xl pr-0 md:pr-8 lg:pr-16">
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            Our{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-md -rotate-1 my-auto py-7"></span>
              <span className="relative px-2 md:px-3">Vision</span>
            </span>
          </h2>
          <div className="flex flex-col justify-end">
            <p 
              className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-4 md:p-6 rounded-2xl text-white"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              KSEP ITB sebagai rumah pembelajaran dan pengembangan diri yang berdampak di bidang ekonomi dan pasar modal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Left Aligned */}
      <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16 w-full">
        <div className="text-left mb-8 md:mb-12 mr-auto max-w-6xl pl-0 md:pl-8 lg:pl-16">
          <h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="relative inline-block rotate-[-1.41deg]">
              <span className="relative px-2 md:px-3">Our</span>
            </span>
            <span className="relative inline-block -mx-1 rotate-[-1.41deg]">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 my-auto to-sky-800 rounded-md py-7"></span>
              <span className="relative px-2 md:px-3">Mission</span>
            </span>
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            <div 
              className="flex items-start gap-3 md:gap-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl">
                1
              </div>
              <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-3 md:p-4 rounded-2xl flex-1">
                Menjadikan KSEP sebagai rumah yang nyaman bagi anggotanya.
              </p>
            </div>

            <div 
              className="flex items-start gap-3 md:gap-4"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl">
                2
              </div>
              <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-cyan-600 to-sky-800 p-3 md:p-4 rounded-2xl flex-1">
                Memberikan dampak bagi masyarakat umum di dunia ekonomi dan pasar modal.
              </p>
            </div>

            <div 
              className="flex items-start gap-3 md:gap-4"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl">
                3
              </div>
              <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-3 md:p-4 rounded-2xl flex-1">
                Menyediakan sarana bagi anggotanya untuk belajar dan berkembang khususnya di bidang ekonomi dan pasar modal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Renaissance Section */}
      <section className="text-center font-bold mt-20 md:mt-32 lg:mt-60 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
        <span 
          className="relative inline-block -rotate-[1.41deg] mb-1 md:mb-2 md:p-1"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-md"></span>
          <span className="relative px-2">Hello! We are...</span>
        </span>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Image
            src={Renaissance}
            alt="Renaissance"
            className="mx-auto mt-8 md:mt-16 lg:mt-20 w-[80%] max-w-5xl"
          />
        </div>
      </section>
      
      {/* Team Section */}
      <section className="mt-20 md:mt-48 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="relative inline-block rotate-[1.41deg]">
              <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md py-8"></span>
              <span className="relative px-3 md:px-4">Meet Our Team</span>
            </span>
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-300 mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            The amazing people behind KSEP ITB!
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <TeamCarousel members={teamMembers}/>
        </div>
      </section>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Footer />
      </div>
    </main>
  )
}

export default Page;