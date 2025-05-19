
import React, { useState, useCallback, useEffect } from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { PatientStory } from "@/types/PatientStories";
import StoryCard from "./StoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface StoriesGridProps {
  stories: PatientStory[];
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const StoriesGrid = ({ stories, openPopoverId, setOpenPopoverId }: StoriesGridProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<any>(null);

  // Handle loop navigation - create a circular carousel effect
  const handlePrevious = useCallback(() => {
    if (!api) return;
    
    const newIndex = currentIndex === 0 ? stories.length - 1 : currentIndex - 1;
    api.scrollTo(newIndex);
    setCurrentIndex(newIndex);
  }, [api, currentIndex, stories.length]);

  const handleNext = useCallback(() => {
    if (!api) return;
    
    const newIndex = currentIndex === stories.length - 1 ? 0 : currentIndex + 1;
    api.scrollTo(newIndex);
    setCurrentIndex(newIndex);
  }, [api, currentIndex, stories.length]);

  // Update current index when carousel changes
  useEffect(() => {
    if (!api) return;
    
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });

    // Initialize with the first few items visible
    api.reInit();
    
    return () => {
      api.off("select");
    };
  }, [api]);

  // Ensure initialization with three stories visible
  const lastIndex = stories.length - 1;
  const initialIndex = lastIndex; // Start with the last item to show it as the "previous" item

  useEffect(() => {
    if (!api) return;
    
    // Set initial position to show 3 items with the first one centered
    setTimeout(() => {
      api.scrollTo(initialIndex, false);
      setCurrentIndex(initialIndex);
    }, 100);
  }, [api, initialIndex]);

  return (
    <div className="relative">
      <PieceByPiece
        className="relative w-full"
        staggerDelay={300}
        baseDelay={100}
        animationType="fade-in"
      >
        <div className="py-4 pb-16">
          <Carousel 
            className="w-full" 
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
              containScroll: false,
              startIndex: initialIndex,
            }}
          >
            <CarouselContent className="mx-auto">
              {stories.map((story, index) => (
                <CarouselItem 
                  key={story.id} 
                  className="basis-full md:basis-1/3 lg:basis-1/3 px-2"
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
          </Carousel>
          
          {/* Custom navigation buttons positioned at the bottom center */}
          <div className="flex justify-center mt-6 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 border-cream-200"
              onClick={handlePrevious}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 border-cream-200"
              onClick={handleNext}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </PieceByPiece>
    </div>
  );
};

export default StoriesGrid;
