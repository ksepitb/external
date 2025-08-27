import Stroke from "@/public/stroke.svg";
import Image from "next/image";
import DottedLine from "@/public/dotted-line3.svg";
import WideBlueElipse from "@/public/wide-blue-elipse.svg";
import WideRedElipse from "@/public/wide-red-elipse.svg";
import Placeholder from "@/public/placeholder.svg";
import Renaissance from "@/public/renaissance.svg";

const Page = () => {
    return (
      <main className="pb-5 md:pb-10 isolate relative min-h-screen w-full bg-gradient-to-bl from-[#060911] to-[#232630] text-white overflow-hidden">
        <Image
          src={Stroke}
          alt="Stroke"
          className="absolute left-1/2 top-[150px] md:top-[300px] lg:top-[400px] w-[1200px] lg:w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        <Image
          src={DottedLine}
          alt="Dotted Line"
          className="absolute left-1/2 top-[150px] md:top-[300px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        <Image
          src={WideBlueElipse}
          alt="Wide Blue Ellipse"
          className="absolute left-1/2 top-[200px] md:top-[400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        <Image
          src={WideRedElipse}
          alt="Wide Red Ellipse"
          className="absolute left-1/2 top-[1000px] md:top-[1400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        <Image
          src={WideBlueElipse}
          alt="Wide Blue Ellipse"
          className="absolute left-1/2 top-[1800px] md:top-[2400px] w-screen -translate-x-1/2 -translate-y-1/2 -z-10"
        />
        
        <section className="text-center font-bold mt-32 md:mt-48 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
          <span className="relative inline-block rotate-[1.41deg] mb-1 md:mb-2 md:p-1">
            <span className="absolute inset-0 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-md"></span>
            <span className="relative px-2">About KSEP</span>
          </span>{" "}
        </section>
        <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16 w-screen">
          <div className="text-right mb-8 md:mb-12 ml-auto max-w-6xl pr-0 md:pr-8 lg:pr-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Our <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-md -rotate-1"></span>
                <span className="relative px-2 md:px-3">Vision</span>
              </span>
            </h2>
            <div className="flex flex-col justify-end">
              <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-4 md:p-6 rounded-2xl text-white">
                KSEP ITB sebagai rumah pembelajaran dan pengembangan diri yang berdampak di bidang ekonomi dan pasar modal.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-16 md:mt-24 px-4 md:px-8 lg:px-16 w-full">
          <div className="text-left mb-8 md:mb-12 mr-auto max-w-6xl pl-0 md:pl-8 lg:pl-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              <span className="relative inline-block">
                <span className="relative px-2 md:px-3">Our</span>
              </span>{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-md -rotate-1"></span>
                <span className="relative px-2 md:px-3">Mission</span>
              </span>
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl py-7 px-6">
                  1
                </div>
                <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-3 md:p-4 rounded-2xl flex-1">
                  Menjadikan KSEP sebagai rumah yang nyaman bagi anggotanya.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl py-7 px-6">
                  2
                </div>
                <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-cyan-600 to-sky-800 p-3 md:p-4 rounded-2xl flex-1">
                  Memberikan dampak bagi masyarakat umum di dunia ekonomi dan pasar modal.
                </p>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#A7472B] to-[#8A3456] rounded-2xl flex items-center justify-center font-bold md:text-lg lg:text-xl py-7 px-6">
                  3
                </div>
                <p className="text-sm md:text-lg lg:text-xl bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-3 md:p-4 rounded-2xl flex-1">
                  Menyediakan sarana bagi anggotanya untuk belajar dan berkembang khususnya di bidang ekonomi dan pasar modal.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 md:mt-32 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto pb-16 md:pb-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 - rotate-1">
              Check Out Our
            </h2>
            <div className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r -m-1 from-[#A7472B] to-[#8A3456] rounded-md -rotate-1"></span>
              <span className="relative px-3 md:px-4 py-1 md:py-2 text-2xl md:text-4xl lg:text-5xl font-bold -rotate-2">Profile Video</span>
            </div>
            <div className="flex justify-center mt-2 md:mt-4">
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-[#A7472B] to-[#8A3456] p-1 md:p-2 rounded-2xl">
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <Image src={Placeholder} alt="KSEP Profile Video" layout="fill" objectFit="cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-center font-bold mt-32 md:mt-48 text-3xl sm:text-5xl md:text-6xl lg:text-8xl">
          <span className="relative inline-block -rotate-[1.41deg] mb-1 md:mb-2 md:p-1">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-sky-800 rounded-md"></span>
            <span className="relative px-2">Hello! We are...</span>
          </span>{" "}
          <Image
            src={Renaissance}
            alt="Renaissance"
            className="mx-auto mt-5 md:mt-20 w-[6 0%]"
          />
        </section>
      </main>
    )
}

export default Page;