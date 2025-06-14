import { Bookmark, Home, User, Users } from "lucide-react";
import { Button } from "../ui/button";
const menuItems = [
  { icon: Home, label: "Home", id: "home" },
  { icon: User, label: "Profile", id: "profile" },
  { icon: Users, label: "Followers", id: "followers" },
  { icon: Bookmark, label: "Saved Posts", id: "saved" },
];

const MenuItems = () => {
  return (
    <div className="p-2">
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={"ghost"}
            className="w-full justify-start hover:bg-primary/80"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  );
};

export default MenuItems;
