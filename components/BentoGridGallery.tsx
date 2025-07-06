"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridItem } from "@/types";
import { gridItems } from "@/data/home";

const BentoGridItem = ({
  item,
  className = "",
  isActive,
  onClick,
}: {
  item: GridItem;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`group relative h-full w-full rounded-2xl overflow-hidden cursor-pointer ${className}`}
      onClick={onClick}
    >
      <Image
        src={item.imgSrc}
        alt={item.title || "Gallery Image"}
        width={800}
        height={800}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
          isActive ? "scale-105" : "md:group-hover:scale-105"
        }`}
      />

      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
          item.gradient
        } ${isActive ? "opacity-90" : "opacity-70 md:group-hover:opacity-80"}`}
      />

      <div
        className={`absolute bottom-0 left-0 p-4 text-white transition-opacity duration-300 md:opacity-0 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="text-xs font-semibold">Click me</span>
        <h3 className="md:text-lg font-bold leading-4">{item.title}</h3>
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
        }`}
      >
        <h3 className="leading-4 text-base sm:text-xl md:text-2xl font-bold">
          {item.title}
        </h3>
        <p className="mt-2 text-xs md:text-sm leading-tight">
          {item.description}
        </p>
        <Link
          href={item.href}
          className="mt-4 self-start rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-5 py-2 text-xs md:text-sm font-semibold transition-transform hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

const BentoGridGallery = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="p-4 md:p-8" data-aos="fade-up" data-aos-duration="3000">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2 md:gap-4 max-w-7xl mx-auto">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            item={item}
            className={item.className}
            isActive={activeId === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoGridGallery;
