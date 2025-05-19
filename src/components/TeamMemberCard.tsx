
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  initials: string;
}

const TeamMemberCard = ({ name, role, bio, image, initials }: TeamMemberProps) => {
  return (
    <Card className="border-cream-200">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-16 w-16 mr-4 border-2 border-cream-200">
            {image ? (
              <AvatarImage src={image} alt={name} />
            ) : (
              <AvatarFallback className="bg-cream-100 text-brown text-lg font-medium">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <h3 className="font-serif text-xl font-bold mb-1">{name}</h3>
            <p className="text-cream-700 font-medium">{role}</p>
          </div>
        </div>
        <p className="text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
