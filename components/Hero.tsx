import Image from "next/image";
import MainLogo from "@/public/main-logo-ksep.svg";
import Icon from "@/public/element.png";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import BP from "@/public/bp.svg";
import DottedLine from "@/public/dotted-line1.svg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Icon2 from "@/public/element2.png";
import NewsDocument from "./NewsDocument";
import Leaderboard from "./Leaderboard";
import Dotted from "@/public/dotted.svg";
import Dotted2 from "@/public/dotted-2.svg";
import Arrow from "@/public/arrow.svg";
import Trophy from "@/public/trophy.svg";
import Footer from "./Footer";
import BentoGridGallery from "./BentoGridGallery";

const Hero = () => {
  return (
    <main className="pb-5 md:pb-10 isolate relative w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
      {/* HERO SECTION WRAPPER */}
      <section className="relative min-h-screen flex items-center justify-center p-10 md:p-16 lg:p-20 lg:px-32 overflow-hidden">
        {/* Blue Ellipse stays positioned relative to the hero section */}
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute top-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[25%] -z-10"
        />

        {/* Hero content grid */}
        <div className="grid md:grid-cols-[70%_30%] items-center justify-center w-full">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h2 className="font-bold text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="relative inline-block">
                <Image
                  src={Icon}
                  alt="Icon"
                  className="absolute -top-7 md:-top-12 -left-4 w-10 md:w-16"
                />
                Kelompok Studi
              </span>
              <span> </span>
              <span className="relative inline-block rotate-[-2.59deg] mb-2 md:mb-3 md:p-1">
                <span className="absolute inset-0 bg-gradient-to-r from-[#8A3456] to-[#A7472B] rounded-md"></span>
                <span className="relative px-2">Ekonomi</span>
              </span>
              <br />
              <span>dan </span>
              <span className="relative inline-block rotate-[2.2deg] md:p-1">
                <span className="absolute inset-0 bg-gradient-to-r from-[#2680B0] to-[#07507A] rounded-md"></span>
                <span className="relative px-2">Pasar Modal</span>
              </span>
            </h2>
            <p className="text-[#D5D5D5] md:w-[80%] lg:w-[70%] xl:w-[60%] lg:leading-5 text-center md:text-left mt-8 text-xs md:text-sm lg:text-base">
              KSEP ITB is a campus-based student-led organisation found in 22
              November 1997 that aimed to be the leading platform to develop
              economics & stock market knowledge in ITB.
            </p>
          </div>
          <Image
            src={MainLogo}
            alt="Logo"
            className="order-1 md:order-2 scale-75 md:scale-125 mx-auto"
            data-aos="fade-left"
          />
        </div>
      </section>

      {/* Red Ellipse is now a direct child of <main> and positioned between sections */}
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute top-[100vh] right-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] -translate-y-3/4 translate-x-[30%] -z-10 scale-200"
      />

      <section className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
        <div
          className="relative inline-block text-white mx-auto"
          data-aos="zoom-in"
        >
          <div className="shadow-xl/30 absolute -top-5 -left-10 sm:-top-6 sm:-left-10 md:-top-8 md:-left-10 lg:-top-8 lg:-left-20 -rotate-[1.92deg] bg-gradient-to-r from-[#2680B0] to-[#07507A] text-xl sm:text-2xl md:text-3xl lg:text-4xl px-2 md:px-3 md:py-1 rounded-md font-bold z-10">
            Hello! We Are
          </div>
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
            BP Renaissance
          </h1>
          <div className="absolute right-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl -bottom-6 sm:-bottom-8 md:-bottom-10 font-bold text-white">
            2025/2026
          </div>
        </div>
        <div className="relative">
          <Image
            src={BP}
            alt="Logo"
            className="mx-auto mt-10 md:mt-20 relative"
          />
          <Image
            src={DottedLine}
            alt="Logo"
            className="absolute -z-10 w-full left-0 top-[25%] md:top-[20%] scale-[130%]"
          />
        </div>
        <div className="mx-auto p-[1px] md:p-[2px] rounded-full bg-gradient-to-r from-[#DC203F] to-[#FF7D46] mt-6">
          <Link
            href="/infest"
            className="flex items-center text-sm sm:text-base md:text-xl gap-3 bg-[#303030] text-white rounded-full transition-all duration-300 hover:scale-[110%] hover:bg-gradient-to-r from-[#DC203F] to-[#FF7D46] hover:text-[#060911] py-2 md:py-3 pl-5 md:pl-9 pr-3 md:pr-6 inset-shadow-sm inset-shadow-black"
          >
            See More <ChevronRight className="w-4 md:w-8" />
          </Link>
        </div>
      </section>

      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute left-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] -translate-y-1/2 md:-translate-y-3/4 -translate-x-[30%] -z-10 scale-150 md:scale-200"
      />
      <Image
        src={Dotted}
        alt="Dotted"
        className="absolute right-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] translate-x-[40%] -translate-y-3/4 -z-10 scale-75 opacity-50"
      />
      <Image
        src={Dotted2}
        alt="Dotted"
        className="absolute left-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] -translate-x-[40%] -translate-y-1/3 -z-10 scale-75 opacity-50"
      />

      <section className="relative flex flex-col px-5 py-20 lg:px-10 lg:py-32">
        <h2
          className="mx-auto font-bold text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          data-aos="zoom-out-up"
        >
          <span className="relative inline-block">Recent</span>
          <span> </span>
          <span className="relative inline-block rotate-[-2.59deg] mb-2 md:mb-3 md:p-1">
            <Image
              src={Icon2}
              alt="Icon"
              className="absolute -right-5 -top-6 sm:-right-6 sm:-top-7 md:-top-12 md:-right-10 w-8 sm:w-10 md:w-16"
            />
            <span className="absolute inset-0 bg-gradient-to-r from-[#8A3456] to-[#A7472B] rounded-md"></span>
            <span className="relative px-2">Activities</span>
          </span>
        </h2>
        <BentoGridGallery />
      </section>
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute right-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] translate-x-[40%] -translate-y-3/4 -z-10 md:scale-125"
      />
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute left-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] -translate-x-[40%] -translate-y-1/3 -z-10 scale-125"
      />
      <section className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
        <Image
          src={Arrow}
          alt="Arrow"
          className="absolute -translate-y-1/12 top-0 right-0 w-full -z-10"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute left-0 top-0 -translate-x-[40%]  w-full -z-10 scale-75"
        />
        <Image
          src={BlueEllipse}
          alt="Red Ellipse"
          className="absolute block md:hidden right-0 top-1/3 translate-x-[40%]  w-full -z-10 scale-125"
        />
        <div
          className="relative inline-block mx-auto font-bold text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          data-aos="flip-down"
        >
          <span className="absolute right-0 md:right-10 rotate-[-2.45deg] top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-3xl md:text-7xl lg:text-7xl [text-shadow:_0px_0px_31px_rgb(0_0_0_/_0.90)] font-bold">
            &
          </span>
          <span className="relative inline-block rotate-[-2.54deg] mb-1 md:mb-2 md:p-1">
            <span className="absolute inset-0 bg-gradient-to-r from-[#07507A] to-[#2680B0] rounded-md"></span>
            <span className="relative px-2">KSEP News</span>
          </span>
          <br />
          <span className="relative inline-block rotate-[1.99deg] md:p-1">
            <span className="absolute inset-0 bg-gradient-to-r from-[#8A3456] to-[#A7472B]  rounded-md"></span>
            <span className="relative px-2">Market Recap</span>
          </span>
        </div>
        <NewsDocument />
      </section>

      <section className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
        <Image
          src={Trophy}
          alt="Trophy"
          className="absolute left-0 top-0 -translate-x-[40%] -translate-y-1/4 w-full -z-10 md:scale-50"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute right-0 translate-x-[40%] -translate-y-1/3 w-full -z-10 scale-125"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute block md:hidden left-0 -translate-x-[40%] translate-y-1/3 w-full -z-10 scale-125"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute block md:hidden left-0 -translate-x-[40%] bottom-0 w-full -z-10 scale-125"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute block md:hidden right-0 translate-x-[40%] translate-y-3/4 w-full -z-10 scale-125"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute block md:hidden right-0 translate-x-[40%] -translate-y-1/3 w-full -z-10 scale-125"
        />
        <div
          className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          data-aos="zoom-out-down"
        >
          Our
          <br />
          <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="absolute inset-0 bg-gradient-to-r from-[#A6472C] to-[#2680B0] rounded-md"></span>
            <span className="relative px-2">Achievements</span>
          </span>
        </div>
        <Leaderboard />
      </section>

      <Footer />
    </main>
  );
};

export default Hero;
