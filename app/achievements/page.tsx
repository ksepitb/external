"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { FunnelIcon } from "@heroicons/react/24/solid";

import Footer from "@/components/Footer";
import CompetitionCard from "@/components/CompetitionCard";
import { achievementsData } from "@/data/competition";
import { CompetitionData } from "@/types";
import Image from "next/image";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Confetti1 from "@/public/confetti.svg";
import Confetti2 from "@/public/confetti-2.svg";
import Confetti3 from "@/public/confetti-3.svg";
import Confetti4 from "@/public/confetti-4.svg";

const AchievementsPage = () => {
  const ITEMS_PER_LOAD = 4;

  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState<CompetitionData[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const carouselRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const observer = useRef<IntersectionObserver | null>(null);
  const filteredMasterList =
    selectedYear === "all"
      ? achievementsData
      : achievementsData.filter((comp) => comp.year === selectedYear);

  const loadMoreItems = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const nextItems = filteredMasterList.slice(
        offset,
        offset + ITEMS_PER_LOAD
      );
      if (nextItems.length > 0) {
        setDisplayedItems((prev) => [...prev, ...nextItems]);
        setOffset((prev) => prev + ITEMS_PER_LOAD);
      }
      if (offset + ITEMS_PER_LOAD >= filteredMasterList.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 500); // 0.5 second delay
  }, [offset, filteredMasterList]);

  // --- Sentinel for Intersection Observer ---
  const sentinelRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMoreItems]
  );

  useEffect(() => {
    setIsLoading(true);
    setHasMore(true);
    const initialItems = filteredMasterList.slice(0, ITEMS_PER_LOAD);
    setDisplayedItems(initialItems);
    setOffset(ITEMS_PER_LOAD);
    if (initialItems.length < ITEMS_PER_LOAD) {
      setHasMore(false);
    }
    setIsLoading(false);
  }, [selectedYear]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const groupedCompetitions = displayedItems.reduce<
    Record<number, CompetitionData[]>
  >((acc, comp) => {
    const year = comp.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(comp);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedCompetitions)
    .map(Number)
    .sort((a, b) => b - a);
  const allAvailableYears = [
    ...new Set(achievementsData.map((c) => c.year)),
  ].sort((a, b) => b - a);

  const handleScroll = (year: number, direction: "left" | "right") => {
    const carousel = carouselRefs.current[year];
    if (carousel) {
      const scrollAmount = carousel.clientWidth * 0.9;
      carousel.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="pb-5 md:pb-10 isolate relative w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-x-hidden">
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute top-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />
      <Image
        src={Confetti2}
        alt="Confetti"
        className="absolute top-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[30%] -translate-y-[25%] scale-50 -z-10"
      />
      <Image
        src={Confetti1}
        alt="Confetti"
        className="absolute top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[30%] -translate-y-[25%] scale-50 -z-10"
      />
      <Image
        src={Confetti3}
        alt="Confetti"
        className="absolute top-1/3 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[30%] -translate-y-[25%] scale-50 -z-10"
      />
      <Image
        src={Confetti4}
        alt="Confetti"
        className="absolute top-1/2 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[30%] -translate-y-[25%] scale-50 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute top-1/4 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] scale-125 -z-10"
      />

      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute top-1/3 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] scale-125 -z-10"
      />

      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />

      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute bottom-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />
      <section className="relative min-h-screen flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
        <div className="text-center font-bold mt-24 md:mt-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md"></span>
            <span className="relative px-2">KSEP ITB's</span>
          </span>

          <span className="block -mt-5 sm:-mt-6 md:-mt-7 lg:-mt-10">
            Achi
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
              evem
            </span>
            ents
          </span>
        </div>
        <div className="w-full text-white mt-10">
          <div className="mx-auto">
            <div className="flex justify-end items-center mb-8">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="text-xs md:text-sm flex items-center gap-2 px-4 rounded-full py-2 border-[1px] hover:bg-white/10 border-white transition-colors"
                >
                  <span className="font-light flex gap-3 items-center">
                    <FunnelIcon className="w-3 h-3 md:w-5 md:h-5" />
                    {selectedYear === "all" ? "All Years" : selectedYear}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute text-xs md:text-sm right-0 mt-2 bg-[#060911] w-48 border border-white/20 rounded-lg shadow-lg z-10">
                    <ul className="p-2">
                      <li
                        onClick={() => {
                          setSelectedYear("all");
                          setDropdownOpen(false);
                        }}
                        className="px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer"
                      >
                        All
                      </li>
                      {allAvailableYears.map((year) => (
                        <li
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            setDropdownOpen(false);
                          }}
                          className="px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer"
                        >
                          {year}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-16">
              {sortedYears.map((year) => (
                <section key={year} className="relative">
                  <h1 className="text-4xl md:text-5xl font-bold mb-8">
                    <span className="relative inline-block rotate-[-1.51deg] md:p-1">
                      <span className="absolute inset-0 bg-gradient-to-r from-[#2680B0] to-[#07507A] rounded-md"></span>
                      <span className="relative px-2">{year}</span>
                    </span>
                  </h1>
                  <div
                    ref={(el) => {
                      carouselRefs.current[year] = el;
                    }}
                    className="lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 flex gap-4 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0 snap-x snap-mandatory no-scrollbar"
                  >
                    {groupedCompetitions[year].map((item, index) => {
                      const style: "blue" | "red" =
                        index % 2 === 0 ? "blue" : "red";
                      const cardDataWithStyle = { ...item, style };
                      return (
                        <div
                          key={item.id}
                          className="w-[70vw] max-w-xs lg:w-full flex-shrink-0 snap-start"
                        >
                          <CompetitionCard data={cardDataWithStyle} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="lg:hidden absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 pointer-events-none">
                    <button
                      onClick={() => handleScroll(year, "left")}
                      className="pointer-events-auto bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={() => handleScroll(year, "right")}
                      className="pointer-events-auto bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </section>
              ))}
            </div>

            <div
              ref={sentinelRef}
              className="h-10 flex justify-center items-center"
            >
              {isLoading && <Loader2 className="animate-spin" />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default AchievementsPage;
