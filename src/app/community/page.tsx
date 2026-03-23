"use client";

import {communityData} from "@/data/Community";
import ReviewRow from "@/components/community/ReviewRow";

export default function CommunityPage() {
  return (
    <div className="bg-black text-white min-h-screen p-10">

      <h1 className="text-4xl font-bold mb-12 text-center">
        Community Reviews
      </h1>

      {communityData.map((item: any, index: number) => (
        <ReviewRow key={index} data={item} />
      ))}

    </div>
  );
}