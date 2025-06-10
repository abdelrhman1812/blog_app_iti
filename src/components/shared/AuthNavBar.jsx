import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import CardLogo from "./CardLogo";
import { ModeToggle } from "./ModeToggle";

const AuthNavbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className="bg-card  sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/*  - Logo  */}
          <CardLogo />

          {/*  Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" size="sm" className="text-">
              About
            </Button>
            <Button variant="ghost" size="sm" className="text-">
              Features
            </Button>
            <Button variant="ghost" size="sm" className="text-">
              Help
            </Button>
          </div>

          {/* Right side - Auth Buttons */}
          <div className="flex items-center gap-4">
            {pathname.includes("login") ? (
              <div className="flex items-center gap-2">
                <span className="text-sm hidden sm:block text-gray-600 dark:text-gray-400">
                  Don't have an account?
                </span>
                <Link
                  to="/auth/register"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-sm hidden sm:block text-gray-600 dark:text-gray-400">
                  Already have an account?
                </span>
                <Link
                  to="/auth/login"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Sign In
                </Link>
              </div>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
