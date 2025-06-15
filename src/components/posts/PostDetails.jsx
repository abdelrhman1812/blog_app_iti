import { Separator } from "@/components/ui/separator";
import { usePatchLikePost } from "@/hooks/Actions/posts/usePostsCurds";
import useUserAuth from "@/hooks/Actions/users/useUserAuth";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

const PostDetails = ({ post }) => {
  const { data: user } = useUserAuth();
  const [liked, setLiked] = useState(false);
  const { mutate, isPending } = usePatchLikePost();

  const handleLike = () => {
    const action = liked ? "unlike" : "like";
    const likeUrl = `/posts/${post._id}/like?action=${action}`;

    mutate(
      {
        url: likeUrl,
        data: {},
      },
      {
        onSuccess: () => {
          setLiked((prev) => !prev);
        },
      }
    );
  };

  return (
    <>
      <Separator />
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-2">
          <span>{post?.comments?.length} comments</span>
          <span>{post?.likes?.length} likes</span>
        </div>
        <span> shares</span>
      </div>
      <Separator />
      <div className="flex items-center justify-around py-1">
        <Button
          variant="default"
          size="sm"
          className="flex-1 bg-transparent text-dark shadow-none hover:bg-transparent  hover:text-destructive cursor-pointer"
          onClick={handleLike}
          disabled={isPending}
        >
          <Heart
            className={`w-4 h-4 mr-2 hover:drop-shadow-2xl  ${
              post?.likes?.some((like) => like._id === user?.user?._id)
                ? "text-destructive fill-destructive"
                : ""
            }`}
          />
        </Button>

        <Button
          variant="default"
          size="sm"
          className="flex-1 bg-transparent hover:bg-transparent text-muted-foreground shadow-none "
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Comment
        </Button>

        <Button
          variant="default"
          size="sm"
          className="flex-1 hidden bg-transparent lg:flex hover:bg-transparent text-muted-foreground shadow-none  "
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>

        <Button
          variant="default"
          size="sm"
          className="flex-1 hidden lg:flex bg-transparent hover:bg-transparent text-muted-foreground shadow-none "
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
