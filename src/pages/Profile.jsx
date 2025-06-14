// import PostItem from "@/components/posts/PostItem";
// import ImageProfile from "@/components/profile/ImageProfile";
// import LoadingSpinner from "@/components/shared/LoadingSpinner";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import endPoints from "@/config/endpoints";
// import { useGetUserProfile } from "@/hooks/Actions/users/useUsersCurds";
// import { useParams } from "react-router-dom";

// export default function Profile() {
//   const { id } = useParams();

//   const url = id ? `${endPoints.userProfileById}/${id}` : null;

//   const { data, isPending } = useGetUserProfile(url, id);

//   if (isPending) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="min-h-screen ">
//       <div className="max-w-4xl mx-auto py-6 px-4">
//         {/* Profile Header */}
//         <Card className="mb-6">
//           <CardContent className="pt-6">
//             <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
//               {/* Avatar Section */}
//               <ImageProfile data={data} />
//             </div>
//           </CardContent>
//         </Card>
//         {/* Profile Tabs */}
//         <Tabs defaultValue="posts" className="space-y-6">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="posts">Posts</TabsTrigger>
//             <TabsTrigger value="about">About</TabsTrigger>
//           </TabsList>

//           <TabsContent value="posts" className="space-y-6">
//             {data?.posts?.length > 0 ? (
//               data?.posts?.map((post) => (
//                 <PostItem key={post?._id} post={post} />
//               ))
//             ) : (
//               <Card>
//                 <CardContent className="text-center py-12">
//                   <p className="text-gray-500">
//                     No posts yet. Start sharing your thoughts!
//                   </p>
//                 </CardContent>
//               </Card>
//             )}
//           </TabsContent>

//           <TabsContent value="about" className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <h3 className="text-lg font-semibold">About</h3>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <h4 className="font-medium mb-2">Bio</h4>
//                   {/* <p className="text-gray-600">{user.bio}</p> */}
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Interests</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="secondary">Web Development</Badge>
//                     <Badge variant="secondary">React</Badge>
//                     <Badge variant="secondary">JavaScript</Badge>
//                     <Badge variant="secondary">UI/UX Design</Badge>
//                     <Badge variant="secondary">Technology</Badge>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-medium mb-2">Contact</h4>
//                   {/* <p className="text-gray-600">{user.email}</p> */}
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
// {
//   /* <CreatePost /> */
// }

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
import { useGetUserProfile } from "@/hooks/Actions/users/useUsersCurds";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
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
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-6">
            {isPending ? (
              <PostSkeleton length={3} />
            ) : data?.posts?.length > 0 ? (
              <PostList posts={data.posts} />
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
