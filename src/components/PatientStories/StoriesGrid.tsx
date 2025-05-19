
import React from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { PatientStory } from "@/types/PatientStories";
import StoryCard from "./StoryCard";

interface StoriesGridProps {
  stories: PatientStory[];
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const StoriesGrid = ({ stories, openPopoverId, setOpenPopoverId }: StoriesGridProps) => {
  // Create a more organic scattered effect with varied positioning
  const positions = [
    "top-[5%] left-[15%] rotate-[-2deg]",
    "top-[15%] right-[20%] rotate-[1deg]",
    "bottom-[10%] left-[25%] rotate-[2deg]",
    "bottom-[5%] right-[15%] rotate-[-1deg]",
    "top-[40%] left-[50%] translate-x-[-50%] rotate-[1deg]",
  ];

  return (
    <div className="relative min-h-[520px]">
      <PieceByPiece 
        className="relative w-full"
        staggerDelay={300}
        baseDelay={100}
        animationType="fade-in"
      >
        {stories.map((story, index) => (
          <StoryCard
            key={story.id}
            story={story}
            position={positions[index % positions.length]}
            openPopoverId={openPopoverId}
            setOpenPopoverId={setOpenPopoverId}
          />
        ))}
      </PieceByPiece>
    </div>
  );
};

export default StoriesGrid;
