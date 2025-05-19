
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Condition, PatientStory } from "@/types/PatientStories";
import ConditionSection from "./ConditionSection";
import StoriesGrid from "./StoriesGrid";

interface CategoryCardProps {
  category: string;
  stories: PatientStory[];
  condition?: Condition;
  expandedCondition: number | null;
  toggleExpand: (id: number) => void;
  openPopoverId: string | null;
  setOpenPopoverId: (id: string | null) => void;
}

const CategoryCard = ({ 
  category, 
  stories, 
  condition, 
  expandedCondition, 
  toggleExpand,
  openPopoverId,
  setOpenPopoverId
}: CategoryCardProps) => {
  return (
    <Card className="border border-cream-200 bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md mb-10">
      <ConditionSection 
        condition={condition} 
        expandedCondition={expandedCondition} 
        toggleExpand={toggleExpand} 
      />
      
      <div className="py-2">
        <Separator className="h-0.5 bg-cream-900" />
      </div>
      
      <div className="p-6">
        <StoriesGrid 
          stories={stories} 
          openPopoverId={openPopoverId} 
          setOpenPopoverId={setOpenPopoverId} 
        />
      </div>
    </Card>
  );
};

export default CategoryCard;
