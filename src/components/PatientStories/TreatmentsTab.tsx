
import React from "react";
import PieceByPiece from "@/components/PieceByPiece";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TreatmentsTab = () => {
  return (
    <PieceByPiece 
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      staggerDelay={150}
      animationType="fade-up"
    >
      <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="font-serif text-cream-800">Physical Therapy</CardTitle>
          <CardDescription className="text-cream-600">
            Targeted exercises to improve strength, flexibility and mobility for pain reduction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-cream-700">
            Physical therapy focuses on specific movement patterns and exercises designed to address 
            the underlying causes of chronic pain conditions. Therapists work with patients to develop
            personalized programs that gradually build tolerance and improve function.
          </p>
          <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
            Learn More
          </Button>
        </CardContent>
      </Card>

      <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="font-serif text-cream-800">Pain Management Techniques</CardTitle>
          <CardDescription className="text-cream-600">
            Multimodal approaches combining medication, therapy, and lifestyle adjustments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-cream-700">
            Comprehensive pain management involves coordinated care from specialists who understand
            the complex nature of chronic pain. Treatment plans typically incorporate medication management,
            interventional procedures, psychological support, and complementary therapies.
          </p>
          <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
            Learn More
          </Button>
        </CardContent>
      </Card>

      <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="font-serif text-cream-800">Mind-Body Approaches</CardTitle>
          <CardDescription className="text-cream-600">
            Meditation, mindfulness, and cognitive behavioral therapy for pain relief.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-cream-700">
            Mind-body techniques help patients develop awareness of the connection between thoughts,
            emotions, and physical sensations. Research shows these approaches can significantly reduce
            pain intensity and improve quality of life by addressing the psychological aspects of pain.
          </p>
          <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
            Learn More
          </Button>
        </CardContent>
      </Card>

      <Card className="border-cream-200 bg-white transition-all duration-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="font-serif text-cream-800">Emerging Treatments</CardTitle>
          <CardDescription className="text-cream-600">
            New technologies and research-backed approaches for chronic pain conditions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-cream-700">
            The field of pain management continues to evolve with innovative treatments including
            neuromodulation, regenerative medicine, and targeted drug delivery systems. These cutting-edge
            approaches offer hope for patients who haven't responded to conventional therapies.
          </p>
          <Button className="mt-4 bg-cream-600 hover:bg-cream-700 text-white" size="sm">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </PieceByPiece>
  );
};

export default TreatmentsTab;
