"use client";

import Image from "next/image";
import Icon from "@/public/element2.png";
import Link from "next/link";
import { Share } from "lucide-react";
import DottedLine from "@/public/dotted-line2.svg";
import { mediaData, externalEvents, operationalEvents } from "@/data/events";
import EventCard from "@/components/EventCard";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DepartmentEvent } from "@/types";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Footer from "@/components/Footer";
import Dotted from "@/public/dotted.svg";
import Dotted2 from "@/public/dotted-2.svg";

const DepartmentSection = ({
  title,
  events,
  titleBgClass,
}: {
  title: string;
  events: DepartmentEvent[];
  titleBgClass: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.85;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative">
      {/* Department Title */}
      <div className="flex justify-center mb-6">
        <h2
          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 md:px-7 py-1 md:py-2 rounded-full ${titleBgClass}`}
        >
          {title}
        </h2>
      </div>

      {/* Carousel/List Container */}
      <div
        ref={carouselRef}
        className="
          lg:flex lg:flex-col lg:gap-4
          flex gap-4 overflow-x-auto pb-4
          lg:overflow-visible lg:pb-0
          snap-x snap-mandatory
          no-scrollbar
        "
      >
        {events.map((event) => (
          // This wrapper div controls the card's size in the carousel
          <div
            key={event.id}
            className="w-[65vw] lg:w-full flex-shrink-0 snap-center"
          >
            <EventCard event={event} />
          </div>
        ))}
      </div>

      {/* Arrow Buttons - only visible on screens smaller than lg */}
      <div className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
        <button
          onClick={() => handleScroll("left")}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="pointer-events-auto bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="isolate relative w-full bg-gradient-to-b from-[#060911] to-[#232630] text-white overflow-hidden">
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute top-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <div className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
          <div className="text-center font-bold mt-24 md:mt-20 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1">
              <Image
                src={Icon}
                alt="Icon"
                className="absolute -right-5 -top-6 sm:-right-6 sm:-top-7 md:-top-12 md:-right-10 w-8 sm:w-10 md:w-16"
              />
              <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md"></span>
              <span className="relative px-2">Events</span>
            </span>{" "}
            <br /> in KSEP ITB
          </div>

          <p className="mx-auto mb-5 mt-20 rounded-full font-bold bg-gradient-to-r from-[#267FAF] to-[#093853] w-fit px-4 md:px-7 py-1 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            KSEP Podcast
          </p>

          <div className="relative mt-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full hidden w-full lg:flex items-center justify-center">
              <Image
                src={DottedLine}
                alt="Decorative divider"
                className="h-[90%]"
                aria-hidden="true"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="px-4 md:p-8 text-xs md:text-sm">
                <p className="mb-2">Latest from YouTube</p>
                <Link
                  href="https://www.youtube.com/@ksepitb"
                  target="_blank"
                  className="hover:bg-white hover:from-white hover:scale-105 hover:to-white hover:text-[#AF2626] duration-300 transition-all font-bold items-center flex gap-3 text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-[#AF2626] to-[#531212] w-fit rounded-full py-2 px-5 "
                >
                  Visit Our Channel <Share className="w-3 h-3 md:w-4 md:h-4" />
                </Link>

                <div className="aspect-video w-full mt-2 md:mt-5">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={mediaData[0].src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="px-4 md:p-8 text-xs md:text-sm">
                <p className="mb-2">Latest from Spotify</p>
                <Link
                  href="https://open.spotify.com/show/7LBV7LvpMF0eFeu22FqgNJ?si=552049c3d10144a1"
                  target="_blank"
                  className="hover:bg-white hover:from-white hover:scale-105 hover:to-white hover:text-[#235312] duration-300 transition-all font-bold items-center flex gap-3 text-sm sm:text-base md:text-lg lg:text-xl bg-gradient-to-r from-[#1DB954] to-[#235312] w-fit rounded-full py-2 px-5 "
                >
                  Visit Our Spotify <Share className="w-3 h-3 md:w-4 md:h-4" />
                </Link>

                <div className="mt-2 md:mt-5">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src={mediaData[1].src}
                    width="100%"
                    height="300"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={Dotted}
        alt="Dotted"
        className="absolute right-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] translate-x-[40%] -translate-y-1/2 z-10 scale-[65%] opacity-50"
      />
      <div className="isolate relative w-full bg-gradient-to-b from-[#232630] to-[#8B3553] text-white overflow-hidden">
        <div className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
          <DepartmentSection
            title="External"
            events={externalEvents}
            titleBgClass="bg-gradient-to-r from-[#A6462A] to-[#8B3456]"
          />
        </div>
      </div>
      <Image
        src={Dotted2}
        alt="Dotted"
        className="absolute left-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] -translate-x-[40%] -translate-y-1/3 z-10 scale-[65%] opacity-50"
      />
      <div className="pb-5 md:pb-10 isolate relative w-full bg-gradient-to-b from-[#8B3553] to-[#0A3B56] text-white overflow-hidden">
        <div className="relative flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
          <DepartmentSection
            title="Operational Handsome"
            events={operationalEvents}
            titleBgClass="bg-gradient-to-r from-[#2680B0] to-[#093752]"
          />
        </div>
        <Footer />
      </div>
      <Image
        src={Dotted}
        alt="Dotted"
        className="absolute right-0 w-[450px] h-[450px] md:w-[800px] md:h-[800px] translate-x-[40%] -translate-y-3/4 z-10 scale-[65%] opacity-50"
      />
    </main>
  );
};

export default page;
