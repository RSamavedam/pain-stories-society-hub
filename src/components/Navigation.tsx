
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Book, Heart, Home, Info, Mail, Pill, Users } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Pain Conditions", path: "/pain-conditions", icon: <Book className="h-5 w-5" /> },
  { name: "Treatments", path: "/treatments", icon: <Pill className="h-5 w-5" /> },
  { name: "Patient Stories", path: "/patient-stories", icon: <Users className="h-5 w-5" /> },
  { name: "About Us", path: "/about", icon: <Info className="h-5 w-5" /> },
  { name: "Contact Us", path: "/contact", icon: <Mail className="h-5 w-5" /> },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = window.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-pain-100 shadow-sm">
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Heart className="h-8 w-8 text-pain-600 mr-2" />
          <Link to="/" className="font-serif font-bold text-xl text-pain-800">
            Pain Relief Society
          </Link>
        </div>
        
        <div className="flex-1" />
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors hover:text-pain-600",
                pathname === item.path ? "text-pain-600" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 p-2 text-base font-medium rounded-md transition-colors hover:bg-pain-50",
                      pathname === item.path ? "bg-pain-50 text-pain-600" : "text-muted-foreground"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
