import { Button } from "@/components/ui/button";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CardLogo from "../CardLogo";
import { ModeToggle } from "../ModeToggle";
import LinkProfile from "./LinkProfile";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { data } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/auth/login");
  };
  return (
    <nav className="bg-card border-b  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <CardLogo />
            <NavItems />
          </div>

          {/*  Search */}
          <SearchInput />

          {/*  Notifications and Profile */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative hidden  ">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>

            <LinkProfile user={data?.user} />
            <ModeToggle />
            <Button onClick={handleLogOut} variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
