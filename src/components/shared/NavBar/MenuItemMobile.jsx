import { useAuth } from "@/context/AuthContext";
import { Home, MessageSquare, UserPlus2, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    to: "/",
    icon: <Home className="w-5 h-5" />,
    label: "Home",
  },
  {
    to: "/followers",
    icon: <Users className="w-5 h-5" />,
    label: "Followers",
  },
  {
    to: "/profile", // placeholder, will override dynamically
    icon: <Users className="w-5 h-5" />,
    label: "Profile",
  },
  {
    to: "/suggested-people",
    icon: <UserPlus2 className="w-5 h-5" />,
    label: "Suggested People",
  },
  {
    to: "/messages",
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Messages",
  },
];

const MenuItemMobile = ({ handleNavigate }) => {
  const { user } = useAuth();

  return (
    <div className="gap-5 items-center mt-5 space-x-1">
      {navLinks.map((link) => {
        const isDisabled = link.label === "Messages";
        const isProfile = link.label === "Profile";

        const userProfile = isProfile && user ? `/profile/${user.id}` : link.to;

        return (
          <NavLink
            to={isDisabled ? "/" : userProfile}
            key={link.label}
            className={({ isActive }) =>
              `rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              ${
                isDisabled
                  ? "pointer-events-none opacity-50 cursor-not-allowed"
                  : ""
              }
              ${
                isActive && !isDisabled
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary/80"
              }`
            }
            onClick={() => handleNavigate(link.label)}
          >
            <span className="text-sm font-medium flex items-center gap-3">
              {link.icon} {link.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MenuItemMobile;
