
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { stories } from "@/data/patientStoriesData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Image, Video, Youtube } from "lucide-react";
import StoryContent from "@/components/PatientStories/StoryContent";

const PatientStoryDetail = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const navigate = useNavigate();
  
  // Find the story in all categories
  let story = null;
  for (const category in stories) {
    const foundStory = stories[category].find(s => s.id === storyId);
    if (foundStory) {
      story = foundStory;
      break;
    }
  }
  
  if (!story) {
    console.error(`404 Error: User attempted to access non-existent route: /patient-stories/${storyId}`);
    return (
      <Layout>
        <div className="container py-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <h1 className="text-2xl font-bold">Story Not Found</h1>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">The story you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => navigate('/patient-stories')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/patient-stories')} 
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </Button>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-16 h-16 border-2 border-cream-200">
              <AvatarImage src={story.image} alt={story.name} />
              <AvatarFallback className="text-lg">{story.initials}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-serif font-bold text-3xl text-cream-900">{story.name}</h1>
              <p className="text-sm font-medium text-muted-foreground">{story.condition} • {story.date}</p>
            </div>
          </div>
          
          <Card className="bg-white/80 backdrop-blur-sm border border-cream-200">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed text-cream-800 mb-6">
                {story.snippet}
              </p>
              
              {/* Render story content (text, images, videos) */}
              {story.content ? (
                <StoryContent content={story.content} />
              ) : (
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-cream-800">
                    This is a placeholder for the full story content. In a real application, each patient story would have a complete narrative here about their journey with chronic pain, treatments they've tried, and how they manage their condition.
                  </p>
                  <p className="text-lg leading-relaxed text-cream-800">
                    Patient stories serve as powerful tools for both education and emotional support. By sharing their experiences, patients help others understand the daily challenges of living with chronic pain while also providing hope and practical coping strategies.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PatientStoryDetail;
