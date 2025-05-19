
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

interface StoriesGridProps {
  stories: PatientStory[];
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const StoriesGrid = ({ stories, openPopoverId, setOpenPopoverId }: StoriesGridProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="relative">
      <PieceByPiece
        className="relative w-full"
        staggerDelay={300}
        baseDelay={100}
        animationType="fade-in"
      >
        <div className="py-4">
          <Carousel className="w-full">
            <CarouselContent className={!isMobile ? "mx-auto max-w-[500px]" : ""}>
              {stories.map((story) => (
                <CarouselItem 
                  key={story.id} 
                  className="basis-full"
                >
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
    </div>
  );
};

export default StoriesGrid;
