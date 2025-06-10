import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="hidden lg:flex flex-1 max-w-md mx-8">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search posts, people..."
          className="pl-10 bg-gray-100 border-none rounded-full"
        />
      </div>
    </div>
  );
};

export default SearchInput;
