import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { usePatchFollow } from "@/hooks/Actions/users/useUsersCurds";
import { Link } from "react-router-dom";
import userImg from "../../assets/images/user-img.svg";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

const UserFollowing = ({ data }) => {
  const following = data?.user?.following;
  const { mutate } = usePatchFollow();
  const { user: userAuth } = useAuth();

  const handleUnfollow = (userId) => {
    const unfollowUrl = `/users/${userId}/follow?action=unfollow`;
    mutate({
      url: unfollowUrl,
    });
  };

  return (
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Following</h3>
      </CardHeader>
      <CardContent>
        {following?.length > 0 ? (
          <div className="space-y-4">
            {following?.map((user) => (
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
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {userAuth?.id === data?.user?._id && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnfollow(user._id)}
                  >
                    Unfollow
                  </Button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 py-4">No following</p>
        )}
      </CardContent>
    </Card>
  );
};

export default UserFollowing;
