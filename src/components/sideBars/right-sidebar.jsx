import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  useGetSuggestedUsers,
  usePatchFollow,
} from "@/hooks/Actions/users/useUsersCurds";
import { Eye, Loader2, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import RightSidebarSkeleton from "../Skeleton/RightSidebarSkeleton";

const RightSidebar = () => {
  const { data, isPending: isSuggestionsLoading } = useGetSuggestedUsers();
  const { mutate } = usePatchFollow();
  const [loadingUserId, setLoadingUserId] = useState(null);

  const users = data?.users || [];

  const handleFollow = (id) => {
    setLoadingUserId(id);
    const followUrl = `/users/${id}/follow?action=follow`;
    mutate({
      url: followUrl,
    });
  };

  return (
    <div className="w-full h-full my-7 space-y-6 pb-20 overflow-hidden">
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium text-sm mb-3">People You May Know</h3>
          <div className="space-y-4">
            {isSuggestionsLoading ? (
              <RightSidebarSkeleton />
            ) : users.length > 0 ? (
              <>
                {users.map((user) => (
                  <div
                    key={user._id}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Link to={`/profile/${user?._id}`}>
                        <Avatar>
                          <AvatarImage
                            src={user?.image?.secure_url}
                            alt={user.userName}
                            className="object-cover"
                          />
                          <AvatarFallback>
                            {user.userName?.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                      </Link>
                      <div>
                        <p className="text-sm font-medium">{user?.userName}</p>
                        <p className="text-xs text-muted-foreground">
                          {user?.followers?.length} followers
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        disabled={loadingUserId === user._id}
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => handleFollow(user?._id)}
                        aria-label="Follow user"
                      >
                        {loadingUserId === user._id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="h-8 w-8 p-0"
                      >
                        <Link to={`/profile/${user?._id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center text-primary"
                >
                  See All Suggestions
                </Button>
              </>
            ) : (
              <p className="text-sm text-muted-foreground text-center">
                No suggestions at the moment.
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;
