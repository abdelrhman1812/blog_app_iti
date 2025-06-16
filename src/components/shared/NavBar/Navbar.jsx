import { useAuth } from "@/context/AuthContext";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { useNavigate } from "react-router-dom";
import CardLogo from "../CardLogo";
import { ModeToggle } from "../ModeToggle";
import BtnLogout from "./BtnLogout";
import LinkProfile from "./LinkProfile";
import MobileSidebar from "./MobileSidebar";
import NavItems from "./NavItems";
import SearchInput from "./SearchInput";

const Navbar = () => {
  const { data } = useUserAuth();
  const { handleLogout, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = () => {
    handleLogout();
    if (!isLoggedIn) {
      navigate("/auth/login");
    }
  };
  return (
    <nav className="bg-card border-b  sticky top-0 z-50 overflow-hidden ">
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
          <div className="flex items-center space-x-4 ">
            <LinkProfile user={data?.user} />
            <ModeToggle />
            <div className="hidden md:block">
              <BtnLogout handleLogOut={handleLogOut} />
            </div>
            <MobileSidebar data={data} handleLogOut={handleLogOut} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
