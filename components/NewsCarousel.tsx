"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { NewsPost } from "@/types";

// --- 3. Main Carousel Component ---
// Komponen ini sekarang menerima 'items' sebagai prop
const NewsCarousel = ({ items }: { items: NewsPost[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleDotClick = (index: number) => setActiveIndex(index);

  const cards = useMemo(() => {
    const N = items.length;
    return items.map((item, index) => {
      let offset = index - activeIndex;
      if (offset > N / 2) offset -= N;
      else if (offset < -N / 2) offset += N;

      const isVisible = Math.abs(offset) <= 2;
      const style: React.CSSProperties = {
        transform: `translateX(${offset * 25}%) scale(${
          1 - Math.abs(offset) * 0.15
        })`,
        opacity: isVisible ? 1 - Math.abs(offset) * 0.4 : 0,
        zIndex: N - Math.abs(offset),
        transition: "all 0.4s ease-out",
        visibility: isVisible ? "visible" : "hidden",
      };

      return (
        <div key={item.id} className="absolute w-full h-full" style={style}>
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={item.imageSrc}
              alt={item.title}
              fill
              className="object-cover"
              sizes="80vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col text-white">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 text-xs md:text-sm font-medium text-[#0C3D59] rounded-full bg-[#E3E0DB] backdrop-blur-sm">
                  {item.category
                    .replace("-", " ")
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </span>
                <span className="text-xs md:text-sm font-medium italic text-shadow-lg/50">
                  {item.date}
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="text-base sm:text-lg md:text-xl font-bold">
                  {item.title}
                </h3>
                <div className="grid lg:grid-cols-[80%_20%] items-center">
                  <p className="text-xs md:text-sm text-gray-300 mt-2 line-clamp-3">
                    {item.description}
                  </p>
                  <Link
                    href={`/insights/${item.category}/${item.slug}`}
                    className="bg-gradient-to-r from-[#E1E0DC] to-[#ACDEF9] rounded-full inline-flex items-center gap-2 mt-4 px-4 py-2 text-xs md:text-sm font-semibold w-fit text-[#0C3D59] transition-colors justify-self-end"
                  >
                    Read More <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }, [activeIndex, items]);

  if (items.length === 0) {
    return (
      <div className="text-center text-gray-400">
        Tidak ada berita untuk ditampilkan.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="relative w-full max-w-4xl h-[450px]">{cards}</div>
      <div className="relative z-10 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default NewsCarousel;
