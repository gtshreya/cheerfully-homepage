
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for power stations, services..."
          className="pl-4 pr-12 py-6 w-full rounded-lg shadow-md dark:bg-gray-800"
        />
        <Button 
          className="absolute right-1 top-1 bottom-1 px-4" 
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
