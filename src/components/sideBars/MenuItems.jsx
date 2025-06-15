import { Bookmark, Home, User, Users } from "lucide-react";
import { Link } from "react-router-dom"; // or your routing library
import { Button } from "../ui/button";

const menuItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "Profile", id: "profile" },
  { icon: Users, label: "Followers", id: "followers", isLink: true }, // Added isLink flag
  { icon: Bookmark, label: "Saved Posts", id: "saved" },
];

const MenuItems = () => {
  return (
    <div className="p-2">
      <nav className="space-y-1">
        {menuItems.map((item) =>
          item.id === "followers" ? (
            <Link to="/followers" key={item.id} className="w-full">
              <Button
                variant={"ghost"}
                className="w-full justify-start hover:bg-primary/80 cursor-pointer hover:text-white transition-all duration-300"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ) : (
            <Button
              key={item.id}
              variant={"ghost"}
              className="w-full justify-start hover:bg-primary/80 hover:text-white transition-all duration-300"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          )
        )}
      </nav>
    </div>
  );
};

export default MenuItems;
