import { DepartmentEvent } from "@/types";
import Image from "next/image";

const EventCard = ({ event }: { event: DepartmentEvent }) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl outline-1 outline-white/10 backdrop-blur-xl p-4 lg:pl-7 lg:pr-4 lg:py-4 flex flex-col lg:flex-row gap-4 items-center">
      <div className="relative w-full lg:w-48 h-48 lg:h-24 flex-shrink-0 rounded-lg overflow-hidden order-1 lg:order-2">
        <Image
          src={event.imageSrc}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 6rem"
        />
      </div>
      <div className="flex-grow text-center lg:text-left order-2 lg:order-1">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-white">
          {event.title}
        </h3>
        <p className="text-xs md:text-sm text-gray-300 mt-1">
          {event.description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
