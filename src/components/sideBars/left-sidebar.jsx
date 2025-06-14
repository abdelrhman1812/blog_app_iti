import { Separator } from "@/components/ui/separator";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import GroupsItems from "./GroupsItems";
import MenuItems from "./MenuItems";

const LeftSidebar = () => {
  const { data } = useUserAuth();

  return (
    <div className="w-full h-full overflow-y-auto pb-20 ">
      {/* User Profile Summary */}
      <div className="p-4">
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
            <p className="text-xs text-gray-500">View your profile</p>
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

      <div className="p-4 text-xs text-gray-500">
        <p>© 2024 BlogApp</p>
        <span>Abdelrhman Ali</span>
        <p className="mt-1">Privacy · Terms · Advertising </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
