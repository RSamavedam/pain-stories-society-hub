
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Condition } from "@/types/PatientStories";

interface ConditionSectionProps {
  condition: Condition | undefined;
  expandedCondition: number | null;
  toggleExpand: (id: number) => void;
}

const ConditionSection = ({ condition, expandedCondition, toggleExpand }: ConditionSectionProps) => {
  if (!condition) return null;

  return (
    <>
      <div className="border-b border-cream-100 py-6 px-8 flex justify-between items-center">
        <h2 className="font-serif text-3xl font-bold text-cream-800">{condition.name}</h2>
        
        <CollapsibleTrigger 
          onClick={() => toggleExpand(condition.id)}
          className="p-2 rounded-full bg-cream-100 hover:bg-cream-200 transition-colors text-cream-700 flex items-center justify-center"
        >
          {expandedCondition === condition.id ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CollapsibleTrigger>
      </div>
      
      <Collapsible 
        open={expandedCondition === condition.id}
        className="w-full"
      >
        <CollapsibleContent className="animate-accordion-down">
          <div className="bg-cream-50/80 p-6 mx-8 my-6 rounded-lg border border-cream-100">
            <p className="text-cream-700 font-medium mb-3">{condition.description}</p>
            <p className="text-cream-600 mb-4">{condition.details}</p>
            
            <div className="mt-4">
              <h4 className="font-medium text-cream-800 mb-2">Helpful Resources:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {condition.resources.map((resource, idx) => (
                  <li key={idx} className="text-cream-600">{resource}</li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default ConditionSection;
