
import React from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { PatientStory } from "@/types/PatientStories";
import StoryCard from "./StoryCard";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface StoriesGridProps {
  stories: PatientStory[];
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const StoriesGrid = ({ stories, openPopoverId, setOpenPopoverId }: StoriesGridProps) => {
  const isMobile = useIsMobile();

  // Create a more organic scattered effect with varied positioning for desktop
  const positions = [
    "top-[5%] left-[15%] rotate-[-2deg]",
    "top-[15%] right-[20%] rotate-[1deg]",
    "bottom-[10%] left-[25%] rotate-[2deg]",
    "bottom-[5%] right-[15%] rotate-[-1deg]",
    "top-[40%] left-[50%] translate-x-[-50%] rotate-[1deg]",
  ];

  return (
    <div className="relative min-h-[520px]">
      {isMobile ? (
        <PieceByPiece
          className="relative w-full"
          staggerDelay={300}
          baseDelay={100}
          animationType="fade-in"
        >
          <div className="py-4">
            <Carousel className="w-full">
              <CarouselContent>
                {stories.map((story) => (
                  <CarouselItem key={story.id} className="md:basis-full lg:basis-full">
                    <div className="p-1">
                      <div className="flex flex-col items-center justify-center">
                        <StoryCard
                          story={story}
                          position="relative"
                          openPopoverId={openPopoverId}
                          setOpenPopoverId={setOpenPopoverId}
                          isCarousel={true}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative static left-0 right-auto translate-y-0" />
                <CarouselNext className="relative static right-0 left-auto translate-y-0" />
              </div>
            </Carousel>
          </div>
        </PieceByPiece>
      ) : (
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
              isCarousel={false}
            />
          ))}
        </PieceByPiece>
      )}
    </div>
  );
};

export default StoriesGrid;
