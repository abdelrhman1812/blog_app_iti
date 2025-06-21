import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileText, HelpCircle, Menu, Settings } from "lucide-react";
import { useState } from "react";
import UserAvatar from "../Avatar/UserAvatar";
import BtnLogout from "./BtnLogout";
import MenuItemMobile from "./MenuItemMobile";

const MobileSidebar = ({ handleLogOut, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="md:hidden cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Main sidebar menu for mobile navigation
        </SheetDescription>

        <div className="h-full overflow-y-auto">
          {/* User Profile  */}
          <div className="p-4 bg-card">
            <div className="flex items-center space-x-3">
              <UserAvatar data={data} />
              <div>
                <p className="font-medium text-sm">
                  {data?.user?.userName || "User"}
                </p>
                <p className="text-xs text-gray-500">View your profile</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Main Navigation */}
          <div className="p-2">
            <MenuItemMobile handleNavigate={handleNavigate} />
          </div>

          <Separator className="my-2" />

          <div className="p-4">
            <h3 className="font-medium text-sm mb-3">Shortcuts</h3>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <FileText className="mr-2 h-4 w-4" />
                My Posts
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                Help
              </Button>
              <div className=" block md:hidden">
                <BtnLogout handleLogOut={handleLogOut} />
              </div>
            </div>
          </div>

          <div className="p-4 text-xs text-gray-500">
            <p>© 2025 Moltqa App</p>
            <p className="mt-1">Privacy · Terms · Advertising</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
