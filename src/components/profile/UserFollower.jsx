import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { usePatchFollow } from "@/hooks/Actions/users/useUsersCurds";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/user-img.svg";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const UserFollower = ({ data }) => {
  const follower = data?.user?.followers;
  const following = data?.user?.following;
  const { user: userAuth } = useAuth();
  const { mutate } = usePatchFollow();

  const isFollowing = (userId) => {
    return following?.some((followingUser) => followingUser._id === userId);
  };

  const handleFollowToggle = (userId, isCurrentlyFollowing) => {
    const action = isCurrentlyFollowing ? "unfollow" : "follow";
    const followUrl = `/users/${userId}/follow?action=${action}`;
    mutate({
      url: followUrl,
    });
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Followers</h3>
      </CardHeader>
      <CardContent>
        {follower?.length > 0 ? (
          <div className="space-y-4">
            {follower?.map((user) => {
              const followingStatus = isFollowing(user._id);
              return (
                <div
                  key={user._id}
                  className="flex items-center justify-between gap-3 p-2 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Link to={`/profile/${user?._id}`}>
                      <Avatar>
                        <AvatarImage
                          src={user?.image?.secure_url || userImg}
                          alt={user?.userName}
                          loading="lazy"
                        />
                        <AvatarFallback>
                          {user?.userName?.charAt(0) || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Link>

                    <div>
                      <p className="font-medium">{user?.userName}</p>
                      <p className="text-sm text-gray-500 overflow-hidden break-all">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  {userAuth?.id === data?.user?._id && (
                    <Button
                      variant={followingStatus ? "outline" : "default"}
                      size="sm"
                      className={"cursor-pointer"}
                      onClick={() =>
                        handleFollowToggle(user._id, followingStatus)
                      }
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      {followingStatus ? "Following" : "Follow"}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 py-4">No followers</p>
        )}
      </CardContent>
    </Card>
  );
};

export default UserFollower;
