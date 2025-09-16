"use client";
import { useState, useEffect, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  src: StaticImageData;
  alt: string;
  name: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

const TeamCarousel = ({ members }: TeamCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % members.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + members.length) % members.length);
  const handleDotClick = (index: number) => setActiveIndex(index);

  const cards = useMemo(() => {
    const N = members.length;
    return members.map((member, index) => {
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
        <div key={index} className="absolute w-full h-full" style={style}>
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src={member.src}
              alt={member.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 70vw, 60vw"
              priority={index === 0}
            />
          </div>
        </div>
      );
    });
  }, [activeIndex, members]);

  if (!members || members.length === 0) {
    return (
      <div className="text-center text-gray-400">
        No team members available
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/5]">{cards}</div>
      <div className="relative z-10 flex items-center gap-4">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {members.map((_, index) => (
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

export default TeamCarousel;