import Image from "next/image";
import { CompetitionData } from "@/types";

const CompetitionCard = ({ data }: { data: CompetitionData }) => {
  const styleVariants = {
    red: "from-[#A5482D] to-[#8A3454]",
    blue: "from-[#06466B] to-[#2780AF]",
    combination: "from-[#A5482D] to-[#2780AF]",
  };

  const positionTagStyles = {
    1: "bg-gradient-to-r from-[#E1E0DC] to-[#F9D788] text-[#8A6626]",
    2: "bg-gradient-to-r from-[#E1E0DC] to-[#A1A1A1] text-[#4D4D4D]",
    3: "bg-gradient-to-r from-[#F9C980] to-[#E09D40] text-[#70480D]",
    4: "bg-gradient-to-r from-slate-200 to-slate-400 text-slate-700",
  };

  const backgroundGradient = styleVariants[data.style || "combination"];
  const positionStyle = positionTagStyles[data.position];
  const kontingenTagStyle =
    data.style === "red"
      ? "bg-gradient-to-r from-[#E1E0DC] to-[#FCCDBF] text-[#8C3554]"
      : "bg-gradient-to-r from-[#E1E0DC] to-[#ADDEF8] text-[#0C3D59]";

  return (
    <div
      className={`flex flex-col rounded-2xl text-white overflow-hidden bg-gradient-to-br p-4 ${backgroundGradient} ${data.className}`}
    >
      <div className="relative w-full h-56 rounded-xl overflow-hidden">
        <Image
          src={data.imageSrc}
          alt={`Competition: ${data.title}`}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover"
        />
      </div>
      <div className="pt-4 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="mb-4">
            <span
              className={`px-4 py-2 text-sm font-medium rounded-full ${positionStyle}`}
            >
              {data.positionText}
            </span>
          </div>

          <h3 className="md:text-xl leading-5 md:leading-6 font-bold">
            {data.title}
          </h3>
          <p className="text-sm md:text-base font-bold mt-3">
            {data.university}
          </p>
        </div>
        <div className="mt-4 pt-4">
          <h4
            className={`self-start inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${kontingenTagStyle}`}
          >
            Kontingen
          </h4>

          <ul className="text-xs">
            {data.participants.map((participant, index) => (
              <li key={index}>- {participant}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
