import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { newsData, documentData } from "@/data/home";

const NewsDocument = () => {
  return (
    <div
      className="w-full mt-8 md:mt-12 flex items-center justify-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="w-full max-w-8xl grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* --- News Card --- */}
        <div className="flex flex-col bg-gradient-to-bl from-[#2680B0] to-[#093752] rounded-xl md:rounded-3xl outline-1 outline-offset-[-1.18px] outline-white/20 text-white p-4 md:p-6 gap-4">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-[#E3E0DB] text-[#0C3D59]">
              {newsData.category}
            </span>
            <span className="text-xs md:text-sm font-medium italic">
              {newsData.date}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-grow">
            <div className="relative w-full sm:w-2/5 h-40 sm:h-auto flex-shrink-0">
              <Image
                src={newsData.imageSrc}
                alt={newsData.title}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="leading-5 sm:leading-6 md:leading-7 sm:text-lg md:text-xl font-bold mb-2">
                {newsData.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-4 lg:leading-5 flex-grow line-clamp-3">
                {newsData.description}
              </p>
              <div className="mt-4 text-right">
                <Link
                  href={newsData.link}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-transform hover:scale-105 text-[#0C3D59] bg-gradient-to-r from-[#E1E0DC] to-[#ACDEF9]"
                >
                  Read More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* --- Document Card --- */}
        <div className="flex flex-col bg-gradient-to-bl from-[#A6462A] to-[#8B3456] rounded-xl md:rounded-3xl outline-1 outline-offset-[-1.18px] outline-white/20 text-white p-4 md:p-6 gap-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-grow">
            <div className="relative w-full sm:w-2/5 h-40 sm:h-auto flex-shrink-0">
              <Image
                src={documentData.imageSrc}
                alt={documentData.title}
                fill
                sizes="(max-width: 640px) 100vw, 40vw"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <span className="px-3 py-1 mb-3 text-xs md:text-sm font-medium rounded-full bg-white/10 text-white self-start">
                {documentData.category}
              </span>
              <h3 className="leading-5 sm:leading-6 md:leading-7 sm:text-lg md:text-xl font-bold mb-2 flex-grow">
                {documentData.title}
              </h3>
              <div className="mt-4 text-left">
                <Link
                  href={documentData.link}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-transform hover:scale-105 text-[#4A1D2E] bg-gradient-to-r from-[#E1E0DC] to-[#F9ACAC]"
                >
                  See Document
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDocument;
