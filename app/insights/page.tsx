import NewsCarousel from "@/components/NewsCarousel";
import InsightCard from "@/components/InsightCard";
import Link from "next/link";
import { allInsightPosts } from "@/data/insights";
import { NewsPost } from "@/types";
import Image from "next/image";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Arrow from "@/public/arrow.svg";
import Chart from "@/public/chart.svg";
import Footer from "@/components/Footer";
const newsPosts = allInsightPosts.filter(
  (post): post is NewsPost => post.category !== "market-review"
);
const sahamPosts = newsPosts
  .filter((p) => p.category === "berita-saham")
  .sort((a, b) => b.id - a.id)
  .slice(0, 5);
const makroPosts = newsPosts
  .filter((p) => p.category === "berita-makroekonomi")
  .sort((a, b) => b.id - a.id)
  .slice(0, 5);
const reviewPosts = allInsightPosts.filter(
  (p) => p.category === "market-review"
);

const featuredItems = [
  newsPosts[0],
  newsPosts[1],
  newsPosts[2],
  newsPosts[3],
  newsPosts[4],
].filter(Boolean);
const page = () => {
  return (
    <div className="pb-5 md:pb-10 isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
      <Image
        src={Arrow}
        alt="Blue Ellipse"
        className="absolute top-[2%] left-0 w-full -z-10"
      />
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute top-[5%] left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[40%]  md:-translate-y-[15%] scale-125 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute top-[5%] right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[40%] md:-translate-y-[15%] scale-125 -z-10"
      />

      <section className="relative">
        <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
          <div className="mb-5 md:mb-10 text-center font-bold mt-24 md:mt-20 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            KSEP{" "}
            <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1">
              <span className="absolute inset-0 bg-gradient-to-r from-[#267FAF] to-[#093853] rounded-md"></span>
              <span className="relative px-2">News</span>
            </span>
          </div>
          <NewsCarousel items={featuredItems} />
        </div>
      </section>

      <section className="relative">
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute md:hidden top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-150 -z-10"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute top-1/3 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[15%] scale-150 -z-10"
        />
        <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-5 py-2 rounded-full bg-gradient-to-r from-[#A6462A] to-[#8B3456] inset-shadow-sm inset-shadow-black">
              Berita Saham
            </h2>
            <Link
              href="/insights/berita-saham"
              className="text-xs smd:text-sm font-light rounded-full px-5 py-2 border-[1px] hover:bg-white/10 transition-colors"
            >
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sahamPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute top-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-150 -z-10"
        />
        <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold px-5 py-2 rounded-full bg-gradient-to-r from-[#267FAF] to-[#093853] inset-shadow-sm inset-shadow-black">
              Berita Makroekonomi
            </h2>
            <Link
              href="/insights/berita-makroekonomi"
              className="text-xs smd:text-sm font-light rounded-full px-5 py-2 border-[1px] hover:bg-white/10 transition-colors"
            >
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {makroPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <Image
          src={Chart}
          alt="Blue Ellipse"
          className="absolute top-[2%] left-0 w-full -z-10"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute top-[5%] left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute top-[5%] right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <Image
          src={RedEllipse}
          alt="Red Ellipse"
          className="absolute top-[90%] left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <Image
          src={BlueEllipse}
          alt="Blue Ellipse"
          className="absolute top-[90%] right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[15%] scale-125 -z-10"
        />
        <div className="flex flex-col justify-center p-10 md:p-16 lg:p-20 lg:px-32">
          <div className="text-center font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Market
            <br />
            <span className="block -mt-2 ml-5 md:ml-10 lg:ml-16 lg:-mt-3">
              <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1">
                <span className="absolute inset-0 bg-gradient-to-r from-[#267FAF] to-[#093853] rounded-md"></span>
                <span className="relative px-2">Review</span>
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {reviewPosts.map((post) => (
              <InsightCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
