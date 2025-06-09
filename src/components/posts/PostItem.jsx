import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import formatDate from "@/utils/formatDate";
import CommentList from "../comments/CommentList";
import PostDetails from "./PostDetails";

const PostItem = ({ post }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage
                src={post?.owner.image.secure_url || "/placeholder.svg"}
                alt={post?.owner.userName}
              />
              <AvatarFallback>{post.owner.userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm">{post.owner.userName}</h3>
              <p className="text-xs text-gray-500">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            •••
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <div className="w-full">
            <img
              src={post?.images[0].secure_url || "/placeholder.svg"}
              alt="Post image"
              className="w-full md:w-75 mx-auto rounded-lg object-cover"
            />
          </div>
          <PostDetails post={post} />

          <CommentList comments={post.comments} postId={post._id} />
        </div>
      </CardContent>
    </Card>
  );
};

export default PostItem;
