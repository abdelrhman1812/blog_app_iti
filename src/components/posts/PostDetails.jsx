import { Separator } from "@/components/ui/separator";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { Button } from "../ui/button";
const PostDetails = ({ post }) => {
  return (
    <>
      <Separator />
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          {/* {post.likes} likes • */}
          {post.comments.length} comments
        </span>
        <span> shares</span>
      </div>
      <Separator />
      <div className="flex items-center justify-around py-1">
        <Button variant="ghost" size="sm" className="flex-1 hover:bg-gray-100">
          <Heart className="w-4 h-4 mr-2" />
          Like
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 hover:bg-gray-100">
          <MessageCircle className="w-4 h-4 mr-2" />
          Comment
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className=" flex-1 hidden lg:flex   hover:bg-gray-100"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className=" flex-1 hidden lg:flex   hover:bg-gray-100"
        >
          <Bookmark className="w-4 h-4 mr-2" />
          Save
        </Button>
      </div>
      <Separator />
    </>
  );
};

export default PostDetails;
