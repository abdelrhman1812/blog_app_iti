import CreatePost from "@/components/posts/CreatePost";
import NoPosts from "@/components/posts/NoPosts";
import PostList from "@/components/posts/PostList";
import ImageProfile from "@/components/profile/ImageProfile";
import UserData from "@/components/profile/UserData";
import UserFollower from "@/components/profile/UserFollower";
import UserFollowing from "@/components/profile/UserFollowing";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import ProfileSkeleton from "@/components/Skeleton/ProfileDataSkeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import endPoints from "@/config/endpoints";
import { useAuth } from "@/context/AuthContext";
import { useGetUserProfile } from "@/hooks/Actions/users/useUsersCurds";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  const { user } = useAuth();
  const url = id ? `${endPoints.userProfileById}/${id}` : null;
  const { data, isPending } = useGetUserProfile(url, id);

  if (isPending) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto py-6 px-4">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row  md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar Section - Separated from user data */}
              <ImageProfile data={data} />

              {/* User Data Section */}
              <UserData data={data} />
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="posts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              className="text-black data-[state=active]:text-white data-[state=active]:bg-primary"
              value="posts"
            >
              Posts
            </TabsTrigger>

            <TabsTrigger
              className="text-black data-[state=active]:text-white data-[state=active]:bg-primary"
              value="followers"
            >
              Followers
            </TabsTrigger>

            <TabsTrigger
              className="text-black data-[state=active]:text-white data-[state=active]:bg-primary"
              value="following"
            >
              Following
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {isPending ? (
              <PostSkeleton length={3} />
            ) : data?.posts?.length > 0 ? (
              <>
                {user?.id === id && <CreatePost />}
                <PostList posts={data.posts} />
              </>
            ) : (
              <NoPosts />
            )}
          </TabsContent>

          <TabsContent value="followers" className="space-y-6">
            <UserFollower data={data} />
          </TabsContent>

          <TabsContent value="following" className="space-y-6">
            <UserFollowing data={data} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
