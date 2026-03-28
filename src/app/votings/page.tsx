import PollCard from "@/components/votings/PollCard";
import { polls } from "@/data/poll";

export default function VotingPage() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Community Votings
      </h1>

      <div className="grid grid-cols-2 gap-6">
        {polls.map((poll) => (
          <PollCard key={poll._id} poll={poll} />
        ))}
      </div>

    </div>
  );
}