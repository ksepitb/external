import CompetitionCard from "./CompetitionCard";
import { competitionData } from "@/data/home";

const Leaderboard = () => {
  return (
    <div>
      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
        data-aos="fade-up"
      >
        {competitionData.map((data) => (
          <CompetitionCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
