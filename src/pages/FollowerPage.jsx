import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetUserFollower } from "@/hooks/Actions/users/useUsersCurds";

import UserFollower from "@/components/profile/UserFollower";
import UserFollowing from "@/components/profile/UserFollowing";
import UserFollowerSkeleton from "@/components/Skeleton/UserFollowerSkeleton";
const FollowerPage = () => {
  const { data, isPending } = useGetUserFollower();

  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto py-6 px-4">
        <Tabs defaultValue="followers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="followers">
              Followers ({data?.user?.followers.length})
            </TabsTrigger>
            <TabsTrigger value="following">
              Following ({data?.user?.following.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="followers" className="space-y-4">
            {isPending ? (
              <UserFollowerSkeleton />
            ) : (
              <UserFollower data={data} />
            )}
          </TabsContent>

          <TabsContent value="following" className="space-y-4">
            <UserFollowing data={data} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FollowerPage;
