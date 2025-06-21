import SuggestedPeopleSkeleton from "@/components/Skeleton/SuggestedPeopleSkeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  useGetSuggestedUsers,
  usePatchFollow,
} from "@/hooks/Actions/users/useUsersCurds";
import { Loader2, MapPin, UserPlus, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImg from "../assets/images/user-img.svg";

const SuggestedPeople = () => {
  const { data, isPending } = useGetSuggestedUsers();
  const { mutate, isPending: isPendingFollow } = usePatchFollow();
  const [loadingUserId, setLoadingUserId] = useState(null);
  const navigate = useNavigate();

  const users = data?.users || [];

  const handleFollow = (id) => {
    setLoadingUserId(id);
    const followUrl = `/users/${id}/follow?action=follow`;
    mutate({
      url: followUrl,
    });
  };
  const handleNavigate = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">People You May Know</h1>
          <p className="text-gray-600">
            Discover and connect with new people based on your interests and
            connections
          </p>
        </div>

        {isPending ? (
          <SuggestedPeopleSkeleton />
        ) : (
          <>
            {/* Suggested People Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.length > 0 ? (
                users.map((suggestedUser) => (
                  <Card
                    key={suggestedUser._id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      <div className="text-center">
                        {/* Avatar */}
                        <Avatar className="h-20 w-20 mx-auto mb-4">
                          <AvatarImage
                            src={suggestedUser?.image?.secure_url || userImg}
                            alt={suggestedUser?.userName}
                          />
                          <AvatarFallback className="text-lg">
                            {suggestedUser?.Username?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>

                        {/* User Info */}
                        <h3 className="font-semibold text-lg mb-1">
                          {suggestedUser?.userName}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {suggestedUser?.userName}
                        </p>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {suggestedUser?.bio || "No bio"}
                        </p>

                        <div className="flex justify-center text-xs text-gray-500 mb-3">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>{suggestedUser?.address || "No address"}</span>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center space-x-4 text-xs text-gray-500 mb-4">
                          <span>
                            {suggestedUser?.followers?.length} followers
                          </span>
                          <span>{data?.postsCount} posts</span>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-y-2 space-x-2 justify-center ">
                          <Button
                            variant={"default"}
                            size="sm"
                            onClick={() => {
                              handleFollow(suggestedUser._id);
                            }}
                            className="gap-2 cursor-pointer"
                          >
                            {isPendingFollow &&
                            loadingUserId === suggestedUser._id ? (
                              <div className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Loading...</span>
                              </div>
                            ) : (
                              <>
                                <UserPlus className="w-4 h-4" />
                                Follow
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={() => handleNavigate(suggestedUser._id)}
                            variant="outline"
                            size="sm"
                            className="cursor-pointer"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-full">
                  <Card>
                    <CardContent className="text-center py-12">
                      <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">No people found</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SuggestedPeople;
