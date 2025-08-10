import userImg from "@/assets/images/user-img.svg";
import { Input } from "@/components/ui/input";
import { useGetAllPosts } from "@/hooks/Actions/posts/usePostsCurds";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get("query") || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  // Fetch all posts for suggestions
  const { data } = useGetAllPosts();
  const posts = data?.posts || [];

  // Filter post titles for suggestions
  const suggestions = value.trim()
    ? posts.filter((post) =>
        post.title?.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setValue(val);
    setSearchParams({ ...Object.fromEntries([...searchParams]), query: val });
    setShowDropdown(!!val);
  };

  const handleSearch = () => {
    if (value.trim()) {
      navigate(`/search?query=${encodeURIComponent(value)}`);
      setShowDropdown(false);
    }
  };

  const handleSuggestionClick = (title) => {
    setValue(title);
    setSearchParams({ ...Object.fromEntries([...searchParams]), query: title });
    navigate(`/search?query=${encodeURIComponent(title)}`);
    setShowDropdown(false);
  };

  return (
    <div className="hidden lg:flex flex-1 max-w-md mx-8">
      <div className="relative w-full" ref={inputRef}>
        <Input
          placeholder="Search posts, people..."
          className="pl-4 pr-12 py-2 bg-white border border-gray-200 rounded-full shadow-sm focus:border-primary focus:ring-2 focus:ring-blue-100 transition-all duration-200 text-gray-700 placeholder-gray-400"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(!!value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          type="button"
          onClick={handleSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 focus:bg-gray-300 transition-colors duration-200  focus:outline-none border border-transparent focus:border-primary"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
        {showDropdown && suggestions.length > 0 && (
          <ul className="absolute z-50 left-0 right-0 mt-2 bg-background border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {suggestions.map((post) => (
              <li
                key={post._id}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(post.title)}
              >
                <img
                  src={post.owner?.image?.secure_url || userImg}
                  alt={post.owner?.userName || "User"}
                  className="w-7 h-7 rounded-full object-cover border"
                  loading="lazy"
                />
                <span className="truncate">{post.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
