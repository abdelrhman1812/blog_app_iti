import endPoints from "@/config/endpoints";
import { useDeleteComments } from "@/hooks/Actions/comments/useCommentsCurds";
import formatDate from "@/utils/formatDate";
import isArabic from "@/utils/IsArabic";
import { Edit, Heart } from "lucide-react";
import { Button } from "../ui/button";

const CommentContent = ({ comment, user, setIsEditing, postId }) => {
  const { mutate } = useDeleteComments();

  const handleDelete = () => {
    const url =
      postId && comment
        ? `${endPoints.posts}/${postId}${endPoints.deleteComment}/${comment?._id}`
        : null;
    mutate({ url });
  };

  return (
    <>
      <div className="bg-background-foreground shadow space-y-3 rounded-lg px-3 py-2">
        <p className="font-semibold text-sm capitalize">
          {comment?.createdBy.userName}
        </p>
        <p
          className="text-sm text-muted-foreground dark:text-white "
          dir={isArabic(comment?.content) ? "rtl" : "ltr"}
        >
          {comment?.content}
        </p>
      </div>
      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 ">
        <span>{formatDate(comment?.createdAt)}</span>
        <Button
          variant="default"
          size="sm"
          className="h-auto p-0 text-xs bg-transparent hover:text-destructive cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
        >
          <Heart className="w-3 h-3 mr-1" />
          Like
        </Button>
        {user?.user._id === comment?.createdBy?._id && (
          <>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs bg-transparent hover:text-primary cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="w-3 h-3 mr-1" />
              Edit
            </Button>
            <Button
              onClick={handleDelete}
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs bg-transparent hover:text-destructive cursor-pointer hover:bg-transparent text-muted-foreground shadow-none"
            >
              <Edit className="w-3 h-3 mr-1" />
              Delete
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CommentContent;
