import { Home, MessageSquare, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    to: "/",
    icon: <Home className="w-5 h-5" />,
    label: "Home",
  },
  {
    to: "/friends",
    icon: <Users className="w-5 h-5" />,
    label: "Friends",
  },
  {
    to: "/messages",
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Messages",
  },
];

const NavItems = () => {
  return (
    <div className="hidden lg:flex gap-5 items-center space-x-1">
      {navLinks.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          className={({ isActive }) =>
            `rounded-md transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-primary/80"
            }`
          }
        >
          <span className="text-sm font-medium flex items-center gap-3">
            {link.icon} {link.label}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default NavItems;
