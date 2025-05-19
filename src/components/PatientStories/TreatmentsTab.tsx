
import React from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getTreatmentsByCategory } from "@/data/treatmentsData";

const TreatmentsTab = () => {
  // Get a selected subset of treatments to display in this tab
  const featuredTreatments = [
    ...getTreatmentsByCategory("therapies").slice(0, 2),
    ...getTreatmentsByCategory("procedures").slice(0, 2)
  ];

  return (
    <PieceByPiece 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      staggerDelay={150}
      animationType="fade-up"
    >
      {featuredTreatments.map((treatment) => (
        <Card key={treatment.id} className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
          <CardHeader>
            <CardTitle className="font-serif text-cream-800">{treatment.name}</CardTitle>
            <CardDescription className="text-cream-600">
              {treatment.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-cream-700">
              {treatment.details || "Learn more about this treatment option and how it might help manage chronic pain symptoms."}
            </p>
            <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </PieceByPiece>
  );
};

export default TreatmentsTab;
