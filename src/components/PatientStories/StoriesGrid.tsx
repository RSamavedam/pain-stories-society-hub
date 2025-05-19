
import React from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { PatientStory } from "@/types/PatientStories";
import StoryCard from "./StoryCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface StoriesGridProps {
  stories: PatientStory[];
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const StoriesGrid = ({ stories, openPopoverId, setOpenPopoverId }: StoriesGridProps) => {
  const isMobile = useIsMobile();

  // Create a more organic scattered effect with varied positioning
  const positions = [
    "top-[5%] left-[15%] rotate-[-2deg]",
    "top-[15%] right-[20%] rotate-[1deg]",
    "bottom-[10%] left-[25%] rotate-[2deg]",
    "bottom-[5%] right-[15%] rotate-[-1deg]",
    "top-[40%] left-[50%] translate-x-[-50%] rotate-[1deg]",
  ];
  
  // Mobile positions - vertical layout
  const mobilePositions = stories.map((_, index) => {
    const verticalOffset = index * 280; // Height offset for each card
    return `top-[${verticalOffset}px] left-[50%] translate-x-[-50%] rotate-[0deg]`;
  });

  // Calculate the container height for mobile
  const mobileContainerHeight = `${stories.length * 280 + 100}px`; // Adding extra padding at bottom

  return (
    <div 
      className="relative"
      style={{ minHeight: isMobile ? mobileContainerHeight : "520px" }}
    >
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
            position={isMobile ? mobilePositions[index] : positions[index % positions.length]}
            openPopoverId={openPopoverId}
            setOpenPopoverId={setOpenPopoverId}
          />
        ))}
      </PieceByPiece>
    </div>
  );
};

export default StoriesGrid;
