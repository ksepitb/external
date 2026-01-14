import React from "react";
import Image from "next/image";
import Link from "next/link";
import { InsightPost, NewsPost, MarketReviewPost } from "@/types"; // Sesuaikan path

const InsightCard = ({ post }: { post: InsightPost }) => {
  // Logika untuk menentukan gaya berdasarkan kategori
  const cardStyles = {
    "berita-saham": {
      bg: "bg-gradient-to-br from-[#151515]/0 to-[#A6472D] rounded-2xl outline-1 outline-white/20 backdrop-blur-xl",
      button:
        "text-[#70302A] bg-gradient-to-r from-[#FFDDDA] to-[#9F6F6B] shadow-[0px_0px_9.800000190734863px_0px_rgba(255,255,255,0.40)]",
      buttonText: "Read News",
    },
    "berita-makroekonomi": {
      bg: "bg-gradient-to-br from-[#151515]/0 to-[#257CAC] rounded-2xl outline-1 outline-white/20 backdrop-blur-xl",
      button:
        "text-[#223951] bg-gradient-to-r from-[#EEF6FF] to-[#8098B2] shadow-[0px_0px_9.800000190734863px_0px_rgba(255,255,255,0.40)]",
      buttonText: "Read News",
    },
    "market-review": {
      bg: "bg-gradient-to-br from-[#151515]/0 to-[#606060] rounded-2xl outline-1 outline-white/20 backdrop-blur-xl",
      button:
        "text-[#121212] bg-gradient-to-r from-[#EEF6FF] to-[#D6D6D6] shadow-[0px_0px_9.800000190734863px_0px_rgba(255,255,255,0.40)]",
      buttonText: "See Document",
    },
  };

  const styles = cardStyles[post.category];
  const isReview = post.category === "market-review";

  return (
    <Link
      href={`/insights/${post.category}/${post.slug}`}
      className="block group h-full"
    >
      <div className={`rounded-2xl h-full ${styles.bg}`}>
        <div className="relative flex flex-col p-4 h-full rounded-xl">
          {/* FIX: Conditional rendering for Image vs PDF Preview */}
          <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
            {isReview ? (
              // Show static cover image for Market Review to prevent mobile crashes
              <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              // Tampilkan Image untuk Berita
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
          </div>

          <div className="flex flex-col flex-grow">
            <h3 className="font-bold md:text-lg mb-2 leading-5 md:leading-6 text-white">
              {post.title}
            </h3>
            <p className="text-xs flex-grow line-clamp-3 text-white">
              {post.description}
            </p>

            <div
              className={`flex mt-4 ${
                isReview ? "justify-end" : "justify-between items-end"
              }`}
            >
              {!isReview && (
                <span className="text-xs text-white font-medium italic">
                  {post.date}
                </span>
              )}
              <div
                className={`text-center px-4 py-2 text-xs font-bold rounded-full transition-transform group-hover:scale-105 ${styles.button}`}
              >
                {styles.buttonText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InsightCard;
