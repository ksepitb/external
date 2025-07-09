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
              // Tampilkan iframe untuk Market Review
              <iframe
                src={`${post.pdfEmbedLink}#toolbar=0&navpanes=0`}
                className="w-full h-full border-0"
                title={`Preview of ${post.title}`}
                style={{ pointerEvents: "none" }}
              ></iframe>
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
