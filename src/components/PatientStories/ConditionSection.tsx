
import React from "react";
import { Condition } from "@/types/PatientStories";

interface ConditionSectionProps {
  condition: Condition | undefined;
  expandedCondition: number | null;
  toggleExpand: (id: number) => void;
}

const ConditionSection = ({ condition }: ConditionSectionProps) => {
  if (!condition) return null;
  
  return (
    <>
      <div className="border-b border-cream-100 py-6 px-8">
        <h2 className="font-serif text-3xl font-bold text-cream-800 mb-4">{condition.name}</h2>
        
        <div className="bg-cream-50/80 p-6 rounded-lg border border-cream-100">
          <p className="text-black font-medium mb-3">{condition.description}</p>
          <p className="text-black mb-4">{condition.details}</p>
          
          <div className="mt-4">
            <h4 className="font-medium text-black mb-2">Helpful Resources:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {condition.resources.map((resource, idx) => (
                <li key={idx} className="text-black">{resource}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConditionSection;
