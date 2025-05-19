
import React from "react";
import { ContentBlock } from "@/types/PatientStories";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface StoryContentProps {
  content: ContentBlock[] | undefined;
}

const StoryContent: React.FC<StoryContentProps> = ({ content }) => {
  if (!content || content.length === 0) {
    return (
      <div className="text-lg leading-relaxed text-cream-800 mb-6">
        <p>No detailed content is available for this story yet.</p>
      </div>
    );
  }

  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "text":
        return (
          <div key={index} className="text-lg leading-relaxed text-cream-800 mb-6">
            {block.content}
          </div>
        );
      
      case "image":
        return (
          <div key={index} className="my-8">
            <div className="border border-cream-200 rounded-lg overflow-hidden bg-white">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img
                  src={block.url}
                  alt={block.caption || "Story image"}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
            {block.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      case "youtube":
        return (
          <div key={index} className="my-8">
            <div className="border border-cream-200 rounded-lg overflow-hidden">
              <AspectRatio ratio={16/9}>
                <iframe
                  src={`https://www.youtube.com/embed/${block.videoId}`}
                  title={block.caption || "YouTube video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
            </div>
            {block.caption && (
              <p className="text-sm text-muted-foreground mt-2 text-center italic">
                {block.caption}
              </p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="story-content">
      {content.map((block, index) => renderContentBlock(block, index))}
    </div>
  );
};

export default StoryContent;
