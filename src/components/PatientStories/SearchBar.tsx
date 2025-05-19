
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className="max-w-md mx-auto mt-8 relative">
      <Input
        type="text"
        placeholder="Search conditions & stories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 border-cream-300 focus:border-cream-500 focus:ring-cream-500"
      />
      <Search className="absolute left-3 top-3 h-4 w-4 text-cream-500" />
    </div>
  );
};

export default SearchBar;
