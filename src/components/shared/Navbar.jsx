import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Bell, Home, MessageSquare, Search, Users } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import CardLogo from "./CardLogo";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const { user } = useAuth();
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
            <div className="hidden lg:flex items-center space-x-6">
              <Button variant="ghost" size="sm" className="text-primary">
                <Home className="w-5 h-5 mr-2 text-base-content" />
                Home
              </Button>
              <Button variant="ghost" size="sm">
                <Users className="w-5 h-5 mr-2" />
                Friends
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-5 h-5 mr-2" />
                Messages
              </Button>
            </div>
          </div>

          {/*  Search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search posts, people..."
                className="pl-10 bg-gray-100 border-none rounded-full"
              />
            </div>
          </div>

          {/*  Notifications and Profile */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="relative hidden sm:block "
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>

            <Link to={`/${user?.user?._id}`}>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={user?.user?.image?.secure_url}
                  alt={user?.user?.userName}
                />
                <AvatarFallback>
                  {user?.user?.userName?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </Link>
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
