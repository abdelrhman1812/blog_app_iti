import { Button } from "../ui/button";
import CardLogo from "./CardLogo";
import { ModeToggle } from "./ModeToggle";

const AuthNavbar = () => {
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
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Don't have an account?
            </span>
            <Button variant="outline">Sign Up</Button>

            <span className="text-sm text-gray-600">
              Already have an account?
            </span>
            <Button variant="outline">Sign In</Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default AuthNavbar;
