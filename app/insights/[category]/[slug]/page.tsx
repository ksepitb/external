import { allInsightPosts as detailPosts } from "@/data/insights";
import { notFound } from "next/navigation";
import Image from "next/image";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";
import Footer from "@/components/Footer";
const page = ({ params }: { params: { category: string; slug: string } }) => {
  const { category, slug } = params;

  const post = detailPosts.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!post) {
    notFound();
  }

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
        <header className="mt-20 mb-8 text-center">
          <p className="text-[#0C3D59] bg-[#E3E0DB] rounded-full px-5 py-2 w-fit mx-auto text-xs md:text-sm font-semibold mt-3 md:mb-5">
            {post.category
              .replace("-", " ")
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            {post.title}
          </h1>
          {post.category !== "market-review" && (
            <p className="text-xs md:text-sm text-gray-400 mt-4">{post.date}</p>
          )}
        </header>

        {post.category === "market-review" ? (
          <div className="aspect-[4/5] w-full mb-20">
            <iframe
              src={post.pdfEmbedLink}
              className="w-full h-full border-0 rounded-lg"
              allow="encrypted-media"
              title={`Market Review: ${post.title}`}
            ></iframe>
          </div>
        ) : (
          <article>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="prose prose-invert text-sm md:text-base max-w-none mb-20">
              <p>{post.body}</p>
            </div>
          </article>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default page;
