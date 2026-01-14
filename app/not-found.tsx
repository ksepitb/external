import Link from "next/link";
import Image from "next/image";
import BlueEllipse from "@/public/blue-ellipse.svg";
import RedEllipse from "@/public/red-ellipse.svg";

export default function NotFound() {
  return (
    <main className="isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden flex items-center justify-center">
      {/* Background Elements */}
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
        className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] translate-x-[35%] translate-y-[25%] scale-125 -z-10"
      />
      <Image
        src={RedEllipse}
        alt="Red Ellipse"
        className="absolute bottom-0 left-0 w-[450px] h-[450px] md:w-[700px] md:h-[700px] -translate-x-[35%] translate-y-[25%] scale-125 -z-10"
      />

      {/* Content */}
      <div className="text-center px-6">
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-[#A7472B] to-[#257CAC] bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mt-4 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#A7472B] to-[#8A3456] hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
