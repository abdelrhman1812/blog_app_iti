import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import GroupsItems from "./GroupsItems";
import MenuItems from "./MenuItems";

const LeftSidebar = () => {
  const { data } = useUserAuth();

  return (
    <div className="w-full h-full my-7 space-y-6 pb-20 overflow-hidden">
      {/* User Profile */}
      <Card>
        <div className="px-4 ">
          <div className="flex items-center space-x-3">
            <Link to={`/profile/${data?.user?._id}`}>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={data?.user?.image?.secure_url}
                  alt={data?.user?.userName}
                />
                <AvatarFallback>
                  {data?.user?.userName?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </Link>
            <div>
              <p className="font-medium text-sm">{data?.user?.userName}</p>
              <p className="text-xs text-muted-foreground">View your profile</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Main Navigation */}
        <MenuItems />

        <Separator className="my-2" />

        {/*  Groups */}

        <GroupsItems />

        <Separator className="my-2" />

        <div className="px-4 text-xs text-muted-foreground">
          <p className="mb-1">© 2025 Moltqa</p>
          <span>Abdelrhman Ali</span>
          <p className="mt-1">Privacy · Terms · Advertising </p>
        </div>
      </Card>
    </div>
  );
};

export default LeftSidebar;
