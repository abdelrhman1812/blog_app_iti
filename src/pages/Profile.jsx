import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import endPoints from "@/config/endpoints";
import { useAuth } from "@/context/AuthContext";
import { useGetUserProfile } from "@/hooks/Actions/users/useUsersCurds";
import { Check, Upload, X } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(typeof id);
  const { data } = useGetUserProfile(
    id ? `${endPoints.userProfileById}/${id}` : null
  );
  console.log(data);
  const { user } = useAuth();

  const [file, setFile] = useState(null);
  const [fileObject, setFileObject] = useState(null);

  // const { data } = useUserAuth();

  const handleImageChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setFile(url);
    setFileObject(e.target.files[0]);
  };

  const handleRemoveImage = () => {
    URL.revokeObjectURL(file);
    setFile(null);
    setFileObject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-6 px-4">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar Section */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200">
                  {file ? (
                    <img
                      src={file}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Avatar className="w-full h-full">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-2xl">
                        {user?.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>

                <div className="absolute -bottom-2 -right-2 flex flex-col space-y-1">
                  {/* Upload Image Button */}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                    id="image"
                  />
                  <Label
                    htmlFor="image"
                    className="rounded-full flex items-center justify-center  w-8 h-8 p-0 bg-primary hover:bg-primary"
                  >
                    <Upload className="w-4 h-4 text-center text-white" />
                  </Label>

                  {fileObject && (
                    <Button
                      size="sm"
                      className="rounded-full w-8 h-8 p-0 bg-green-500 hover:bg-green-600"
                      // onClick={handleSubmitImage}
                      title="Submit Image"
                    >
                      <Check className="w-4 h-4" />
                    </Button>
                  )}

                  {(fileObject || user?.avatar) && (
                    <Button
                      size="sm"
                      className="rounded-full w-8 h-8 p-0 bg-red-500 hover:bg-red-600"
                      onClick={handleRemoveImage}
                      title="Remove Image"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
{
  /* <CreatePost /> */
}
// {/* Profile Tabs */}
// <Tabs defaultValue="posts" className="space-y-6">
//   <TabsList className="grid w-full grid-cols-3">
//     <TabsTrigger value="posts">Posts</TabsTrigger>
//     <TabsTrigger value="about">About</TabsTrigger>
//     <TabsTrigger value="activity">Activity</TabsTrigger>
//   </TabsList>

//   <TabsContent value="posts" className="space-y-6">
//     {data?.posts?.length > 0 ? (
//       data?.posts?.map((post) => (
//         <PostItem key={post?._id} post={post} />
//       ))
//     ) : (
//       <Card>
//         <CardContent className="text-center py-12">
//           <p className="text-gray-500">
//             No posts yet. Start sharing your thoughts!
//           </p>
//         </CardContent>
//       </Card>
//     )}
//   </TabsContent>

//   <TabsContent value="about" className="space-y-6">
//     <Card>
//       <CardHeader>
//         <h3 className="text-lg font-semibold">About</h3>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div>
//           <h4 className="font-medium mb-2">Bio</h4>
//           {/* <p className="text-gray-600">{user.bio}</p> */}
//         </div>
//         <div>
//           <h4 className="font-medium mb-2">Interests</h4>
//           <div className="flex flex-wrap gap-2">
//             <Badge variant="secondary">Web Development</Badge>
//             <Badge variant="secondary">React</Badge>
//             <Badge variant="secondary">JavaScript</Badge>
//             <Badge variant="secondary">UI/UX Design</Badge>
//             <Badge variant="secondary">Technology</Badge>
//           </div>
//         </div>
//         <div>
//           <h4 className="font-medium mb-2">Contact</h4>
//           {/* <p className="text-gray-600">{user.email}</p> */}
//         </div>
//       </CardContent>
//     </Card>
//   </TabsContent>

//   <TabsContent value="activity" className="space-y-6">
//     <Card>
//       <CardHeader>
//         <h3 className="text-lg font-semibold">Recent Activity</h3>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="flex items-center space-x-3 text-sm">
//           <Heart className="w-4 h-4 text-red-500" />
//           <span>Liked a post by Sarah Wilson</span>
//           <span className="text-gray-500">2 hours ago</span>
//         </div>
//         <div className="flex items-center space-x-3 text-sm">
//           <MessageCircle className="w-4 h-4 text-blue-500" />
//           <span>Commented on Mike Chen's post</span>
//           <span className="text-gray-500">5 hours ago</span>
//         </div>
//         <div className="flex items-center space-x-3 text-sm">
//           <Share2 className="w-4 h-4 text-green-500" />
//           <span>Shared a post about CSS tips</span>
//           <span className="text-gray-500">1 day ago</span>
//         </div>
//       </CardContent>
//     </Card>
//   </TabsContent>
// </Tabs>
