"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Footer from "@/components/Footer";
import { GalleryPost } from "@/types";
import { allPostsData } from "@/data/gallery";

const PostModal = ({
  post,
  onClose,
  onNextPost,
  onPrevPost,
}: {
  post: GalleryPost;
  onClose: () => void;
  onNextPost: () => void;
  onPrevPost: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [post.id]);

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + post.images.length) % post.images.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNextPost();
      if (e.key === "ArrowLeft") onPrevPost();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNextPost, onPrevPost]);

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#181818] rounded-xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col lg:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full lg:w-2/3 h-1/2 lg:h-full bg-black">
          {post.images.map((src, index) => (
            <Image
              key={`${src}-${index}`}
              src={src}
              alt={`${post.title} - Image ${index + 1}`}
              fill
              className={`object-contain transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          ))}
          {post.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition"
              >
                <ChevronRight />
              </button>
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1} / {post.images.length}
              </div>
            </>
          )}
        </div>

        <div className="w-full lg:w-1/3 h-1/2 lg:h-full flex flex-col p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p className="mt-4 text-gray-300 text-sm whitespace-pre-wrap">
            {post.description}
          </p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/75 transition"
      >
        <X />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevPost();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition hidden lg:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNextPost();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/75 transition hidden lg:block"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

const page = () => {
  const ITEMS_PER_LOAD = 4;

  const [displayedPosts, setDisplayedPosts] = useState<GalleryPost[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [activePostIndex, setActivePostIndex] = useState<number | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  const loadMorePosts = useCallback(() => {
    // Guard to prevent multiple simultaneous loads
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    setTimeout(() => {
      const nextPosts = allPostsData.slice(offset, offset + ITEMS_PER_LOAD);

      if (nextPosts.length > 0) {
        setDisplayedPosts((prev) => [...prev, ...nextPosts]);
        const newOffset = offset + ITEMS_PER_LOAD;
        setOffset(newOffset);

        // Check if we've reached the end AFTER this load.
        if (newOffset >= allPostsData.length) {
          setHasMore(false);
        }
      } else {
        // If we fetched no items, it means we're at the end.
        setHasMore(false);
      }

      setIsLoading(false);
    }, 500);
  }, [offset, isLoading, hasMore]);

  const sentinelRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore, loadMorePosts]
  );

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const initialPosts = allPostsData.slice(0, ITEMS_PER_LOAD);
      setDisplayedPosts(initialPosts);
      setOffset(ITEMS_PER_LOAD);
      if (initialPosts.length >= allPostsData.length) {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = (post: GalleryPost) => {
    const postIndex = allPostsData.findIndex((p) => p.id === post.id);
    if (postIndex !== -1) {
      setActivePostIndex(postIndex);
    }
  };
  const handleCloseModal = () => {
    setActivePostIndex(null);
  };
  const handleNextPost = () => {
    if (activePostIndex !== null) {
      setActivePostIndex(
        (prev) => ((prev as number) + 1) % allPostsData.length
      );
    }
  };
  const handlePrevPost = () => {
    if (activePostIndex !== null) {
      setActivePostIndex(
        (prev) =>
          ((prev as number) - 1 + allPostsData.length) % allPostsData.length
      );
    }
  };

  return (
    <div className="pb-5 md:pb-10 isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
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

      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute top-1/2 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[45%] -translate-y-[15%] scale-125 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute top-1/3 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[45%] -translate-y-[15%] scale-125 -z-10"
      />

      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute bottom-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] translate-y-[25%] scale-125 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] translate-y-[25%] scale-125 -z-10"
      />

      <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
        <div className="text-center font-bold mt-24 md:mt-20 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1">
            <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md"></span>
            <span className="relative px-2">Gallery</span>
          </span>{" "}
          of
          <br /> KSEP ITB
        </div>

        <div className="mt-5 md:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {displayedPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square cursor-pointer group"
              onClick={() => handleOpenModal(post)}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(255,_255,_255,_0)_0%,_rgba(0,_0,_0,_0.50)_100%)] rounded-md z-10 opacity-100"></div>
              <div className="z-20 absolute bottom-0 left-0 p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-white drop-shadow-lg">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={sentinelRef}
          className="h-20 flex justify-center items-center"
        >
          {/* FIX: Conditional rendering to show only one state at a time */}
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : !hasMore && displayedPosts.length > 0 ? (
            <p className="text-gray-500"></p>
          ) : null}
        </div>
      </div>

      {activePostIndex !== null && (
        <PostModal
          post={allPostsData[activePostIndex]}
          onClose={handleCloseModal}
          onNextPost={handleNextPost}
          onPrevPost={handlePrevPost}
        />
      )}
      <Footer />
    </div>
  );
};

export default page;
