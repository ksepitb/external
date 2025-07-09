import { allInsightPosts as categoryPosts } from "@/data/insights";
import { notFound } from "next/navigation";
import InsightCard from "@/components/InsightCard";
import Image from "next/image";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Footer from "@/components/Footer";

const Page = async ({ params }: { params: { category: string } }) => {
  const { category } = await params;

  const posts = categoryPosts.filter((p) => p.category === category);

  if (posts.length === 0) {
    notFound();
  }

  const title = category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <main className="pb-5 md:pb-10 isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
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
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute -bottom-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />
      <Image
        src={BlueEllipse}
        alt="Blue Ellipse"
        className="absolute bottom-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] -translate-y-[25%] scale-125 -z-10"
      />
      <div className="mx-auto relative min-h-screen flex flex-col p-10 md:p-16 lg:p-20 lg:px-32">
        <div className="mb-5 md:mb-10 text-center font-bold mt-24 md:mt-20 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="relative inline-block rotate-[-1.41deg] mb-1 md:mb-2 md:p-1">
            <span
              className={`absolute inset-0 bg-gradient-to-r ${
                category === "berita-saham"
                  ? "from-[#A7472B] to-[#8A3456]"
                  : "from-[#267FAF] to-[#093853]"
              } rounded-md`}
            ></span>
            <span className="relative px-2">
              {category
                .replace("-", " ")
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </span>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {posts.map((post) => (
            <InsightCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
