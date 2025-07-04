import { Home, MessageSquare, Users } from "lucide-react";
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
    to: "/messages",
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Messages",
  },
];

const NavItems = () => {
  return (
    <div className="hidden md:flex gap-5 items-center space-x-1">
      {navLinks.map((link) => {
        const isDisabled = link.label === "Messages";

        return (
          <NavLink
            to={isDisabled ? "#" : link.to}
            key={link.to}
            className={({ isActive }) =>
              `rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        ${isDisabled ? "pointer-events-none opacity-50 cursor-not-allowed" : ""}
        ${
          isActive && !isDisabled
            ? "text-primary"
            : "text-muted-foreground hover:text-primary/80"
        }`
            }
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

export default NavItems;
