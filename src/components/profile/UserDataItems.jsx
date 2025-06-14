import { useAuth } from "@/context/AuthContext";
import { usePatchFollow } from "@/hooks/Actions/users/useUsersCurds";
import {
  LinkIcon,
  Mail,
  MapPin,
  Phone,
  UserMinus,
  UserPlus,
} from "lucide-react";
import BtnUpdate from "../shared/btnUpdate";
import { Button } from "../ui/button";
import StatsItems from "./StatsItems";

const UserDataItems = ({ data, handleEditClick }) => {
  const { user: currentUser } = useAuth();
  const { mutate } = usePatchFollow();

  /* Check if I as Logged User in this user's followers */

  const amIFollower = data?.user?.followers?.some(
    (follower) => follower._id === currentUser?.id
  );

  /* Check if I as Logged User in my profile */
  const isMyProfile = currentUser?.id === data?.user?._id;

  const handleFollowToggle = () => {
    const action = amIFollower ? "unfollow" : "follow";
    const followUrl = `/users/${data?.user?._id}/follow?action=${action}`;
    mutate({ url: followUrl });
  };

  return (
    <div className="space-y-4 mt-10 md:mt-0 flex-1">
      {/* Header */}
      <div className="flex items-center md:justify-start space-x-4">
        <h1 className="text-2xl font-bold">{data?.user?.userName}</h1>

        {/* Edit or Follow Button */}
        {isMyProfile ? (
          <BtnUpdate handleEditClick={handleEditClick} text="Edit Profile" />
        ) : (
          <Button
            variant={amIFollower ? "destructive" : "default"}
            size="sm"
            onClick={handleFollowToggle}
            className="gap-2"
          >
            {amIFollower ? (
              <>
                <UserMinus className="w-4 h-4" />
                Unfollow
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                Follow
              </>
            )}
          </Button>
        )}
      </div>

      <p className="text-gray-600 max-w-md">{data?.user?.bio}</p>

      <div className="flex items-center space-x-1 text-gray-600">
        <Mail className="w-4 h-4" />
        <span>{data?.user?.email}</span>
      </div>

      <div className="flex items-center md:justify-start space-x-6 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{data?.user?.address || "NA"}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Phone className="w-4 h-4" />
          <span>{data?.user?.phone || "NA"}</span>
        </div>
        <div className="flex items-center space-x-1">
          <LinkIcon className="w-4 h-4" />
          <span className="text-primary">portfolio.com</span>
        </div>
      </div>

      <StatsItems data={data} />
    </div>
  );
};

export default UserDataItems;
