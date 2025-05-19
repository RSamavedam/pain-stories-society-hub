
import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { PatientStory } from "@/types/PatientStories";

interface StoryCardProps {
  story: PatientStory;
  position: string;
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
  isCarousel?: boolean;
}

const StoryCard = ({ story, position, openPopoverId, setOpenPopoverId, isCarousel = false }: StoryCardProps) => {
  return (
    <div
      className={`${isCarousel ? "" : "absolute"} ${position} transform ${
        isCarousel ? "" : "hover:-translate-y-3 hover:rotate-0"
      } transition-all duration-500`}
    >
      <Popover
        open={openPopoverId === story.id}
        onOpenChange={(open) => {
          if (open) {
            setOpenPopoverId(story.id);
          } else if (openPopoverId === story.id) {
            setOpenPopoverId(null);
          }
        }}
      >
        <div className="text-center relative">
          <PopoverTrigger asChild>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenPopoverId(story.id)}
              onMouseLeave={() => setOpenPopoverId(null)}
            >
              <Avatar 
                className={`${
                  isCarousel ? "w-72 h-72" : "w-64 h-64"
                } border-4 border-white mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300`}
              >
                <AvatarImage src={story.image} alt={story.name} className="object-cover" />
                <AvatarFallback className="text-4xl bg-cream-100 text-cream-700">{story.initials}</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </PopoverTrigger>

          <Link to={`/patient-stories/${story.id}`} className="group cursor-pointer block mt-2">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md border border-cream-100 transform group-hover:translate-y-1 transition-transform">
              <p className="font-medium text-lg text-cream-800">{story.name}</p>
            </div>
          </Link>

          <PopoverContent
            className="w-96 p-6 z-50 backdrop-blur-lg bg-white/95 border border-cream-200 shadow-xl rounded-xl"
            side="bottom"
            align="center"
            sideOffset={20}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 border-2 border-cream-200">
                  <AvatarImage src={story.image} alt={story.name} />
                  <AvatarFallback className="text-lg">{story.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-serif font-medium text-xl text-cream-900">{story.name}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{story.condition}</p>
                </div>
              </div>
              <p className="text-cream-800 leading-relaxed italic border-l-4 border-cream-200 pl-4 py-1">{story.snippet}</p>
              <div className="flex justify-between items-center pt-2">
                <p className="text-xs text-muted-foreground">{story.date}</p>
                <Link
                  to={`/patient-stories/${story.id}`}
                  className="text-sm font-medium text-cream-700 hover:text-cream-900 inline-flex items-center group"
                >
                  Read full story
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
};

export default StoryCard;
