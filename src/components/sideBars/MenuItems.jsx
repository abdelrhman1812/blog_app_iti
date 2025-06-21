import { Bookmark, Home, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const menuItems = [
  { icon: Home, label: "Home", id: "", isLink: true },
  { icon: User, label: "Profile", id: "profile" },
  { icon: Users, label: "Followers", id: "followers", isLink: true },
  {
    icon: Users,
    label: "Suggested People",
    id: "suggested-people",
    isLink: true,
  },
  { icon: Bookmark, label: "Saved Posts", id: "saved" },
];

const MenuItems = () => {
  return (
    <div className="p-2">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const content = (
            <Button
              variant="ghost"
              className="w-full cursor-pointer justify-start hover:bg-primary/80 hover:text-white transition-all duration-300"
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          );

          return item.isLink ? (
            <Link
              to={`/${item.id}`}
              key={item.id}
              className="w-full block cursor-pointer"
            >
              {content}
            </Link>
          ) : (
            <div key={item.id}>{content}</div>
          );
        })}
      </nav>
    </div>
  );
};

export default MenuItems;
