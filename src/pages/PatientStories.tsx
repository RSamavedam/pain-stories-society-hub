
import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Condition, StoryCategories } from "@/types/PatientStories";
import { conditions, stories } from "@/data/patientStoriesData";
import PageHeader from "@/components/PatientStories/PageHeader";
import SearchBar from "@/components/PatientStories/SearchBar";
import CategoryCard from "@/components/PatientStories/CategoryCard";
import ShareStorySection from "@/components/PatientStories/ShareStorySection";

const PatientStories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [expandedCondition, setExpandedCondition] = useState<number | null>(null);
  
  // Get corresponding condition for each story category
  const getConditionForCategory = (category: string): Condition | undefined => {
    return conditions.find(condition => condition.name === category) || undefined;
  };

  const filteredStories: StoryCategories = Object.fromEntries(
    Object.entries(stories).map(([category, categoryStories]) => [
      category,
      categoryStories.filter(story =>
        story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.snippet.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ]).filter(([_, categoryStories]) => categoryStories.length > 0)
  );

  const toggleExpand = (id: number) => {
    setExpandedCondition(expandedCondition === id ? null : id);
  };

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background design elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
          <div className="absolute top-[20%] left-[10%] w-80 h-80 rounded-full bg-cream-300 blur-3xl"></div>
          <div className="absolute bottom-[10%] right-[5%] w-64 h-64 rounded-full bg-softgray-300 blur-3xl"></div>
          <div className="absolute top-[60%] left-[60%] w-96 h-96 rounded-full bg-cream-400 blur-3xl opacity-40"></div>
        </div>
        
        <PageHeader>
          <AnimatedSection animationType="fade-up" delay={600}>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </AnimatedSection>
        </PageHeader>

        <div className="container py-12 max-w-6xl">
          {Object.keys(filteredStories).length === 0 ? (
            <AnimatedSection animationType="fade-in" className="text-center p-8 bg-cream-50 rounded-lg">
              <p className="text-lg text-cream-700">No stories match your search. Please try different terms.</p>
            </AnimatedSection>
          ) : (
            Object.entries(filteredStories).map(([category, categoryStories], categoryIndex) => {
              const condition = getConditionForCategory(category);
              
              return (
                <AnimatedSection 
                  key={category} 
                  className="mb-24 relative"
                  animationType="fade-up"
                  delay={categoryIndex * 200}
                >
                  <CategoryCard
                    category={category}
                    stories={categoryStories}
                    condition={condition}
                    expandedCondition={expandedCondition}
                    toggleExpand={toggleExpand}
                    openPopoverId={openPopoverId}
                    setOpenPopoverId={setOpenPopoverId}
                  />
                </AnimatedSection>
              );
            })
          )}
          
          <ShareStorySection />
        </div>
      </div>
    </Layout>
  );
};

export default PatientStories;
